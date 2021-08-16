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
    events: [Events]
  }

  type Events {
    _id: ID
    event_name: String
    date: String
    event_id: String
  }

  input UserInput {
    first_name: String
    last_name: String
    email: String
    password: String
    admin: Boolean
    phone: String
    events: [UserEventInput]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Event {
    _id: ID
    event_id: String
    title: String
    notes: String
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
    event_id: String
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
    event_id: String
  }

  type Itinerary {
    _id: ID
    name: String
    date: String
    time: String
    event_id: String
  }

  type Expense {
    _id: ID
    item: String
    cost: String
    user: String
    paid: Boolean
    event_id: String
  }

  type Meal {
    _id: ID
    date: String
    meal_type: String
    ingredients: [String]
    time: String
    prepared_by: [String]
    event_id: String
  }

  type Meal_Ideas {
    _id: ID
    votes: [String]
    meal_name: String
    meal_type: String
    date: String
    time: String
    event_id: String
  }

  type Groceries {
    _id: ID
    item: String
    added_by: String
    purchased: Boolean
    purchased_by: String
    event_id: String
  }

  type Split_Cost {
    _id: ID
    name: String
    contributions: String
    owing: String
    event_id: String
  }


  input UserEventInput {
    event_id: String
    event_name: String
    date: String
  }

  input EventInput {
    event_id: String
    notes: String
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
    name: String
    date: String
    time: String
    cost: String
    address: String
    website: String
    map: String
    event_id: String
  }

  input Activity_IdeasInput {
    name: String
    date: String
    time: String
    cost: String
    address: String
    website: String
    map: String
    votes: [String]
    event_id: String
  }

  input ItineraryInput {
    name: String
    date: String
    time: String
    event_id: String
  }

  input ExpenseInput {
    item: String
    cost: String
    user: String
    paid: Boolean
    event_id: String
  }

  input MealInput {
    date: String
    meal_type: String
    ingredients: [String]
    time: String
    prepared_by: [String]
    event_id: String
  }

  input Meal_IdeasInput {
    votes: [String]
    meal_name: String
    meal_type: String
    date: String
    time: String
    event_id: String
  }

  input GroceriesInput {
    item: String
    added_by: String
    purchased: Boolean
    purchased_by: String
    event_id: String
  }

  input Split_CostInput {
    name: String
    contributions: String
    owing: String
    event_id: String
  }

  type Query {
    user(user_id: ID!): User
    users: [User]
    userMe: User
    event(event_id: ID!): Event
    events: [Event]
    event_id: String
  }

  type Mutation {
    addUser(input: UserInput): Auth
    addUserEvent(input: UserEventInput): User
    login(email: String!, password: String!): Auth
    addEvent(input: EventInput): Event
    addActivities(input: ActivitiesInput): Activities
    addActivityIdeas(input: Activity_IdeasInput): Activity_Ideas
    addItinerary(input: ItineraryInput): Itinerary
    updateItinerary( event_id: String, itinerary_id: String, input: ItineraryInput): Itinerary
    addExpense(input: ExpenseInput): Expense
    addMeal(input: MealInput): Meal
    addMealIdeas(input: Meal_IdeasInput): Meal_Ideas
    addGroceries(input: GroceriesInput): Groceries
    addSplitCost(input: Split_CostInput): Split_Cost
    removeEvent(event_id: String): Event
    removeActivities(event_id: String, activity_id: String): Activities
    removeActivityIdea(event_id: String, activity_idea_id: String): Activity_Ideas
    removeItinerary(event_id: String, itinerary_id: String): Itinerary
    removeExpense(event_id: String, expense_id: String): Expense
    removeMeal(event_id: String, meal_id: String): Meal
    removeMealIdea(event_id: String, meal_idea_id: String): Meal_Ideas
    removeGroceries(event_id: String, groceries_id: String): Groceries
    updateSplitCost(split_cost_id: String, event_id: String, input: Split_CostInput): Split_Cost
  }

`;

module.exports = typeDefs;
