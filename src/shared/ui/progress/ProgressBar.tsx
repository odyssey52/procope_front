import styled from 'styled-components';

interface ProgressBarProps {
  rate: number;
}
const ProgressBar = ({ rate }: ProgressBarProps) => {
  return (
    <Wrapper>
      <Gage $rate={rate} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 90%;
  border-radius: 4px;
  overflow: hidden;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  height: 4px;
`;
const Gage = styled.span<{ $rate: number }>`
  position: relative;
  display: block;
  width: ${({ $rate }) => `${$rate}%`};
  max-width: 100%;
  height: 100%;
  transition: width 0.3s ease;
  background-color: ${({ theme }) => theme.sementicColors.bg.brand};
`;
export default ProgressBar;
