
var project_schema= require('../users_model/project');
var student_schema= require('../users_model/student');
exports.reg_student= function(req,res)
{ var studentSchema = require('mongoose').model('student')
    var entry=new studentSchema();
      entry.name=req.body.name;
      entry.id=req.body.id;
      entry.email=req.body.email;
      entry.photo=req.body.photo
      entry.username=req.body.username;
      entry.password=req.body.password;



        entry.save(function(err, updatedObject)
        {
              if(err){
                console.log(err);
          return      res.status(500).send();
        //TODO        res.render('/error/500/'+err);
              }
              else{
                res.session.user= entry;
                console.log(200);
            return    res.status(200).send();
      //TODO                res.render('/login');
  //TODO              res.render('/student_profile');
              }
        });
}


exports.reg_project= function(req,res)
{var projectSchema = require('mongoose').model('project')
    var entry=new projectSchema();
      entry.name=req.body.name;
      entry.belongeto=req.session.user.username;
      entry.summary=req.body.summary;
      entry.detailed=req.body.detailed;
        entry.photo=req.body.photo;
      entry.links=req.body.links;



        entry.save(function(err, updatedObject)
        {
              if(err){
                console.log(err);
              return      res.status(500).send();
            //TODO    res.render('/error/500/'+err);
              }
              else{
                console.log(200);

             res.status(200).send("the project has been added");
            //  res.render('/student_profile/'+entry.username);
              }
        });
}

exports.delete_project=function(req,res)
{
    var projectSchema = require('mongoose').model('project')
    projectSchema.remove({'name':req.body.name,'belongeto':req.body.belongeto},function(err)
    {
      if (err)
      {
        console.status(500).send();

      }
      else
      {
        console.status(200).send();
      }
    });
}
exports.login= function(req,res)
{ var student= require('mongoose').model('student')
//  var username = req.body.uesrname;
//  var password = req.body.password;
  student.findOne({'uesrname':req.body.uesrname,'password':req.body.password},function(err,user)
  {
    if(err)
    {
      console.log(err);
      return    res.status(401).send();
  //TODO    res.render('/error/401/login');
    }
    if(!user)
    {
      console.log(401);
      return res.status(401).send();
    }
    else{console.log(200);
       req.session.user = user;


    res.status(200).send('go back to the home page and enjoy surfing the website');

    }
  });

}
