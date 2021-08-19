import gql from 'graphql-tag';

//0 LOGIN
//1 ADD_USER
//2 ADD_EVENT
//3 ADD_ACTIVITY
//4 ADD_ACTIVITY_IDEA
//5 ADD_ITINERARY
//6 UPDATE_ITINERARY
//7 ADD_EXPENSE
//8 ADD_MEAL
//9 ADD_MEAL_IDEAS
//10 ADD_GROCERY
//11 ADD_SPLIT_COST
//12 REMOVE_EVENT
//13 REMOVE_ACTIVITY
//14 REMOVE_ACTIVITY_IDEA
//15 REMOVE_ITINERARY
//16 REMOVE_EXPENSE
//17 REMOVE_MEAL
//18 REMOVE_MEAL_IDEA
//19 REMOVE_GROCERY
//20 UPDATE_SPLIT_COST

// export const  = gql`

// `;


export const LOGIN = gql`
    mutation login($email: String!, $password:String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            email
            admin
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($input: UserInput) {
        addUser(input: $input) {
            token
            user {
                _id
                first_name
                last_name
                email
            }
        }
    }
`;

export const ADD_EVENT = gql`
  mutation addEvent($input: EventInput) {
    addEvent(input:$input) {
      _id
      title
      notes
      total_cost
      event_id
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivities($input: ActivitiesInput) {
    addActivities(input:$input) {
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
  }
`;

export const ADD_ACTIVITY_IDEA = gql`
  mutation addActivityIdeas($input: Activity_IdeasInput) {
    addActivityIdeas(input:$input) {
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
  }
`;

export const ADD_ITINERARY = gql`
  mutation addItinerary($input:ItineraryInput) {
    addItinerary(input:$input) {
      _id
      name
      date
      event_id
      time
    }
  }
`;

export const UPDATE_ITINERARY = gql`
  mutation updateItinerary($event_id: String, $itinerary_id: String, $input: ItineraryInput) {
    updateItinerary(event_id: $event_id, itinerary_id: $itinerary_id, input: $input) {
      _id
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($input: ExpenseInput) {
    addExpense(input: $input) {
      _id
    }
  }
`;

export const ADD_MEAL = gql`
  mutation addMeal($input: MealInput) {
    addMeal(input: $input) {
      _id
    }
  }
`;

export const ADD_MEAL_IDEA = gql`
  mutation addMealIdeas($input: Meal_IdieasInput) {
    addMealIdeas(input: $input) {
      _id
    }
  }
`;

export const ADD_GROCERY = gql`
 mutation addGroceries($input: GroceriesInput) {
   addGroceries(input: $input) {
     _id
   }
 }
`;

export const ADD_SPLIT_COST = gql`
  mutation addSplitCost($input: Split_CostInput) {
    addSplitCost(input:$input) {
      _id
    }
  }
`;

export const REMOVE_EVENT = gql`
  mutation removeEvent($event_id: String) {
    removeEvent(event_id: $event_id) {
      _id
    }
  }
`;

export const REMOVE_ACTIVITY = gql`
  mutation removeActivities($event_id: String, $activity_id: String) {
    removeActivities(event_id: $event_id, activity_id: $activity_id) {
      _id
    }
  }
`;

export const REMOVE_ACTIVITY_IDEA = gql`
  mutation removeActivityIdea($event_id: String, $activity_idea_id: String) {
    removeActivityIdea(event_id: $event_id, activity_idea_id: $activity_idea_id) {
      _id
    }
  }
`;

export const REMOVE_ITINERARY = gql`
  mutation removeItinerary($event_id: String, $itinerary_id: String) {
    removeItinerary(event_id: $event_id, itinerary_id: $itinerary_id) {
      _id
    }
  }
`;

export const REMOVE_EXPENSE = gql`
  mutation removeExpense($event_id: String, $expense_id: String) {
    removeExpense(event_id: $event_id, expense_id: $expense_id) {
      _id
    }
  }
`;

export const REMOVE_MEAL = gql`
  mutation removeMeal($event_id: String, $meal_id: String) {
    removeMeal(event_id: $event_id, meal_id: $meal_id) {
      _id
    }
  }
`;

export const REMOVE_MEAL_IDEA = gql`
  mutation removeMealIdea($event_id: String, $meal_idea_id: String) {
    removeMealIdea(event_id: $event_id, meal_idea_id: $meal_idea_id) {
      _id
    }
  }
`;

export const REMOVE_GROCERY = gql`
  mutation removeGroceries($event_id: String, $groceries_id: String) {
    removeGroceries(event_id: $event_id, groceries_id: $groceries_id) {
      _id
    }
  }
`;

export const UPDATE_SPLIT_COST = gql`
  mutation updateSplitCost($split_cost_id: String, $event_id: String, $input: Split_CostInput) {
    updateSplitCost(split_cost_id: $split_cost_id, event_id: $event_id, input: $input) {
      _id
    }
  }
`;

export const UPDATE_ACTIVITY_IDEA = gql`
  mutation updateActivityIdeaVote($input: UpdateActivityIdeasInput, $event_id: String, $activity_idea_id: String) {
    updateActivityIdeaVote(input: $input, event_id: $event_id, activity_idea_id:$activity_idea_id) {
      _id
    }
  }
`;