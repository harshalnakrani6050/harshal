const adminModel = require('../models/adminSchema');
const usermodel = require('../models/userschema');
const nodemailer =require('nodemailer');
const otpGenerator = require('otp-generator');
const studentmodel =require('../models/student-model');
const session = require('express-session');
const passport = require('passport');
function defaultController(req, res) {
  
}



const defultcontroller = (req,res)=>{
    const {session} = req.body;
    res.render('index', { successMessage: req.flash('success') });
    
}
function fogetpassword(req, res) {
   
}

function otp(req, res) {
   
}
function chengpass(req, res) {
   
}
function chengpasword(req, res) {
    
}
function blogdetailadd(req, res) {
 
}


const logincontroller = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt with email:', email);

        const admin = await Adminmodel.findOne({ email });

        console.log('User found:', admin);
        if (!admin) {
            console.log('User not found');
            req.flash('error', 'Incorrect email or password');
            res.redirect('/login');
            return;
        }

        const match = await bcrypt.compare(password, admin.password);
        if (!match) {
            console.log('Incorrect password');
            req.flash('error', 'Incorrect email or password');
            res.redirect('/login');
            return;
        }

        console.log('Login successful');
        req.session.user = admin;
        req.user = admin; 
        console.log('Stored user:', admin); 
        
        req.flash('success', 'Login successful!');
        res.redirect("/");
             
    } catch (error) {
        console.log("Error", error);
        res.redirect('/login');
    }
};

const profilroute =async(req,res)=>{
    const user = req.session.user;
    
    if (user) {
        res.render('profile', { user: user });
    } else {
        console.log('User data not found');
        req.flash('error', 'User data not found');
        res.redirect('/login');
    }
}


const studentform =async(req,res)=>{
    let {editid} =req.body;
    if(!editid){
        let student= new studentmodel({
            fname:req.body.fname,
            lname:req.body.lname,
            number:req.body.number,
            email:req.body.email, 
        })
        student.save();
    }else{
        let updatebook = await studentmodel.updateOne({_id:editid},{
            fname:req.body.fname,
            lname:req.body.lname,
            number:req.body.number,
            email:req.body.email, 
        })
        console.log("updated success",updatebook);
    }
    res.redirect('/viewdata');

const defaultController = (req,res) =>{
    try{
       
        let {SessionId} = req.cookies;

        if (SessionId) {
            res.render('index');
        } else {
            res.redirect('/signin');
        } 

    }catch(err){
        console.log('error');
    }
}
}

const signInController = (req,res) =>{
    try{

        res.render('signin');

    }catch(err){
        console.log('signin error',err);
    }
}

const signUpController = (req,res) =>{
    try{

        res.render('signup');

    }catch(err){
        console.log('signup error',err);
    }
}

const registerAdmin =async (req,res) =>{
    
    const {username,email,password} = req.body;

   try{
        const admin = new adminModel({
            username,
            email,
            password
        });

        await admin.save();
        console.log('admin create....');
        res.redirect('/signin');
   }catch(err){
        console.log('err',err);
        res.redirect('/signup');
   }
}

const loginAdmin =async (req,res) =>{


    let {email,password} = req.body;

    const admin =await adminModel.find({email});
    console.log('admin ',admin);    

    if(admin.length > 0){
        if (admin[0].password == password) {
            console.log('auth complete');
            res.cookie('SessionId',admin[0].id);
            res.redirect('/');
        } else {
            console.log('auth not complete');
            res.redirect('/signin');
        }
    }else{
        res.redirect('/signup');
    }
}

const logoutAdmin = (req,res) =>{
    
    res.clearCookie('SessionId');
    res.redirect('/signin');
}

const forms = (req,res) =>{
    try{

        res.render('form');

    }catch(err){
        console.log('signin error',err);
    }
}


const addUser =async (req,res) =>{
    
    const {username,dec,title,id} = req.body;

   try{
        const user = new adminModel({
           username,
           dec,
           title,
           id

        });

        await user.save();
        console.log('aadd user create....');
        res.redirect('/addUser');
   }catch(err){
        console.log('err',err);
       
   }
}

module.exports = {defaultController,signInController,registerAdmin,loginAdmin,logoutAdmin,addUser,forms,profilroute,fogetpassword,otp,studentform,chengpass,chengpasword,blogdetailadd};