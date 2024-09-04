import Button from "components/common/ui/button/Button";

const NaverLoginButton = () => {
  return (
    <Button type="outline" size="48" leftIcon="/assets/icons/line/naver.svg">
      네이버로 계속하기
    </Button>
  );
};

NaverLoginButton.displayName = "NaverLoginButton";

export default NaverLoginButton;
