import Button from '@/components/common/ui/button/Button';
import TextButton from '@/components/common/ui/button/TextButton';
import Text from '@/components/common/ui/Text';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CheckStep = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Text variant="heading_32">
        나는
        <Text variant="heading_32" color="brand">
          {}
        </Text>
        직무를 맡고 있으며
        <br />
        <Text variant="heading_32" color="brand">
          {}
        </Text>
        업무를 담당하고 있어
        <br />
        피드백 받는 것을{' '}
        <Text variant="heading_32" color="brand">
          {}
        </Text>
        하고
        <br />
        구체적인 피드백을{' '}
        <Text variant="heading_32" color="brand">
          {}
        </Text>
        해<br />또 칭찬을 자주받는 것을{' '}
        <Text variant="heading_32" color="brand">
          {}
        </Text>
        하고
        <br />
        구체적인 칭찬을{' '}
        <Text variant="heading_32" color="brand">
          {}
        </Text>
        해
      </Text>
      <ButtonContainer>
        <ButtonBox>
          <TextButton
            $type="16"
            $leftIcon="/assets/icons/line/direction-left.svg"
            onClick={() => {
              navigate('/onboarding/third');
            }}
          >
            이전
          </TextButton>
          <Button>다음</Button>
        </ButtonBox>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 608px;
  height: 424px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;
`;
const ButtonBox = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

export default CheckStep;
