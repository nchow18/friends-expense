const { gql } = require('apollo-server-express');

// Event
//   title
//   activities
//     name
//     date
//     time
//     cost
//     address
//     website
//     map
//   activity_ideas
//     name
//     date
//     time
//     cost
//     address
//     website
//     map
//     votes
//   itinerary
//     name
//     date
//     day
//   expense
//     item
//     cost
//     user
//     paid
//   meal
//     date
//     meal_type
//     ingredients
//     prepared_by
//   meal_idea
//     votes
//     meal_name
//     date
//     time
//   groceries
//     item
//     added_by
//     purchased
//     purchased_by
//   total_cost
//   split_cost
//     name
//     constribution
//     owing

// User
//   first_name
//   last_name
//   email
//   password
//   admin
//   phone
//   events
//     event_name
//     date
  

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    email: String
    admin: Boolean
    phone: String
    events: [String]
  }

  input UserInput {
    first_name: String
    last_name: String
    email: String
    password: String
    admin: Boolean
    phone: String
    events: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Events {
    _id: ID
    title: String
    activities: [Activities]
    activity_ideas: [Activity_Ideas]
    itinerary: [Itinerary]
    expense: [Expense]
    meal: [Meal]
    meal_ideas: [Meal_Ideas]
    groceries: [Groceries]
    total_cost: String
    split_cost: [Split_Cost]
  }

  type Activities {
    _id: ID
    name: String
    date: String
    time: String
    cost: String
    address: String
    website: String
    map: String
  }

  type Activity_Ideas {
    _id: ID
    name: String
    date: String
    time: String
    cost: String
    address: String
    website: String
    map: String
    votes: [String]
  }

  type Itinerary {
    name: String
    date: String
    day: [Day]
  }

  type Day {
    slot_12_am: String
    slot_1_am: String
    slot_2_am: String
    slot_3_am: String
    slot_4_am: String
    slot_5_am: String
    slot_6_am: String
    slot_7_am: String
    slot_8_am: String
    slot_9_am: String
    slot_10_am: String
    slot_11_am: String
    slot_12_pm: String
    slot_1_pm: String
    slot_2_pm: String
    slot_3_pm: String
    slot_4_pm: String
    slot_5_pm: String
    slot_6_pm: String
    slot_7_pm: String
    slot_8_pm: String
    slot_9_pm: String
    slot_10_pm: String
    slot_11_pm: String
  }

  type Expense {
    item: String
    cost: String
    user: String
    paid: Boolean
  }

  type Meal {
    date: String
    meal_type: String
    ingredients: [String]
    time: String
    prepared_by: [String]
  }

  type Meal_Ideas {
    votes: [String]
    meal_name: String
    meal_type: String
    date: String
    time: String
  }

  type Groceries {
    item: String
    added_by: String
    purchased: Boolean
    purchased_by: String
  }

  type Split_Cost {
    name: String
    contributions: String
    owing: String
  }




  input EventsInput {
    _id: ID
    title: String
    activities: [ActivitiesInput]
    activity_ideas: [Activity_IdeasInput]
    itinerary: [ItineraryInput]
    expense: [ExpenseInput]
    meal: [MealInput]
    meal_ideas: [Meal_IdeasInput]
    groceries: [GroceriesInput]
    total_cost: String
    split_cost: [Split_CostInput]
  }

  input ActivitiesInput {
    _id: ID
    name: String
    date: String
    time: String
    cost: String
    address: String
    website: String
    map: String
  }

  input Activity_IdeasInput {
    _id: ID
    name: String
    date: String
    time: String
    cost: String
    address: String
    website: String
    map: String
    votes: [String]
  }

  input ItineraryInput {
    name: String
    date: String
    day: [DayInput]
  }

  input DayInput {
    slot_12_am: String
    slot_1_am: String
    slot_2_am: String
    slot_3_am: String
    slot_4_am: String
    slot_5_am: String
    slot_6_am: String
    slot_7_am: String
    slot_8_am: String
    slot_9_am: String
    slot_10_am: String
    slot_11_am: String
    slot_12_pm: String
    slot_1_pm: String
    slot_2_pm: String
    slot_3_pm: String
    slot_4_pm: String
    slot_5_pm: String
    slot_6_pm: String
    slot_7_pm: String
    slot_8_pm: String
    slot_9_pm: String
    slot_10_pm: String
    slot_11_pm: String
  }

  input ExpenseInput {
    item: String
    cost: String
    user: String
    paid: Boolean
  }

  input MealInput {
    date: String
    meal_type: String
    ingredients: [String]
    time: String
    prepared_by: [String]
  }

  input Meal_IdeasInput {
    votes: [String]
    meal_name: String
    meal_type: String
    date: String
    time: String
  }

  input GroceriesInput {
    item: String
    added_by: String
    purchased: Boolean
    purchased_by: String
  }

  input Split_CostInput {
    name: String
    contributions: String
    owing: String
  }

  type Query {
    user(user_id: ID!): User
    users: [User]
    userMe: User
  }

  type Mutation {
    addUser(input: UserInput): Auth
    login(email: String!, password: String!): Auth

  }

`;

module.exports = typeDefs;
