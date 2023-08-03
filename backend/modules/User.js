const mongoose =require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    name:{
        type :String,
        required :true
    },
    email:{
        type :String,
        required :true,
        unique :true
    },
    password:{
        type :String,
        required :true
    },
    problems:[
        {
            type:String
        }
    ]
});

module.exports = mongoose.model('user',UserSchema);