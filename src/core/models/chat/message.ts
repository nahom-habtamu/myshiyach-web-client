type Message = {
  content: string;
  senderId: string;
  recieverId: string;
  createdDateTime: string;
  isSeen: boolean;
  type: string;
};

export default Message;
