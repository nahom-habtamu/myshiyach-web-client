import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AdvertisementSideBarItemStyled,
  AdvertisementSideBarWrapperStyled,
} from "../../styled_components/master/AdvertisementSideBarWrapperStyled";
import { AdvertisementAndChildrenWrapperStyled, BodyContentWrapperStyled } from "../../styled_components/master/BodyContentWrapperStyled";
import MasterPageContentWrapperStyled from "../../styled_components/master/MasterPageContentWrapperStyled";
import NavBarLogoFilterAndSearchBarContent from "./NavBarLogoFilterAndSearchBarContent";
import NavBarSideContent from "./NavBarSideContent";
import NavBarTopContent from "./NavBarTopContent";
import FilterProductsModel from "./FilterProductsModal";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { getConversationsWithStrangerInfoByUser } from "../../../core/action_creators/chat/get_conversations_with_stranger_info_by_user_action_creators";
import { ConversationWithUserInformation } from "../../../core/repositories/chat_repository";

type MasterComponentProps = {
  activePage: string;
  children: any;
};

const MasterComponent = (props: MasterComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [collapsed, setCollapsed] = useState(true);
  const [conversationsWithStrangerInfo, setConversationsWithStrangerInfo] = useState<ConversationWithUserInformation[]>([]);

  const loginState = useAppSelector((state) => state.login);
  const conversationSnapshotState = useAppSelector(
    (state) => state.getConversationsByUser
  );

  useEffect(() => {
    if (loginState.result.currentUser?._id != null) {
      dispatch(
        getConversationsWithStrangerInfoByUser(onSnapshot, loginState.result.currentUser?._id, loginState.result.token)
      );
    }
  }, [loginState.result, dispatch]);

  const onSnapshot = (conversationsWithStrangerInfoOnRealTime: ConversationWithUserInformation[]) => {
    setConversationsWithStrangerInfo(conversationsWithStrangerInfoOnRealTime);
  };

  useEffect(() => {
    if (conversationSnapshotState.unsubscribe != null) {
      let unsubscribe = conversationSnapshotState.unsubscribe;
      return unsubscribe();
    }
  }, []);

  const getUnseenMessagesCount = () => {
    let totalMesagesCount = 0;
    for (let i = 0; i < conversationsWithStrangerInfo.length; i++) {
      const element = conversationsWithStrangerInfo[i];
      let count = element.conversation.messages.filter(
        (m) => !m.isSeen && m.recieverId === loginState.result.currentUser?._id
      ).length;
      totalMesagesCount += count;
    }
    return totalMesagesCount;
  };

  let unseenMessages = getUnseenMessagesCount();

  return (
    <MasterPageContentWrapperStyled>
      <>
        <NavBarTopContent />
        <NavBarLogoFilterAndSearchBarContent
          activePage={props.activePage}
          collapsed={collapsed}
          onNavBarTogglePressed={(value: boolean) => setCollapsed(value)}
          onFilterButtonPressed={() => setIsOpen(!isOpen)}
        />
        <BodyContentWrapperStyled>
          <NavBarSideContent
            collapsed={collapsed}
            unreadMessagesCount={unseenMessages}
            activePage={props.activePage}
            onItemTapped={(value: string) => history.push(value)}
          />
          <AdvertisementAndChildrenWrapperStyled>
            {props.children}
            <AdvertisementSideBarWrapperStyled marginTop={73}>
              <AdvertisementSideBarItemStyled />
              <AdvertisementSideBarItemStyled />
            </AdvertisementSideBarWrapperStyled>
          </AdvertisementAndChildrenWrapperStyled>
        </BodyContentWrapperStyled>
        {isOpen && <FilterProductsModel onClose={() => setIsOpen(false)} />}
      </>

    </MasterPageContentWrapperStyled>
  );
};

export default MasterComponent;
