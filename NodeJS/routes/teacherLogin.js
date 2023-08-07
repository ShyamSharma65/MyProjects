var express = require('express');
const router = express.Router();
// const teacherController = require('../controllers/teacherController');

// router.get('/login',teacherController.teacher_login_get);
// router.post('/login',teacherController.teacher_login_post);
// router.get('/viewall',teacherController.teacher_viewall_get);
// router.get('/edit/:id',teacherController.teacher_edit_get);
// router.post('/edit/:id',teacherController.teacher_edit_post);
// router.get('/delete/:id',teacherController.teacher_delete_get);
// router.get('/option',teacherController.teacher_option_get);
// router.post('/add',teacherController.teacher_add_post);
// router.get('/add',teacherController.teacher_add_get);

const Student = require('../models/student');

const teacher_login_get = (req, res) => {
    res.render("teacher/teacherLogin");
};
router.get('/login', teacher_login_get);

const teacher_login_post = (req, res) => {

    //******** Teacher Login Password **********//
    if(req.body.password == "pswd"){
        res.redirect("/teacher/option");
    }
    else{
        res.render("teacher/teacherLogin",{
            error : "Please Enter Correct Password"
        })
    }
};
router.post('/login',teacher_login_post);

const teacher_viewall_get = async (req, res) => {
    const allStudents = await Student.find() 
    res.render("teacher/viewall", {student : allStudents})
};
router.get('/viewall',teacher_viewall_get);

const teacher_edit_get =async (req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/edit", {user : user})
};
router.get('/edit/:id',teacher_edit_get);

const teacher_edit_post =async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
};
router.post('/edit/:id',teacher_edit_post);

const teacher_delete_get =async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};
router.get('/delete/:id',teacher_delete_get);

const teacher_option_get = (req,res) => {
    res.render("teacher/option")
};
router.get('/option',teacher_option_get);

const teacher_add_get = (req, res) => {
    res.render("teacher/addstudent");
};
router.get('/add',teacher_add_get);

const teacher_add_post = async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,  
        roll : req.body.roll,             
        dob : req.body.dob,
        score : req.body.score        
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
      } catch {
        res.send("error")
    }
};
router.post('/add',teacher_add_post);

module.exports = router;