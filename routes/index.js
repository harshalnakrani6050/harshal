const express = require('express');
const routes = express();



const controller = require('../controllers/mainController');

routes.get('/', controller.defaultController);
routes.get('/signin', controller.signInController);
routes.get('/signup', controller.signUpController);
routes.get('/forms',controller.forms);

routes.post('/registerAdmin',controller.registerAdmin);
routes.post('/loginadmin',controller.loginAdmin);

routes.get('/logoutAdmin',controller.logoutAdmin);
routes.post('/addUser',controller.addUser);
route.get('/profile',admincontroller.profilroute);
route.post('/fogetpassword',admincontroller.forgetpass)
route.post('/logout',authMiddleware,admincontroller.logoutController);
route.post('/otpp',admincontroller.otp);
route.get('/chengpass',admincontroller.chengpass);
route.post('/chengpasword',admincontroller.chengpasword);
route.post('/blogdetail', malter.single('blog'), admincontroller.blogdetailadd);



module.exports=routes;