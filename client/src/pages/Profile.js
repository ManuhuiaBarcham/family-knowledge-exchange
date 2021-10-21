import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Signup from '../pages/Signup';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  console.log('ID', userParam);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('ID', data);
  console.log('ID', user);

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  console.log(data);
  return (
    <main>
      <div>
        <div>
          {/* the search bar */}

          {/* <button onclick={goToSearchPage}>
                    Find People with Similar Interests
                </button> */}
          <button
            to="/search"
            type="button"
            classNameName="btn btn-primary btn-lg"
          >
            Search
          </button>
        </div>

        <div classNameName="row">
          {/* The user connections to other users */}
          <div classNameName="col-sm-6">
            <div classNameName="card">
              <div className="card-body">
                <h5 className="card-title">Hi {data.user}!</h5>
                <p className="card-text">Email:{data.email}</p>
                <p className="card-text">Password:{data.password}</p>
                <p className="card-text">Organization:{data.organization}</p>
                <p className="card-text">Location:{data.location}</p>
                <p className="card-text">Interests:{}</p>
                <p className="card-text">Profession:{}</p>
                <a href="#" className="btn btn-primary">
                  Edit profile
                </a>
              </div>
            </div>
          </div>
          {/* The user connections to other users */}
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Connections</h5>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
