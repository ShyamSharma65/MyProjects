var express = require("express");
const router = express.Router();
// const studentController = require('../controllers/studentController');

// router.get('/login',studentController.student_login_get);
// router.post('/login',studentController.student_login_post);

//importing student model
const Student = require('../models/student');

const student_login_get = (req, res) => {
       res.render("student/login");
    };
router.get('/login',student_login_get);

const student_login_post = async (req, res) => {

        const Sturoll = req.body.roll;   
        const individualStudent = await Student.findOne({roll : Sturoll});    
        if(!individualStudent){
          res.render("student/login", {
            error : "Login with correct roll number"
          })
        }      
        res.render("student/view", { one : individualStudent});
    };
    router.post('/login',student_login_post);
module.exports = router;