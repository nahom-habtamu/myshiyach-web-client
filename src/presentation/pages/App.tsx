import LoginPromptModal from "../components/common/LoginPromptModal";
import Routes from "../components/common/Routes";

const App = () => {
  return (
    <>
      <Routes isLoggedIn={true} />
      <LoginPromptModal navigateTo="/productDetail" onClose={() => {}} />
    </>
  );
};

export default App;
