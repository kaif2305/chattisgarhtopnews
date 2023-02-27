const express=require("express");
const { route } = ('express/lib/application')

const routes = express.Router();

const detail = require("../models/detail")
const HomeArticle1 = require("../models/article-1-home")
const three_articles = require("../models/3-articles")
const bulletin_news = require("../models/bulletin")
const carousel = require("../models/carousel");
const { find, findOne } = require("../models/3-articles");
const youtube = require("../models/youtube")
const marquee = require("../models/marquee");
const { Router } = require("express");

routes.get("/",async(req,res)=>{

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})
    const articlehome1 =await HomeArticle1.findOne({_id: "63bc62b3afcfeefade2b561c"})
    const ThreeArticles = await three_articles.find()
    const BulletinNews = await bulletin_news.find()
    const owl = await  carousel.findOne({_id: "63c02ac23a640332d53ee92f"})
    const yt = await youtube.findOne({_id: "63c032985c357ecd5a578b4b"})
    const marqe = await marquee.find()

    res.render("index",{
        Details: Details,
        articlehome1: articlehome1,
        ThreeArticles: ThreeArticles,
        BulletinNews: BulletinNews,
        owl: owl,
        yt: yt,
        mqe:marqe,
    })

})

// routes.get("/articles/:articleId",(req, res) => {
//     const { articleId } = req.params;
    
//     // db query with id = articleId

//     // generate html with article content

//     res.send("Hello World")
// })


routes.get("/articles",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("article_page",{
        Details: Details,
    })
    
})

routes.get("/article1",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("article_page1",{
        Details: Details,
    })
    
})


routes.get("/article2",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("article_page2",{
        Details: Details,
    })
    
})


routes.get("/article3",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("article_page3",{
        Details: Details,
    })
    
})


routes.get("/article4",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("article_page4",{
        Details: Details,
    })
    
})

routes.get("/article5",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("article_page5",{
        Details: Details,
    })
    
})


routes.get("/bureaucrat",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("bureaucrat",{
        Details: Details,
    })
    
})

routes.get("/election",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("election",{
        Details: Details,
    })
    
})

routes.get("/business",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("business",{
        Details: Details,
    })
    
})

routes.get("/judiciary",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("judiciary",{
        Details: Details,
    })
    
})

routes.get("/entertainment",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("entertainment",{
        Details: Details,
    })
    
})

routes.get("/sport",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("sport",{
        Details: Details,
    })
    
})

routes.get("/national",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("national",{
        Details: Details,
    })
    
})

routes.get("/contact",async(req,res) => {

    const Details=await detail.findOne({_id: "63b2e7ae656e85a850ccd76c"})

    res.render("contact",{
        Details: Details,
    })
    
})

// routes.post("/footer",async(req,res)=>{
//     try{
//         // res.send(req.body);
//         const userData = new User(req.body);
//         await userData.save();
//         res.status(201).render("home");
//     }catch(error){
//         alert("Message Send Successfully!");
//         res.status(500).send(error);
        
//     }
// })



module.exports=routes