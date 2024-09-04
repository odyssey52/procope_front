import TrafficLightCard from "@/components/common/ui/card/TrafficLightCard";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <ImageBox>
        <TrafficLightCard />
        <TrafficLightCard />
      </ImageBox>
      <TextBox>
        <Title>애자일 팀 원픽 회고 관리 서비스</Title>
        <Description>
          목표관리와 회고를 수치화하여 관리할 수 있게 도와드립니다.
          <br />
          회고 진행사항을 한눈에 확인해 보세요.
        </Description>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: 49.31%;
  border-radius: 32px;
  padding: 8.52vh 0;
  padding-top: 23.24vh;
  background-color: ${({ theme }) => theme.sementicColors.bg.brand};
`;
const ImageBox = styled.div`
  position: relative;
  max-width: 65.8%;
  width: 100%;
  aspect-ratio: 608/428;
  > div {
    position: absolute;
    width: 72.8%;
  }
  > div + div {
    bottom: 0;
    right: 0;
  }
`;
const TextBox = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.sementicColors.text.invers};
  ${({ theme }) => theme.fontStyle.heading_24};
`;
const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.sementicColors.text.invers};
  ${({ theme }) => theme.fontStyle.body_16_medium};
`;
HeroSection.displayName = "HeroSection";

export default HeroSection;
