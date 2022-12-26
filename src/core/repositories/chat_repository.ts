import {
  collection,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import firebaseConfig from "../config/firebase_config";
import Conversation from "../models/chat/conversation";
import Message from "../models/chat/message";
import User from "../models/user/user";
import { getUserById } from "./user_repository";

export type ConversationWithUserInformation = {
  conversation: Conversation,
  strangerUser: User
};

export const getAllConversationsSnapshotData = async (
  onSnapshotCallBack: (conversationsWithUserInformation: ConversationWithUserInformation[]) => void,
  id: string,
  token: string
) => {
  let collectionRef = collection(firebaseConfig.firestore, "conversations");
  return onSnapshot(collectionRef, async (snapshot) => {
    let conversations = snapshot.docs
      .filter(
        (e) =>
          checkIfCurrentUserIsMember(e, id) && checkIfMessagesAreNotEmpty(e)
      )
      .map((e) => parseQuerySnapshotToConversation(e))
      .sort(function (a, b) {
        return ((new Date(b.messages[b.messages.length - 1].createdDateTime) as any) - (new Date(a.messages[a.messages.length - 1].createdDateTime) as any));
      });;

    let conversationsWithUserInformation: ConversationWithUserInformation[] = [];

    for (let i = 0; i < conversations.length; i++) {
      const conversation = conversations[i];
      const strangerId = getStrangerId(conversation, id);
      const strangerUser = await getUserById({
        id: strangerId,
        token: token
      });
      conversationsWithUserInformation.push({
        strangerUser,
        conversation
      })
    }

    onSnapshotCallBack(conversationsWithUserInformation);
  });
};

const getStrangerId = (conversation: Conversation, id: string) => {
  return conversation.memberOne !== id
    ? conversation.memberOne
    : conversation.memberTwo;
};


function checkIfMessagesAreNotEmpty(e: any): boolean {
  return e.data()["messages"].length > 0;
}

function checkIfCurrentUserIsMember(conversation: any, id: string): boolean {
  return (
    conversation.data()["memberOne"] === id ||
    conversation.data()["memberTwo"] === id
  );
}

export const getConversationSnapshotById = async (
  onSnapshotCallBack: (conversation: Conversation) => void,
  id: string
) => {
  let collectionRef = doc(firebaseConfig.firestore, "conversations", id);
  return onSnapshot(collectionRef, (snapshot) => {
    let conversation = parseQuerySnapshotToConversation(snapshot);
    onSnapshotCallBack(conversation);
  });
};

const parseQuerySnapshotToConversation = (value: any) => {
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

export const markMessagesInConversationAsRead = async (
  conversationId: string,
  recieverId: string
) => {
  const conversation = await getConversationById(conversationId);
  const convRef = doc(
    firebaseConfig.firestore,
    "conversations",
    conversationId
  );

  let updatedMessages = conversation.messages.map((m) => {
    if (m.recieverId != recieverId) {
      return m;
    }
    return {
      ...m,
      isSeen: true,
    };
  });

  await updateDoc(convRef, {
    messages: [...updatedMessages],
  });
};

export const getConversationById = async (
  id: string
): Promise<Conversation> => {
  let snapshot = await getDoc(
    doc(firebaseConfig.firestore, "conversations", id)
  );
  return parseQuerySnapshotToConversation(snapshot);
};

export const createConversation = async (
  memberOne: string,
  memberTwo: string
): Promise<string> => {
  let conversation = {
    memberOne: memberOne,
    memberTwo: memberTwo,
    messages: [],
  };
  let result = await addDoc(
    collection(firebaseConfig.firestore, "conversations"),
    conversation
  );
  return result.id;
};

export const getConversationByMembers = async (
  memberOne: string,
  memberTwo: string
): Promise<string | null> => {
  const allConvos = await getDocs(
    collection(firebaseConfig.firestore, "conversations")
  );
  let filtered = allConvos.docs.filter((con) =>
    compareConversationWithMembers(
      parseQuerySnapshotToConversation(con),
      memberOne,
      memberTwo
    )
  );
  return filtered.length > 0 ? filtered[0].id : null;
};

const compareConversationWithMembers = (
  conversation: Conversation,
  memberOneId: string,
  memberTwoId: string
) => {
  return (
    (conversation.memberOne == memberOneId &&
      conversation.memberTwo == memberTwoId) ||
    (conversation.memberOne == memberTwoId &&
      conversation.memberTwo == memberOneId)
  );
};
