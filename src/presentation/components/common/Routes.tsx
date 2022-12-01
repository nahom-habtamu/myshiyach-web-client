import { Switch, Route, HashRouter } from "react-router-dom";
import AddPostPage, { AddPostPageRoute } from "../../pages/AddPostPage";
import ChatDetailPage, {
  ChatDetailPageRoute,
} from "../../pages/ChatDetailPage";
import ChatListPage, { ChatListPageRoute } from "../../pages/ChatListPage";
import DummyPage, { DummyPageRoute } from "../../pages/DummyPage";
import HomePage, { HomePageRoute } from "../../pages/HomePage";
import LoginPage, { LoginPageRoute } from "../../pages/LoginPage";
import EditProductPage, {
  EditProductPageRoute,
} from "../../pages/EditProductPage";
import OtpVerificationPage, {
  OtpVerificationPageRoute,
} from "../../pages/OtpVerificationPage";
import ProductDetailPage, {
  ProductDetailPageRoute,
} from "../../pages/ProductDetailPage";
import SavedPostsPage, {
  SavedPostsPageRoute,
} from "../../pages/SavedPosts.Page";
import SettingsPage, { SettingPageRoute } from "../../pages/SettingPage";
import SignUpPage, { SignUpPageRoute } from "../../pages/SignUpPage";
import ProductsByUserPage, {
  ProductsByUserPageRoute,
} from "../../pages/ProductsByUserPage";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={HomePageRoute}>
          <HomePage />
        </Route>
        <Route exact path={AddPostPageRoute}>
          <AddPostPage />
        </Route>
        <Route exact path={SettingPageRoute}>
          <SettingsPage />
        </Route>
        <Route exact path={SavedPostsPageRoute}>
          <SavedPostsPage />
        </Route>
        <Route exact path={ChatListPageRoute}>
          <ChatListPage />
        </Route>
        <Route exact path={ProductDetailPageRoute}>
          <ProductDetailPage />
        </Route>
        <Route exact path={LoginPageRoute}>
          <LoginPage />
        </Route>
        <Route exact path={SignUpPageRoute}>
          <SignUpPage />
        </Route>
        <Route exact path={OtpVerificationPageRoute}>
          <OtpVerificationPage />
        </Route>
        <Route exact path={DummyPageRoute}>
          <DummyPage />
        </Route>
        <Route exact path={ProductDetailPageRoute}>
          <ProductDetailPage />
        </Route>
        <Route exact path={EditProductPageRoute}>
          <EditProductPage />
        </Route>
        <Route exact path={ChatDetailPageRoute}>
          <ChatDetailPage />
        </Route>
        <Route exact path={ProductsByUserPageRoute}>
          <ProductsByUserPage />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;
