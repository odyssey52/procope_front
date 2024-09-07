import Button from '@/components/common/ui/button/Button';

const GoogleLoginButton = () => {
  return (
    <Button $type="outline" $size="48" $leftIcon="/assets/icons/line/google.svg">
      구글로 계속하기
    </Button>
  );
};

GoogleLoginButton.displayName = 'GoogleLoginButton';

export default GoogleLoginButton;
