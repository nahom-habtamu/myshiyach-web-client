import MasterComponent from "../components/common/master_component";

const ChatListPage = () => {
  return (
    <MasterComponent activePage={ChatListPageRoute}>
      I AM CHAT LIST PAGE
    </MasterComponent>
  );
};

export default ChatListPage;
export const ChatListPageRoute = "/chatList";
