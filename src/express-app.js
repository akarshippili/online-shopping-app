import express from "express";
import cors from 'cors';

export default (app) => {

    // middleware
    app.use(cors());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static('public'));

    //api controllers
    app.get('/test',(req,res)=>{
        console.log(req.method);
        return res.json({name:"test"});
    });

};