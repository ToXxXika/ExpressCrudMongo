import models,{connectDb} from "./models/index.js";
import express from "express";
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

connectDb().then(async ()=>{
    await createUser();
    app.listen(port,()=>{
        console.log(`Example app listening on port ${port}!`)
    });
});
const createUser = async ()=>{
    const user1 = new models.User({
        username:'Oussema',
    });
    await user1.save();
    console.log(user1)
};
