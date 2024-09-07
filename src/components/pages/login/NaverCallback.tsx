import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NaverCallback = () => {
  const navigate = useNavigate();

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

    console.log('CSRF 검증!');
    axios
      .post('https://api-dev.procope.kr/callback', {
        code,
        state: returnedState,
      })
      .then((response) => {
        console.log('백엔드 응답:', response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('백엔드 요청 오류:', error);
        alert('로그인 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
        navigate('/login');
      });
  }, [navigate]);

  return <></>;
};

export default NaverCallback;
