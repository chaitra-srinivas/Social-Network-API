const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

//Schema to create user model

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "invalid email"],
    },

    // Array of _id values referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    // Array of _id values referencing the User model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//virtual called friendCount that retrieves the length of the user's friends array field on query

userSchema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = model("User", userSchema);

module.exports = User;
