const expressEdge = require("express-edge");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSessions = require('express-session');
//const createPostController = require('./controllers/createPost');
const homePageController = require('./controllers/Event');
const storePostController = require('./controllers/storePost');
const OtpSendingMiddleware = require('./middleware/nodemail');
const OtpVerificationMiddleware = require('./middleware/otpHandler');
const storeApplicationController = require('./controllers/storeNomination');
const showApplicationPageController = require('./controllers/showApplicationPage');
const storeStudentDataController = require('./controllers/storeStudentData');
const showUpdatePageController = require('./controllers/showUsdPage');
const downloadApplicationController = require('./controllers/downloadApplication');
const searchPostController = require('./controllers/searchPost');
const deactivateEventController = require('./controllers/deactivatePostController');
const redirectIfAuthenticated = require('./middleware/redirectIfAuth');
//const getPostController = require('./controllers/getPost');
const busboy = require('connect-busboy');
const edge = require('edge.js');
//const storePost = require('./middleware/storePost');
//const createUserController = require('./controllers/createUser');
//const storeUserController = require('./controllers/storeUser');
//const loginController = require('./controllers/login');
//const loginUserController = require('./controllers/loginUser');
//const expressSessions = require('express-session');
const sortPostController = require('./controllers/sortPost');
const connectMongo = require('connect-mongo');
const auth  = require('./middleware/auth');
var path = require('path')
const showOtpPageController = require('./controllers/showOtpPage');
const connectFlash = require('connect-flash');
const applyController = require('./controllers/apply');
const search1PostController = require('./controllers/searchPost1');
const loginUserController = require('./controllers/loginUser');
const showLoginPageController = require('./controllers/showloginpage');
const showPostController = require('./controllers/showPost');
const logoutController = require('./controllers/logout');
//const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');
//const logoutController = require('./controllers/logout');

const mongoStore = connectMongo(expressSessions);


const app = new express();

mongoose.connect("mongodb://localhost/ndim");

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);
app.use(busboy());
app.use(expressSessions({

  secret : 'secret',

  store : new mongoStore({

    mongooseConnection : mongoose.connection
  })

}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(connectFlash())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('*',(req, res, next)=>{

  edge.global('auth', req.session.userId);

 next()
});




app.get("/",redirectIfAuthenticated,homePageController);

app.get("/go", showPostController);

//app.get("/posts/new", auth, createPostController );

app.post("/event/data", redirectIfAuthenticated,storePostController);
app.post("/event/sort", sortPostController);
app.post("/apply", applyController);
app.post("/apply/store", storeApplicationController);
app.get("/update/data", redirectIfAuthenticated,showUpdatePageController);
app.get("/login", showLoginPageController);
app.get("/see/application", redirectIfAuthenticated ,showApplicationPageController);
app.post("/update/data/store", redirectIfAuthenticated,storeStudentDataController);
app.post("/event/search", searchPostController);
app.post("/event/search1", search1PostController);
app.post("/event/deactivate", redirectIfAuthenticated,deactivateEventController);
app.post("/auth/login", loginUserController);
app.get("/logout",logoutController);
app.post("/event/download/applications", downloadApplicationController);
app.post("/otp/send", OtpSendingMiddleware);
app.post("/otp/verify", OtpVerificationMiddleware);
app.post("/otp", showOtpPageController);
//app.get("/post/:id",getPostController );

//app.get("/auth/register",redirectIfAuthenticated,createUserController);

//app.post("/users/register",redirectIfAuthenticated, storeUserController);

//                                                                                                                                                                                                                                                      app.get('/auth/login',redirectIfAuthenticated, loginController);

//app.get('/auth/logout',redirectIfAuthenticated,logoutController);

//app.post('/users/login', redirectIfAuthenticated,loginUserController);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

