import { BsFileEarmarkPostFill, BsTelephone } from "react-icons/bs";
import { MdOutlineCropRotate, MdOutlinePrivacyTip } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useAppSelector } from "../../store/storeHooks";
import MasterComponent from "../components/common/master_component";
import UserInformation from "../components/common/UserInformation";
import { ICON_SIZE } from "../constants/sizes";
import {
  SettingTabHeaderStyled,
  SettingTabItemIconWrapperStyled,
  SettingTabItemKeyStyled,
  SettingTabItemKeyValueWrapperStyled,
  SettingTabItemValueStyled,
  SettingTabItemWrapperStyled,
  SettingTabStyled,
  SettingTabsWrapperStyled,
  SettingWrapperStyled,
} from "../styled_components/setting/SettingPageComponentsStyled";

const SettingPage = () => {
  const loginState = useAppSelector((state) => state.login);

  return (
    <MasterComponent activePage={SettingPageRoute}>
      <SettingWrapperStyled>
        <UserInformation
          fullName={loginState.result.currentUser?.fullName}
          phoneNumber={loginState.result.currentUser?.phoneNumber}
        />
        <SettingTabsWrapperStyled>
          <SettingTabStyled>
            <SettingTabHeaderStyled>General</SettingTabHeaderStyled>
            <>
              <SettingTabItemWrapperStyled>
                <SettingTabItemIconWrapperStyled>
                  <BsFileEarmarkPostFill size={ICON_SIZE} />
                </SettingTabItemIconWrapperStyled>
                <SettingTabItemKeyValueWrapperStyled>
                  <SettingTabItemKeyStyled>My Posts</SettingTabItemKeyStyled>
                  <SettingTabItemValueStyled>
                    Manage Your Posts
                  </SettingTabItemValueStyled>
                </SettingTabItemKeyValueWrapperStyled>
              </SettingTabItemWrapperStyled>
            </>
          </SettingTabStyled>
          <SettingTabStyled>
            <SettingTabHeaderStyled>More</SettingTabHeaderStyled>
            <>
              <SettingTabItemWrapperStyled>
                <SettingTabItemIconWrapperStyled>
                  <BsTelephone size={ICON_SIZE} />
                </SettingTabItemIconWrapperStyled>
                <SettingTabItemKeyValueWrapperStyled>
                  <SettingTabItemKeyStyled>Contact Us</SettingTabItemKeyStyled>
                  <SettingTabItemValueStyled>
                    For More Information
                  </SettingTabItemValueStyled>
                </SettingTabItemKeyValueWrapperStyled>
              </SettingTabItemWrapperStyled>

              <SettingTabItemWrapperStyled>
                <SettingTabItemIconWrapperStyled>
                  <MdOutlinePrivacyTip size={ICON_SIZE} />
                </SettingTabItemIconWrapperStyled>
                <SettingTabItemKeyValueWrapperStyled>
                  <SettingTabItemKeyStyled>
                    Privacy Policy
                  </SettingTabItemKeyStyled>
                  <SettingTabItemValueStyled>
                    Please Check out Applications Terms and Services
                  </SettingTabItemValueStyled>
                </SettingTabItemKeyValueWrapperStyled>
              </SettingTabItemWrapperStyled>

              <SettingTabItemWrapperStyled>
                <SettingTabItemIconWrapperStyled>
                  <MdOutlineCropRotate size={ICON_SIZE} />
                </SettingTabItemIconWrapperStyled>
                <SettingTabItemKeyValueWrapperStyled>
                  <SettingTabItemKeyStyled>
                    Change Language
                  </SettingTabItemKeyStyled>
                  <SettingTabItemValueStyled>
                    Swap between Amharic and English Languages
                  </SettingTabItemValueStyled>
                </SettingTabItemKeyValueWrapperStyled>
              </SettingTabItemWrapperStyled>

              <SettingTabItemWrapperStyled>
                <SettingTabItemIconWrapperStyled>
                  <IoMdLogOut size={ICON_SIZE} />
                </SettingTabItemIconWrapperStyled>
                <SettingTabItemKeyValueWrapperStyled>
                  <SettingTabItemKeyStyled>Log Out</SettingTabItemKeyStyled>
                  <SettingTabItemValueStyled>
                    Exit Application
                  </SettingTabItemValueStyled>
                </SettingTabItemKeyValueWrapperStyled>
              </SettingTabItemWrapperStyled>
            </>
          </SettingTabStyled>
        </SettingTabsWrapperStyled>
      </SettingWrapperStyled>
    </MasterComponent>
  );
};

export default SettingPage;
export const SettingPageRoute = "/setting";
