import { useAppSelector } from "../../store/storeHooks";

const DummyPage = () => {
  const loginState = useAppSelector((state) => state.login);
  return <div>{loginState.token ?? "NO USER FOUND"}</div>;
};

export default DummyPage;
export const DummyPageRoute = "/dummy";
