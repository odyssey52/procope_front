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

    if (returnedState !== '123') {
      alert('데이터가 변조가 감지되었습니다. 다시 시도해주세요.');
      return navigate('/login');
    }
    console.log('CSRF 검증!');
  }, [navigate]);

  return <></>;
};

export default NaverCallback;
