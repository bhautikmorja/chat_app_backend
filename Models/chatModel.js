const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chatModel = new schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, default: false },
  users: [
    {
      type: schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
},
{
    timestamps: true,
}
);
const Chat = mongoose.model("Chat",chatModel);
module.exports = Chat;