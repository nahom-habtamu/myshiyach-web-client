import _ from "lodash";
import Message from "../../core/models/chat/message";

export default (messages: Message[]) => {
  const grouped = _.groupBy(messages, (message) =>
    extractDateFromTime(message.createdDateTime)
  );
  return Object.values(grouped).sort(function (a, b) { return a[a.length - 1].createdDateTime.localeCompare(b[b.length - 1].createdDateTime) });
};

const extractDateFromTime = (dateTime: string) => {
  let parsed = new Date(dateTime);
  return parsed.getDate();
};
