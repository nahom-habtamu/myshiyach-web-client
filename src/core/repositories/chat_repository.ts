import {
  collection,
  DocumentData,
  doc,
  getDocs,
  QueryDocumentSnapshot,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import firebaseConfig from "../config/firebase_config";
import Conversation from "../models/chat/conversation";
import Message from "../models/chat/message";

export const getConversationSnapshotData = async (
  onSnapshotCallBack: (conversations: Conversation[]) => void,
  id: string
) => {
  let collectionRef = collection(firebaseConfig.firestore, "conversations");
  return onSnapshot(collectionRef, (snapshot) => {
    let conversations = snapshot.docs
      .filter(
        (e) =>
          checkIfCurrentUserIsMember(e, id) && checkIfMessagesAreNotEmpty(e)
      )
      .map((e) => parseQuerySnapshotToConversation(e));
    onSnapshotCallBack(conversations);
  });
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

export const getConversationById = async (id: string) => {
  let snapshots = await getDocs(
    collection(firebaseConfig.firestore, "conversations")
  );
  let conversations = snapshots.docs
    .filter((e) => e.id === id)
    .map((e) => parseQuerySnapshotToConversation(e));

  return conversations[0];
};

const parseQuerySnapshotToConversation = (
  value: QueryDocumentSnapshot<DocumentData>
) => {
  return {
    id: value.id,
    memberOne: value.data()["memberOne"],
    memberTwo: value.data()["memberTwo"],
    messages: value.data()["messages"].map((message: any) => {
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
};

export const addMessageToConversation = async (
  conversationId: string,
  message: Message
) => {
  const conversation = await getConversationById(conversationId);
  const convRef = doc(
    firebaseConfig.firestore,
    "conversations",
    conversationId
  );
  await updateDoc(convRef, {
    messages: [...conversation.messages, message],
  });
};
