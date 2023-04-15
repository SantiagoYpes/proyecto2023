import { Schema, model } from "mongoose";
//import { transformAuthInfo } from "passport";

// If I want that the title be a primary key
const teacherSchema = new Schema(
  {
    ced: {
      type: String,
      require: true,
      unique: true,
      //Trim is used to cut the space
      trim: true,
    },
    name: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
      trim: true,
    },
    cell: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    valuehour: {
      type: Number,
      require: true,
    },
    image: {
      url: String,
      public_id: String
    },
    Type: {
      type: String,
      require: true,

    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Teacher", teacherSchema);
