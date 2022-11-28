import _ from "lodash";
import Message from "../../core/models/chat/message";

export default (messages: Message[]) => {
  const grouped = _.groupBy(messages, (message) =>
    extractDateFromTime(message.createdDateTime)
  );
  return Object.values(grouped);
};

const extractDateFromTime = (dateTime: string) => {
  let parsed = new Date(dateTime);
  return parsed.getDate();
};
