import { gql } from '@apollo/client';
//We use this to query one user and all the atributes to his username. 
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      organization
      location
      interest {
        _id
        interestOption
      },
      profession {
        _id
        professionOption
      }
    }
  }
`;

export const QUERY_INTERESTS = gql`
  query getInterest {
    interest {
      _id
      interestOption
    }
  }
`;



export const QUERY_PROFESSION = gql`
  query Profession {
    profession {
      _id
      professionOption
    }
  }
`;

