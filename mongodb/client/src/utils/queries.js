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
  cart {
    product_id
    quantity
  }
  address{
    street_name
    street_number
  }
  pastOrders
}
}
`;