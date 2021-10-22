import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import AwesomeSelect from '../components/AwesomeSelect';
import img3 from '../components/Assets/15-153268_s.jpg';
import { QUERY_USER, QUERY_USERS, QUERY_ME, QUERY_INTERESTS } from '../utils/queries';
import UserCard from '../components/UserCard';
import './Profile.css';

const Profile = () => {
  const [selectedInterest, setSelectedInterest] = useState('');

  let matchedUsers = [];
  const handleInterestChange = (event) => {
    const { value } = event.target;
    setSelectedInterest(value);

  };

  const routeData = useParams();
  const { username: userParam } = routeData;

  const queryRes = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const { loading, data } = queryRes
  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Redirect to="/me" />;
  // }
  const interestQueryReply = useQuery(QUERY_INTERESTS);
  let interests = interestQueryReply.data?.interests || [];
  if (interestQueryReply.data) {
    interests = interests.map(interest => {
      let newInterest = {
        id: interest._id,
        name: interest.interestOption
      }
      return newInterest;
    });
  }

  const matchedUsersQueryResults = useQuery(QUERY_USERS, {
    variables: {
      filter: {
        interest: selectedInterest
      }
    }
  });
  matchedUsers = matchedUsersQueryResults.data?.users || [];
  console.log(matchedUsers)

  if (loading) {
    return <div>Loading...</div>;
  }


  if (!user?.username) {
    return (
      <div class="col-md-12" style={{Width: "200%", height:"150%"}}>
        <br/>
        <br/>
      <div class="row ">
        <div class="col-md-6">
          <img src={img3} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-6">
          <div class="card-body">
          
            <p style={{justifyContent: "center",  marginLeft:"50px", fontSize:"30px", fontWeight:"bold"}}>
                Success! You may now head back to the homepage.{' '}
                <br/>
                <br/>
                <Link to="/"><button class="btn btn-primary d-grid gap-2 col-8 mx-auto"type="button" style={{justifyContent: "center",  marginLeft:"50px", fontSize:"30px", fontWeight:"bold"}}>Homepage</button></Link>
              </p>
              <br/>
              
            <p class="card-text" style={{marginLeft:"50px", fontSize:"30px", fontWeight:"bold"}} >

              Thankyou for joining the Family Knowledge Exchange Network! We hope you have found a community of professionals. </p>
            <br/>
          </div>
        </div>
      </div>
    </div>
     
    );
  }



  return (
    <>
      <div className="row">
        <div className="col-12">
          {interestQueryReply.loading ? (
            <div>Loading...</div>
          ) : (
            <AwesomeSelect className="form-control w-100" onChange={handleInterestChange} name="Interest" options={interests} />
          )}
        </div>
      </div>
      <br/>
      <div className="row row-cols-1 row-cols-lg-2">
        {/* The user connections to other users */}
        <div className="col">
          <h5>Profile</h5>
          <br/>
          <UserCard user={user} renderGreeting={true} renderEdit={true} />
        </div>
        {!matchedUsersQueryResults.loading && matchedUsers.length > 0 && (
          <div className="col">
            <h5>Connections</h5>
                <div className="container d-none d-md-inline contact-grid">
                  <div className="row">
                    <div className="col-3 border" >Name</div>
                    
                    {/* <div className="col-3 border">Email</div> */}
                    <div className="col-3 border">Profession</div>
                    <div className="col-3 border">Org</div>
                    <div className="col-3 border">Location</div>
                  </div>

                  {matchedUsers.map((usr) => (
                    <div key={usr.id} className="row">
                      <div className="col-3 border"><a href={`mailto:${usr.email}`}> {usr.username}</a></div>
                      {/* <div className="col-3 border">{usr.email}</div> */}
                      <div className="col-3 border">{usr.profession.professionOption}</div>
                      <div className="col-3 border">{usr.organization}</div>
                      <div className="col-3 border">{usr.location}</div>
                    </div>
                  ))}
                </div>
                <div className="d-md-none d-inline">
                  {matchedUsers.map((usr) => (
                    <UserCard key={usr.id} user={usr} />
                  ))}
                </div>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Edit Connections
                </button>
          </div>
        )}

      </div>
    </>
  );
};

export default Profile;
