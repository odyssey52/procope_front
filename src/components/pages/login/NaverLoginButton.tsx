'use client';

import Button from '@/components/common/ui/button/Button';

const NaverLoginButton = () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
  const generateRandomState = (): string => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(36);
  };

  const handleNaverLogin = () => {
    const STATE = generateRandomState();
    sessionStorage.setItem('naver_state', STATE);

    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

    window.location.href = naverLoginUrl;
  };

  return (
    <Button $type="outline" $size="48" $leftIcon="/assets/icons/line/naver.svg" onClick={handleNaverLogin}>
      네이버로 계속하기
    </Button>
  );
};

NaverLoginButton.displayName = 'NaverLoginButton';

export default NaverLoginButton;
