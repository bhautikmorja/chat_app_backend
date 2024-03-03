const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique:true },
    password: { type: String, require: true },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true
  }
);

userSchema.methods.matchPassword = async function(enterdPassword){
  return await bcrypt.compare(enterdPassword, this.password)
}

userSchema.pre('save', async function (next){
  if(!this.isModified){
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

const User = mongoose.model("User", userSchema);
module.exports = User;
