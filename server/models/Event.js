const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const activitiesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: String,
      required: false,
      trim: true
    },
    time: {
      type: String,
      required: false,
      trim: true
    },
    cost: {
      type: String,
      required: false,
      trim: true
    },
    address: {
      type: String,
      required: false,
      trim: true
    },
    website: {
      type: String,
      required: false,
      trim: true
    },
    map: {
      type: String,
      required: false,
      trim: true
    },
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const activity_ideasSchema = new Schema(
  {
    name: {
      type: String,
      trim: true
    },
    date: {
      type: String,
      trim: true
    },
    time: {
      type: String,
      trim: true
    },
    cost: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    website: {
      type: String,
      trim: true
    },
    map: {
      type: String,
      trim: true
    },
    votes: [String],
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// const daySchema = new Schema(
//   {
//     time: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     description: {
//       type: String,
//       required: true,
//       trim: true
//     }
//   }
// )

const itinerarySchema = new Schema(
  {
    name: {
      type: String
    },
    date: {
      type: String,
      required: true,
      trim: true
    },
    time: {
      type: String,
      requried: true,
      trim: true
    },
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const expenseSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
      trim: true
    },
    cost: {
      type: String,
      required: true,
      trim: true
    },
    user: {
      type: String,
      required: true,
      trim: true
    },
    paid: {
      type: Boolean,
      required: true,
      trim: true,
      default: false
    },
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)

const mealSchema = new Schema(
  {
    date: {
      type: String,
      required: false,
      trim: true
    },
    meal_type: {
      type: String,
      required: false,
      trim: true
    },
    ingredients: [String],
    time: {
      type: String,
      required: false,
      trim: true
    },
    prepared_by: [String],
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const meal_ideaSchema = new Schema(
  {
    votes: [String],
    meal_name: {
      type: String,
      required: true,
      trim: true
    },
    meal_type: {
      type: String,
      required: false,
      trim: true
    },
    date: {
      type: String,
      required: false,
      trim: true
    },
    time: {
      type: String,
      required: false,
      trim: true
    },
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const groceriesSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
      trim: true,
    },
    added_by: {
      type: String,
      required: true,
      trim: true,
    },
    purchased: {
      type: Boolean,
      required: true,
      default: false,
      trim: true
    },
    purchased_by: {
      type: String,
      required: false,
      trim: true
    },
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const split_costSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true
    },
    contribution: {
      type: String,
      required: false,
      trim: true
    },
    owing: {
      type: String,
      required: false,
      trim: true
    },
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  }
);

const eventSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true
      },
      notes: {
        type: String,
        required: false,
        trim: true
      },
      activities: [activitiesSchema],
      activity_ideas: [activity_ideasSchema],
      itinerary: [itinerarySchema],
      expense: [expenseSchema],
      meal: [mealSchema],
      meal_idea: [meal_ideaSchema],
      groceries: [groceriesSchema],
      total_cost: {
        type: String,
        required: false,
        trim: true
      },
      split_cost: [split_costSchema],
      event_id: {
        type: String,
        required: true,
        trim: true
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
);

const Event = model('Event', eventSchema);

module.exports = Event;
