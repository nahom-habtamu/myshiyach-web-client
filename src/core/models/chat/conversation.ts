import Message from "./message";

type Conversation = {
  id: string;
  memberOne: string;
  memberTwo: string;
  messages: Message[];
};

export default Conversation;
