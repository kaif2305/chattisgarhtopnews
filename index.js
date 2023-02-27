const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const app = express();
const Detail = require("./src/models/detail");
const routes = require("./src/routes/main");
// const ejs = require("ejs");
const bodyParser = require("body-parser");
const HomeArticle1 = require("./src/models/article-1-home");
const three_articles = require("./src/models/3-articles");
const bulletin_news = require("./src/models/bulletin")
const carousel = require("./src/models/carousel")
const youtube = require("./src/models/youtube")
const marquee = require("./src/models/marquee")
const tweet = require("./src/models/tweet")
const Contactus = require("./src/models/contactus")

app.use("/static", express.static("public"));
app.use("", routes);

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//db connect
mongoose
  .connect("mongodb://0.0.0.0:27017/NewsBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  })
  .then(() => {
    console.log("db connected");
    
  
    // marquee.create(
    //   {
    //     time: "11:45",
    //     news: "Hello world",
    //   },
    //   {
    //     time: "01:12",
    //     news: "Students Gang Banged their faculty Chandra Mohan",
    //   },
    //   {
    //     time: "16:45",
    //     news: "Need Money",
    //   },
    // )

    // youtube.create(

    //   {
    //     url : "https://www.youtube.com/embed/dhHm4dJiXeg?autoplay=0&mute=0",
    //   }
    // )

    // carousel.create(
    //   {
    //     slide1:[
    //       {
    //         imageUrl: "static/images/img-1.jpg",
    //         title: "The latest news live",
    //         date: "March 26, 2018",
    //         url: "#",
    //       },
    //       {
    //         imageUrl: "static/images/img-2.jpg",
    //         title: "Finance Advice",
    //         date: "April 2, 2018",
    //         url: "#",
    //       },
    //       {
    //         imagesUrl: "static/images/img-3.jpg",
    //         title: "Crypto world goes mad",
    //         date: "April 2, 2018",
    //         url: "#",
    //       }
    //     ],
    //     slide2:[
    //       {
    //         imageUrl: "static/images/img-2.jpg",
    //         title: "The latest news live",
    //         date: "April 2, 2018",
    //         url: "#",
    //       },
    //       {
    //         imageUrl: "static/images/img-3.jpg",
    //         title: "Crypto world goes mad",
    //         date: "April 2, 2018",
    //         url: "#",
    //       },
    //       {
    //         imageUrl: "static/images/img-1.jpg",
    //         title: "Finance Advice",
    //         date: "April 2, 2018",
    //         url: "#",
    //       }
    //     ],
    //     slide3:[
    //       {
    //         imageUrl: "static/images/img-3.jpg",
    //         title: "Finance Advice",
    //         date: "April 2, 2018",
    //         url: "#",
    //       },
    //       {
    //         imageUrl: "static/images/img-1.jpg",
    //         title: "Crypto world goes mad",
    //         date: "April 2, 2018",
    //         url: "#",
    //       },
    //       {
    //         imageUrl: "static/images/img-2.jpg",
    //         title: "The latest news live",
    //         date: "April 2, 2018",
    //         url: "#",
    //       }
    //     ],
    //   }
    // )

    // bulletin_news.create(
    //   {
    //     title:"China leads new global skyscraper record",
    //     imageUrl: "/static/images/blog1.webp",
    //   },
    //   {
    //     title:"Can a zebra crossing change its stripes?",
    //     imageUrl: "/static/images/img-2.jpg",
    //   },
      
    // );

    // three_articles.create(
    //     {
    //   imageUrl: "/static/images/politics.jfif",
    //   title: "$250-million mansion is most expensive",
    //   date: "March 29, 2016",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quisvenenatis orci tincidunt id. Fusce commodo blandit eleifend. Nullam viverra tincidunt dolor, atpulvinar dui. Nullam at risus ut ipsum viverra posuere.",
    //     },

    //     {
    //         imageUrl: "/static/images/flower.jpg",
    //   title: "$250-million mansion is most expensive",
    //   date: "March 29, 2016",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quisvenenatis orci tincidunt id. Fusce commodo blandit eleifend. Nullam viverra tincidunt dolor, atpulvinar dui. Nullam at risus ut ipsum viverra posuere.",
        
    //     },

    //     {
    //         imageUrl: "/static/images/weather.jfif",
    //         title: "$250-million mansion is most expensive",
    //         date: "March 29, 2016",
    //         content:
    //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quisvenenatis orci tincidunt id. Fusce commodo blandit eleifend. Nullam viverra tincidunt dolor, atpulvinar dui. Nullam at risus ut ipsum viverra posuere.",
      
    //     }
    
    // );

    // Detail.create({
    //     brandName: "ChhattisgarhTopNews.com",
    //     links:[
    //         {
    //             label:"TODAY",
    //             url:"/"
    //         },
    //         {
    //             label:"PAGES",
    //             url:"/pages"
    //         },
    //         {
    //             label:"POLITICS",
    //             url:"/politics"
    //         },
    //         {
    //             label:"LIFESTYLE",
    //             url:"/lifestyle"
    //         },
    //         {
    //             label:"TRAVEL",
    //             url:"/travel"
    //         },
    //         {
    //             label:"HEALTH",
    //             url:"/health"
    //         },
    //         {
    //             label:"ENTERTAINMENT",
    //             url:"/entertainment"
    //         },
    //         {
    //             label:"SPORT",
    //             url:"/sport"
    //         },
    //         {
    //             label:"CONTACT US",
    //             url:"#footer"
    //         },
    //     ]
    // })

    // HomeArticle1.create([
    //     {
    //         genre: "POLITICS",
    //         title: "What's behind the world obsession with gems?",
    //         date: "March 29, 2016",
    //         imageUrl: "/static/images/flag.webp",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quis venenatis orci tincidunt id. Fusce commodo blandit eleifend. Nullam viverra tincidunt dolor, at pulvinar dui. Nullam at risus ut ipsum viverra posuere. Aliquam quis convallis enim. Nunc pulvinar molestie",
    //     }
    // ]);
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT | 3000, () => {
  console.log("server started");
});
