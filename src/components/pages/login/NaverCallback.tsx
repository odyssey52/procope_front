import { useCreateTokenWithNaver } from '@/query/auth/socialAuthQueries';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NaverCallback = () => {
  const navigate = useNavigate();
  const createTokenWithNaver = useCreateTokenWithNaver();

  const requeseAccessToken = async (code: string) => {
    const payload = {
      code,
      state: sessionStorage.getItem('naver_state'),
    };
    await createTokenWithNaver.mutateAsync(payload, { onSuccess: () => console.log('토큰 발급!') });
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const returnedState = urlParams.get('state');
    const storedState = sessionStorage.getItem('naver_state');

    if (!code) return navigate('/login');

    if (returnedState !== storedState) {
      alert('데이터가 변조가 감지되었습니다. 다시 시도해주세요.');
      return navigate('/login');
    }
    requeseAccessToken(code);
  }, [navigate]);

  return <></>;
};

export default NaverCallback;
