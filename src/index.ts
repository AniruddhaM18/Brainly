import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, userModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { UserMiddleware } from "./middleware.js";




const app = express();
app.use(express.json())
app.post("/api/v1/signup", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
    await userModel.create({
        username: username,
        password: password
    })
    res.json({
        message: "User Signed IN"
    })
} catch (e) {
    res.status(411).json({
        message : "User Already Exists"
    })
}
});



app.post("/api/v1/content", UserMiddleware , async (req, res) => {
    console.log("Checking");
    const link = req.body.link;
    const type = req.body.type;
    console.log("Checking");
    await contentModel.create({
        link,
        type,
        //@ts-ignore
        userId :req.userId,
        tags :[]
    }) 
    console.log("Checking");

    return res.json({
        message : "Content Added"
    })
});

app.get("/api/v1/content",UserMiddleware, async(req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })

});


app.delete("/api/v1/content", (req, res) => {

});

app.post("/api/v1/brain", (req, res) => {

});

app.get("/api/v1/brain/:shareLink", (req, res) => {

});

app.listen(3000)