const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userEventSchema = new Schema(
  {
    event_name: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: String,
      required: true,
      trim: true
    },
    event_id: {
      type: String,
      required: true,
      trim: true
    }
  }
)

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must be a valid email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        admin: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Number
        },
        events: [userEventSchema],
    },
    {
      toJSON: {
        getters: true
      }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
