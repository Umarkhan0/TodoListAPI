import express from "express";
const router = express.Router();
import todosArr from "./data.js";
import Joi from "joi";

const userSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required()
});

router.post("/", (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error) {
      res.status(400).send({ message: error.details[0].message });
    } else {
      todosArr.push({ id: todosArr.length + 1, ...req.body });
      console.log(req.body);
      res.status(200).send({ message: "User added successfully" });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
});

export default router;
