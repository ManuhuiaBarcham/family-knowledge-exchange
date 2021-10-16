const { AuthenticationError } = require('apollo-server-express');
const { User, Interest, Profession } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('thoughts');
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('thoughts');
    // },

    // interests: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Interest.find(params).populate('interests');
    // },

    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('thoughts');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },

    //TODO: needs to fix this area. doesn't work with population
    //  return await User.find({}).populate('interests').populate('professions');
    users: async () => {
      let tmp = await User.find({}).populate('interest').populate('profession');
      console.log(tmp);
      for (const usr of tmp) {
        console.log("inside horray!");
        console.log(`${usr.username} professon:`,usr.profession);
        console.log(`${usr.username} interest:`,usr.interest);
      }
      return tmp;
    },
    interests: async () => {
      return await Interest.find({});
    },
    professions: async () => {
      return await Profession.find({});
    }
  
  },

  Mutation: {
    addUser: async (
      parent,
      {
        username,
        email,
        password,
        organization,
        location,
        profession,
        interest,
      }
    ) => {
      const user = await User.create({
        username,
        email,
        password,
        organization,
        location,
        profession,
        interest,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // Works above here

    // addThought: async (parent, { thoughtText }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.create({
    //       thoughtText,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    changeInterest: async (parent, { userId, interestOption }, context) => {
      if (context.interest) {
        return Interest.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: {
              interests: {
                interestOption,
                // commentAuthor: context.user.username,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // addComment: async (parent, { thoughtId, commentText }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $addToSet: {
    //           comments: { commentText, commentAuthor: context.user.username },
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },

    removeUser: async (parent, { userId }, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete({
          _id: userId,
          // thoughtAuthor: context.user.username,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { thoughts: thought._id } }
        // );

        return 'You successfully deleted your account.';
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // removeComment: async (parent, { thoughtId, commentId }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $pull: {
    //           comments: {
    //             _id: commentId,
    //             commentAuthor: context.user.username,
    //           },
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;