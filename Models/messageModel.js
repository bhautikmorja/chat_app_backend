const mongoose = require("mongoose");
const schema = mongoose.Schema;

const messageModel = new schema({
  sender: { type: schema.Types.ObjectId, ref: "User" },
  content:{type:String, trim:true},
  chat:{ type: schema.Types.ObjectId, ref: "Chat" },
},
{
    timestamps:true,
});
const  Message = mongoose.model("Message",messageModel);
module.exports = Message;