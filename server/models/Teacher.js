import { Schema, model } from "mongoose";
//import { transformAuthInfo } from "passport";

// If I want that the title be a primary key
const teacherSchema = new Schema(
  {
    id: {
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
    image: {
      url: String,
      public_id: String
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Teacher", teacherSchema);
