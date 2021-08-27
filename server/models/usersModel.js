var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    idNo: { type: Number, required: true},
    fullname: { type: String, required: true},
    username: { type: String, required: true},
    email: { type: String, required: true},
    phoneNumber: { type: String, required: true},
    password: { type: String, required: true},
    confirmPassword: { type: String, required: true},
    created_at: {
            type: Date,
            default: Date.now,
            required: true
        } 
}, { versionKey: false});


userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedPassword){
    return bcrypt.compareSync(hashedPassword,this.password);
}



module.exports = mongoose.model('User', userSchema);
