'use client';
import Button from '@/components/common/ui/button/Button';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handlerGoogleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      console.log(res.access_token);
      await axios({
        method: 'post',
        url: '',
        data: { access_token: res.access_token },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <Button $type="outline" $size="48" $leftIcon="/assets/icons/line/google.svg" onClick={() => handlerGoogleLogin()}>
      구글로 계속하기
    </Button>
  );
};

GoogleLoginButton.displayName = 'GoogleLoginButton';

export default GoogleLoginButton;
