import gql from 'graphql-tag';

// 1 USER
// 2 USER_ME

export const USER = gql`
query user($user_id: ID!) {
  user(user_id: $user_id) {
    _id
    first_name
    last_name
    email
    phone
    events {
      _id
      event_id
      event_name
    }
  }
}
`;

export const USER_ME = gql`
query {userMe {
  _id
  first_name
  last_name
  email
  phone
  events {
    _id
    event_name
    event_id
  }
}
`;

export const EVENT = gql`
query event($event_id: ID!) {
  event(event_id:$event_id) {
    _id
    event_id
    title
    notes
    activities {
      _id
      name
      date
      time
      cost
      address
      website
      map
      event_id
    }
    acitivity_ideas {
      _id
      name
      date
      time
      cost
      address
      website
      map
      votes
      event_id
    }
    itinerary {
      _id
      name
      date
      time
      event_id
    }
    expense {
      _id
      item
      cost
      user
      paid
      event_id
    }
    meal {
      _id
      date
      meal_type
      ingredients
      time
      prepared_by
      event_id
    }
    meal_ideas {
      _id
      votes
      meal_name
      meal_type
      date
      time
      event_id
    }
    groceries {
      _id
      item
      added_by
      purchased
      purchased_by
      event_id
    }
    total_cost
    split_cost {
      _id
      name
      contributions
      owing
      event_id
    }
  }
}
`;