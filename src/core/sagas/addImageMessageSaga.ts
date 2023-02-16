import * as Effects from "redux-saga/effects";

import { addMessageToConversation } from "../repositories/chat_repository";
import { uploadImagesToApiServer } from "../repositories/upload_repository";

import * as actionCreators from "../action_creators/chat/add_image_message_action_creators";
import * as actionTypes from "../action_types/chat/add_image_message_action_types";

const call: any = Effects.call;

function* onAddImageMessage(
  addImageMessageAction: actionTypes.AddImageMessageAction
) {
  try {
    yield Effects.put(actionCreators.addImageMessageLoading());

    const uploadResponse: string[] = yield call(
      uploadImagesToApiServer,
      [addImageMessageAction.payload.image],
      "conversation_images"
    );

    yield call(
      addMessageToConversation,
      addImageMessageAction.payload.conversationId,
      {
        ...addImageMessageAction.payload.message,
        content: uploadResponse[0],
      }
    );

    yield Effects.put(actionCreators.addImageMessageSuccess());
  } catch (error: any) {
    yield Effects.put(
      actionCreators.addImageMessageFailure(error.response.data.error)
    );
  }
}

function* watchOnAddImageMessage() {
  yield Effects.takeEvery(actionTypes.ADD_IMAGE_MESSAGE, onAddImageMessage);
}

export default function* addImageMessageSaga() {
  yield Effects.all([Effects.fork(watchOnAddImageMessage)]);
}
