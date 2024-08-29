import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <LeftBox>좌측 소개 이미지 영역</LeftBox>
      <RightBox>
        <button>구글 로그인</button>
        <button>네이버 로그인</button>
      </RightBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const LeftBox = styled.div`
  width: calc(50% + 10px);
`;
const RightBox = styled.div`
  width: calc(50% + 10px);
`;

export default Login;

Login.displayName = "Login";
