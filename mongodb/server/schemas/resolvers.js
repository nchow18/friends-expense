require('dotenv').config();

const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');

const { User, Event } = require('../models');
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
        event: async (parent, { event_id }, context) => {
          return await Event.findById( event_id )
        },
        events: async (parent, args, context) => {
          return await Event.find({})
        }
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

        addEvent: async (parent, { input }, context) => {
          if (context.user) {
            const event = await Event.create(input)

            return event;
          }
          throw new AuthenticationError('ERROR in creating Event')
        },

        removeEvent: async (parent, { event_id }, context) => {
          if (context.user) {
            return await Event.findByIdAndDelete(
              event_id
            )
          }
        },

        addActivities: async (parent, { input }, context) => {
          if (context.user) {
            // get event ID
            const event_id = input.event_id;
            // find and update Event
            const updateEvent = await Event.findByIdAndUpdate(
              event_id,
              {$push: { activities: input }},
              { new: true }
            );
            return updateEvent
          }
        },

        removeActivities: async (parent, { event_id, activity_id }, context) => {
          if (context.user) {
            const updateEvent = await Event.findByIdAndUpdate(
              event_id,
              {$pull: { activities: { _id: { $in: [ activity_id ] }}}}
            );
            return updateEvent
          }
          throw new AuthenticationError('Not Logged In');
        },

        removeActivityIdea: async (parent, { event_id, activity_idea_id }, context) => {
          if (context.user) {
            const updateEvent = await Event.findByIdAndUpdate(
              event_id,
              { $pull: { activity_ideas: { _id: { $in: [ activity_idea_id ] }}}}
            );
            return updateEvent
          }
          throw new AuthenticationError('Not Logged In');
        },

        addActivityIdeas: async (parent, { input }, context) => {
          if (context.user) {
            // get event ID
            const event_id = input.event_id;
            // find and update Event
            const updateEvent = await Event.findByIdAndUpdate(
              event_id,
              {$push: { activity_ideas: input }},
              { new: true }
            );
            return updateEvent;
          }
          throw AuthenticationError('Not Logged In');
        },

        addItinerary: async (parent, { input }, context) => {
          if (context.user) {
            console.log(input);
            const updateEvent = await Event.findByIdAndUpdate(
              input.event_id,
              { $push: { itinerary: input }},
              { new: true }
            );
            return updateEvent;
          }
          throw AuthenticationError('Not Logged In');
        },

        removeItinerary: async (parent, { event_id, itinerary_id }, context) => {
          if (context.user) {
            const updateEvent = await Event.findByIdAndUpdate(
              event_id,
              { $pull: { itinerary: { _id: { $in: [ itinerary_id ] }}}}
            );
            return updateEvent;
          }
          throw AuthenticationError('Not Logged In');
        },

        addDay: async (parent, { input }, context) => {
          if (context.user) {
            const updateEvent = await Event.findByIdAndUpdate(
              input.event_id,
              { $push: { itinerary: { day: input }}}
            );
            return updateEvent;
          }
          throw AuthenticationError('Not Logged In');
        },

        updateDay: async (parent, { event_id, day_id, itinerary_id }, context) => {
          if (context.user) {
            const event = await Event.findById(event_id)

            const new_itinerary = [];

            //find array position
            for (var i = 0; i < event.itinerary.length; i++) {
              console.log(event.itinerary[i]._id)
              if (event.itinerary[i]._id === itinerary_id) {
                console.log('array ' + i);
                return;
              }
            }

            // const updateEvent = await Event.findByIdAndUpdate(
            //   event_id,
            //   { $pull: { itinerary: { _id: { $in: [ itinerary_id ]}}}}
            // );
            // return updateEvent;
            // }
            // throw AuthenticationError('Not Logged In');
        }
      }
    }
};

module.exports = resolvers;
