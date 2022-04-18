import {Router} from "express";
import {index, login, showuser, signup, reset, update} from "./controller.js";

const testRouter = Router();

// testRouter.route("/").get((req, res) => {
//     res.json({
//         data: "test sucess",
//     })
// });

testRouter.route("/").get(index);
testRouter.route("/login").post(login);
testRouter.route("/signup").post(signup);
testRouter.route("/user/:id/").get(showuser);
testRouter.route("/reset/:id/").post(reset);
testRouter.route("/update/:id/").put(update);


export default testRouter;

