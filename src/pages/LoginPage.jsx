import AuthInput, { AuthContainer } from "../components/common/Auth"
import {
  AuthButton,
  LinkTextContainer,
  AuthLinkText,
  AuthTitle
} from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
// import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>登入 Alphitter</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        alertText="字數超過上限！"
        wordCount="10/15"
      />
      <AuthInput type="password" label="密碼" placeholder="請輸入密碼" />
      <AuthButton>登入</AuthButton>
      <LinkTextContainer>
        <AuthLinkText>註冊</AuthLinkText>·<AuthLinkText>登入後台</AuthLinkText>
      </LinkTextContainer>
    </AuthContainer>
  );
}

export default LoginPage;