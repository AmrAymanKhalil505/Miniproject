var mongoose = require('mongoose');
var schema = mongoose.Schema;
var student_schema= new schema({
  name:{type:String, required: true   },
  id:{type:String ,unique :true , required: true   },
  email:{type:String,unique :true , required: true   },
  username:{type:String,unique :true , required: true   },
  password:{type:String , required: true   }
});
exports  = mongoose.model('student',student_schema);
