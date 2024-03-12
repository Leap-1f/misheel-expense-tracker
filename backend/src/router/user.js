import { Router } from "express";
import { getAllUsers, signIn, signUp } from "../controller/user.js";

const user = Router();

user.route("/").get(getAllUsers);
user.route("signup").post(signUp)
user.route("signin").post(signIn)

export {user};