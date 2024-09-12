import Radio from '@/components/common/ui/radio/Radio';
import styled from 'styled-components';

const Onboarding = () => {
  return (
    <Wrapper>
      <Radio id="a" name="a" />
      <Radio id="a" name="a" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

Onboarding.displayName = 'Onboarding';

export default Onboarding;
