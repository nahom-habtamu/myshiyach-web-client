import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import firebaseConfig from "../config/firebase_config";

export const getConversationsByUser = async (id: string) => {
  var snapshots = await getDocs(
    collection(firebaseConfig.firestore, "conversations")
  );
  var conversations = snapshots.docs
    .filter(
      (e) => checkIfCurrentUserIsMember(e, id) && checkIfMessagesAreNotEmpty(e)
    )
    .map((e) => {
      return {
        id: e.id,
        memberOne: e.data()["memberOne"],
        memberTwo: e.data()["memberTwo"],
        messages: e.data()["messages"].map((message: any) => {
          return {
            content: message["content"],
            senderId: message["senderId"],
            recieverId: message["recieverId"],
            createdDateTime: message["createdDateTime"],
            isSeen: message["isSeen"],
            type: message["type"],
          };
        }),
      };
    });

  return conversations;
};

function checkIfMessagesAreNotEmpty(
  e: QueryDocumentSnapshot<DocumentData>
): boolean {
  return e.data()["messages"].length > 0;
}

function checkIfCurrentUserIsMember(
  conversation: QueryDocumentSnapshot<DocumentData>,
  id: string
): boolean {
  return (
    conversation.data()["memberOne"] === id ||
    conversation.data()["memberTwo"] === id
  );
}
