import express from "express";
const router = express.Router();
import todosArr from "./data.js";
import Joi from "joi";

const userSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});

router.put("/:id/", (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);

        if (error) {
            res.status(400).send({ message: error.details[0].message });
        } else {
            const dynamicParam = req.params.id;
            let index = todosArr.findIndex(v => v.id == Number(dynamicParam));
            todosArr.splice(index, 1, { id: Number(dynamicParam), ...req.body });
            res.send({ message: "user updated sussesfully" })
            console.log("Parameter:", dynamicParam);
        }
    } catch (err) {
        res.status(500).send({ message: "Internal server error" });
    }
});

export default router;
