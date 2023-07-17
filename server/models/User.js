import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        min:2,
        max:50,
    },
    lastName: {
        type: String,
        require: true,
        min:2,
        max:50,
    },
    firstName: {
        type: String,
        require: true,
        min:2,
        max:50,
    },
    email: {
        type: String,
        require: true,
        max:50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min:5,
        unique: true
    },
    picturePath: {
        type: String,
        default: "",
    },
    friends: {
        type: Array,
        default: [],
    },
    location: String,
    occuption: String,
    viewedProfile:Number,
    impression:Number,
},
{timestamp: true}
);

const User = mongoose.model("User", userSchema);
export default User;