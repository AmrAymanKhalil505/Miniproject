var mongoose = require('mongoose');
var schema = mongoose.Schema;
var project_schema= new schema({
  name:{type:String,unique:true ,required: true},
  belongeto :String,
  CreateDate:{type:Date,default:Date.now},
  summary: String,
  detailed:String,
  photo:String,
  links:String 
});
exports  = mongoose.model('project',project_schema);
