import { IconGoogle } from '@/assets/icons/line';
import Button from '@/components/common/ui/button/Button';

const GoogleLoginButton = () => {
  const handlerGoogleLogin = () => {
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    const googleLoginUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile`;

    window.location.href = googleLoginUrl;
  };

  return (
    <Button $type="outline" size="48" leftIcon={<IconGoogle />} onClick={handlerGoogleLogin}>
      구글로 계속하기
    </Button>
  );
};

export default GoogleLoginButton;
