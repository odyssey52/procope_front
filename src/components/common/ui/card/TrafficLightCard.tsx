import styled from "styled-components";

interface TrafficLightCardProps {
  src?: string;
}
const TrafficLightCard = ({ src }: TrafficLightCardProps) => {
  return (
    <Wrapper>
      {src && <BgImg src={src} />}
      <TrafficLightBox>
        <span id="red" />
        <span id="yellow" />
        <span id="green" />
      </TrafficLightBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 440px;
  width: 100%;
  aspect-ratio: 440/302;
  background-color: ${({ theme }) => theme.sementicColors.bg.invers};
  border-radius: 32px;
`;
const BgImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TrafficLightBox = styled.div`
  position: relative;
  display: inline-flex;
  padding: 24px;
  gap: 8px;
  > span {
    position: relative;
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    &#red {
      background-color: ${({ theme }) => theme.sementicColors.bg.danger};
    }
    &#yellow {
      background-color: ${({ theme }) => theme.sementicColors.bg.warning_bold};
    }
    &#green {
      background-color: ${({ theme }) => theme.sementicColors.bg.success_bold};
    }
  }
`;

TrafficLightCard.displayName = "TrafficLightCard";

export default TrafficLightCard;
