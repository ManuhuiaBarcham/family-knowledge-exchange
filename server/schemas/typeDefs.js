const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    organization: String!
    location: String!
    profession: Profession!
    interest: Interest!
  }
  type Interest {
    _id: ID
    interestOption: String!
    # users: [User]
  }
  type Profession {
    _id: ID
    professionOption: String!
    # users: [User]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    interests: [Interest]
    professions: [Profession]
  }

  type Mutation {
    addUser(
      _id: ID
      username: String!
      email: String!
      password: String!
      organization: String!
      location: String!
      profession: String!
      interest: String!
    ): Auth
    login(email: String!, password: String!): Auth
    changeInterest(interestOption: String!): Interest
    removeUser(userId: ID): User
  }
`;

module.exports = typeDefs;
