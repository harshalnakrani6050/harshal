
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3006;
const routes = require('./routes/index');
const db = require('./config/db');
const path = require("path");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");
const OTP = require('./models/otp'); 
const Blog = require("./models/blog");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const {
    checkForAuthenticationCookie,
  } = require("./middlewares/authentication");

  
  




app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.use('/',routes);

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
require("dotenv").config();




console.log("MongoDB URI:", process.env.MONGODB_URI); 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  
  })
  .catch((err) => console.error('MongoDB connection error:', err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});


app.use("/user", userRoute);
app.use("/blog", blogRoute);


