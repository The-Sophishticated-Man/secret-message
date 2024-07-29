import express from "express";
import SMUser from "../utils/mongoAPIUtils";
import { body, validationResult } from "express-validator";
const router = express.Router();

router.post(
  "/:userId",
  body("secretMessage").exists().trim().escape().notEmpty(),
  (req, res) => {
    const result = validationResult(req).array();
    const userId = req.params?.userId;
    console.log("got request to userId: ", userId);
    const secretMessage = req.body.secretMessage;
    console.log("with a payload of: ", secretMessage);
    console.log("validation result:", result);
    if (result.length !== 0) {
      return res.status(400).json({ errors: result.map((error) => error.msg) });
    }
    if (!secretMessage) {
      res
        .status(400)
        .json({ error: "you didn't send a secretMessage dumbfuck" });
    } else {
      SMUser.updateOne(
        { _id: userId },
        {
          $push: {
            secretMessages: { message: secretMessage, date: new Date() },
          },
        }
      )
        .then((value) => {
          console.log("updated user: ", value);
          res.json({ message: "secret meassage sent successfully" });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error });
        });
    }
  }
);

export default router;
