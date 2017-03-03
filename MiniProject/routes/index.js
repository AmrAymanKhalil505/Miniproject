var express = require('express');
var router = express.Router();
var miniproject_ctrl= require('../ctrl/miniproject_ctrl');

var project_schema= require('../users_model/project');
var student_schema= require('../users_model/student');
/* GET home page. */
router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });

  res.render('first_page');
});
router.get('/login', function(req, res, next) {
//res.render('index', { title: 'Express' });

  res.render('login');
});
router.get('/reg_student', function(req, res, next) {
//res.render('index', { title: 'Express' });

  res.render('reg_student');
});
router.get('/student_profile', function(req, res, next) {
//var username=  req.params.username
if(!req.session.user)
{
  console.log(401);
  return res.status(401).send('login if you are not logging ');
}
  //req.params.username;
  var projectSchema = require('mongoose').model('project');
  projectSchema.find({'belongto':req.params.username},{'_id':0,'name':1,'links':1,'CreateDate':1,'summary':1,'detailed':1},function(err,founddocs)
  {
    if (err)
    {
      res.status(500).send();

    }
    else
    {
      res.status(200).send(founddocs);
    //  res.render('student_profile',{links : founddocs});
    }
  });

});
router.get('/view_projects', function(req, res, next) {
//var username=  req.params.username

  //req.params.username;
  var projectSchema = require('mongoose').model('project');
  projectSchema.find({},{'_id':0,'name':1,'links':1,'CreateDate':1,'summary':1,'detailed':1},function(err,founddocs)
  {
    if (err)
    {
      res.status(500).send();

    }
    else
    {
      res.status(200).send(founddocs);
    //  res.render('student_profile',{links : founddocs});
    }
  });

});
router.get('/secretplace', function(req, res) {
  if(!req.session.user)
  {
    console.log(401);
    res.status(401).send();
  }
  else
  {
    console.log(200);
    res.status(200).send("welcome to my secretplace");

  }
});

router.get('/add_project', function(req, res) {
  if(!req.session.user)
  {
    console.log(401);
    res.status(401).send('login plz');
  }
  else
  {
    console.log(200);
    res.render('add_project');
  }
});
router.post('/login', function(req, res)
{
  miniproject_ctrl.login(req,res);
});
router.post('/reg_student',function(req, res)
{
  miniproject_ctrl.reg_student(req,res);
});
router.post('/reg_project',function(req, res)
{if(!req.session.user)
{
  console.log(401);
  res.status(401).send();
}else{
  miniproject_ctrl.reg_project(req,res);
}
});
router.delete('/project',function(req, res)
{if(!req.session.user)
{
  console.log(401);
  res.status(401).send();
}else{
  miniproject_ctrl.delete_project(req,res);
}
});
/*router.put('/project',function(req,res))
{
    miniproject_ctrl.update_Object(req,res);
}*/
module.exports = router;
