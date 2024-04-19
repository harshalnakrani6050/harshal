const { Router } = require("express");
const User = require("../models/blog");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
});


route.get('/Add_blogs',(req,res)=>{
    res.render('Add_blogs',{title:"Home page"});
})

route.get('/forgetpass',(req,res)=>{
    res.render('forgetpass');
})
route.get('/otp',(req,res)=>{
    res.render('otp')
})
route.get('/viewdata', async(req,res)=>{
    let students = await studentmodel.find({});
    console.log(students);
    res.render('viewdata',{students});
})

route.post('/studentform',admincontroller.studentform)
route.get('/deletestd/:id',async (req,res)=>{
    let{id}=req.params;
    await studentmodel.deleteOne({_id:id});
    console.log(id);
    res.redirect('/viewdata');
})

route.get('/editstd/:id',async(req,res)=>{
    let { id }=req.params;
    let singlerecord= await studentmodel.findById(id);
    console.log("singlerecord",singlerecord);    
    res.render('edit',{singlerecord});
})


module.exports = router;
