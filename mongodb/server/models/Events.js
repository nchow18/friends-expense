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
      type: Date,
      default: Date.now,
      get: timestamp => dateFormate(timestamp)
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
      type: String
    },
    date: {
      type: String
    },
    time: {
      type: String
    },
    cost: {
      type: String
    },
    address: {
      type: String
    },
    website: {
      type: String
    },
    map: {
      type: String
    },
    votes: [String]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

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
    day: [
      {
        slot_12_am: String,
        slot_1_am: String,
        slot_2_am: String,
        slot_3_am: String,
        slot_4_am: String,
        slot_5_am: String,
        slot_6_am: String,
        slot_7_am: String,
        slot_8_am: String,
        slot_9_am: String,
        slot_10_am: String,
        slot_11_am: String,
        slot_12_pm: String,
        slot_1_pm: String,
        slot_2_pm: String,
        slot_3_pm: String,
        slot_4_pm: String,
        slot_5_pm: String,
        slot_6_pm: String,
        slot_7_pm: String,
        slot_8_pm: String,
        slot_9_pm: String,
        slot_10_pm: String,
        slot_11_pm: String,
      }
    ]
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
    time: String,
    required: false,
    trim: true
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
      String,
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
      defaut: false,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const total_costSchema = new Schema(
  {
    total_cost: {
      type: String,
      required: false,
      trim: true
    },
    split: {
      type: [String],
      required: false,
      trim: true
    }
  }
);

const eventSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      activities: [activitiesSchema],
      activity_ideas: [activity_ideasSchema],
      itinerary: [itinerarySchema],
      expense: [expenseSchema],
      meal: [mealSchema],
      meal_idea: [meal_ideaSchema],
      groceries: [groceriesSchema],
      total_cost: [total_costSchema]
    },
    {
      toJSON: {
        getters: true
      }
    }
);

const eventSchema = model('Event', eventSchema);

module.exports = Event;
