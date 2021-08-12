require('dotenv').config();

const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');

const { User, Events } = require('../models');
const { signToken } = require('../utils/auth');
const { formDate } = require('../utils/helpers');
const mongoose = require('mongoose');

const resolvers = {
    Query: {
        user: async (parent, { user_id }, context) => {
            return await User.findById( user_id )
                .select('-__v -password')
        },
        users: async (parent, args, context) => {
            return await User.find({})
                .select('-__v -password');
        },
        userMe: async (parent, args, context) => {
            if (context.user) {
              console.log(context.user._id);
                const user = await User.findById({ _id: context.user._id })
                    .select('-__v -password');
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
    },
    Mutation: {
        addUser: async (parent, { input }) => {
            const user = await User.create(input);
            const token = signToken(user);
            
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('User not found');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user }
        },
    }
};

module.exports = resolvers;
