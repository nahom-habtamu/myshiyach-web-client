import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AdvertisementSideBarItemStyled,
  AdvertisementSideBarWrapperStyled,
} from "../../styled_components/master/AdvertisementSideBarWrapperStyled";
import { BodyContentWrapperStyled } from "../../styled_components/master/BodyContentWrapperStyled";
import MasterPageContentWrapperStyled from "../../styled_components/master/MasterPageContentWrapperStyled";
import NavBarLogoFilterAndSearchBarContent from "./NavBarLogoFilterAndSearchBarContent";
import NavBarSideContent from "./NavBarSideContent";
import NavBarTopContent from "./NavBarTopContent";
import FilterProductsModel from "./FilterProductsModal";
import Conversation from "../../../core/models/chat/conversation";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { getConversationsByUser } from "../../../core/action_creators/chat/get_conversations_by_user_action_creators";

type MasterComponentProps = {
  activePage: string;
  children: any;
};

const MasterComponent = (props: MasterComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [conversations, setConversations] = useState<Conversation[]>([]);

  const loginState = useAppSelector((state) => state.login);
  const conversationSnapshotState = useAppSelector(
    (state) => state.getConversationsByUser
  );

  useEffect(() => {
    if (loginState.result.currentUser?._id != null) {
      dispatch(
        getConversationsByUser(onSnapshot, loginState.result.currentUser?._id)
      );
    }
  }, [loginState.result, dispatch]);

  const onSnapshot = (conversationsOnRealTime: Conversation[]) => {
    setConversations(conversationsOnRealTime);
  };

  useEffect(() => {
    if (conversationSnapshotState.unsubscribe != null) {
      let unsubscribe = conversationSnapshotState.unsubscribe;
      return unsubscribe();
    }
  }, []);

  const getUnseenMessagesCount = () => {
    let totalMesagesCount = 0;
    for (let i = 0; i < conversations.length; i++) {
      const element = conversations[i];
      let count = element.messages.filter(
        (m) => !m.isSeen && m.recieverId === loginState.result.currentUser?._id
      ).length;
      totalMesagesCount += count;
    }
    return totalMesagesCount;
  };

  let unseenMessages = getUnseenMessagesCount();

  return (
    <MasterPageContentWrapperStyled>
      <NavBarTopContent />
      <NavBarLogoFilterAndSearchBarContent
        onFilterButtonPressed={() => setIsOpen(!isOpen)}
      />
      <BodyContentWrapperStyled>
        <NavBarSideContent
          unreadMessagesCount={unseenMessages}
          activePage={props.activePage}
          onItemTapped={(value: string) => history.push(value)}
        />
        {props.children}
        <AdvertisementSideBarWrapperStyled marginTop={73}>
          <AdvertisementSideBarItemStyled />
          <AdvertisementSideBarItemStyled />
        </AdvertisementSideBarWrapperStyled>
      </BodyContentWrapperStyled>
      {isOpen && <FilterProductsModel onClose={() => setIsOpen(false)} />}
    </MasterPageContentWrapperStyled>
  );
};

export default MasterComponent;
