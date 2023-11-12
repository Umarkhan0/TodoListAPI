import express from "express";
const app = express();
import router from "./routes/index.js";
const PORT = process.env.PORT || 8000
app.use(express.json());
app.use("/", (req, res, next) => {
    if (req?.query?.key === "123") {
        next()
app.use("/api", router);
    } else {
        res.status(404).send({ messge: "Rong key" })
    }
})
app.listen(PORT, () => {
    console.log("Server is runing port", PORT);
});
