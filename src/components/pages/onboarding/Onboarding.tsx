import JobMainCard from '@/components/common/ui/card/JobMainCard';
import JobSubCard from '@/components/common/ui/card/JobSubCard';
import Radio from '@/components/common/ui/radio/Radio';
import styled from 'styled-components';

const Onboarding = () => {
  return (
    <Wrapper>
      <Radio id="a" name="a" $size="lg" />
      <Radio id="b" name="a" />
      <Radio id="c" name="a" $size="sm" />
      <Radio id="b" name="a" />
      <Radio id="a" name="a" $size="lg" />
      <JobMainCard text="개발" icon="/assets/icons/graphic/glass/laptop-on.svg" />
      <JobMainCard text="개발" icon="/assets/icons/graphic/glass/laptop-on.svg" state="selected" />
      <JobMainCard text="개발" icon="/assets/icons/graphic/glass/laptop-on.svg" state="disabled" />
      <JobSubCard text="개발" />
      <JobSubCard text="개발" state="selected" />
      <JobSubCard text="개발" state="disabled" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

Onboarding.displayName = 'Onboarding';

export default Onboarding;
