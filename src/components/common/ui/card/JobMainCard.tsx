import styled, { css } from 'styled-components';
import Text from '../Text';
import Icon from '../icon/Icon';
interface JobMainCardProps {
  text: string;
  icon: string;
  state?: 'selected' | 'disabled';
}

const getStateStyle = (state?: 'selected' | 'disabled') => {
  switch (state) {
    case 'selected':
      return css`
        border: 1px solid ${({ theme }) => theme.sementicColors.border.brand};
        background: ${({ theme }) => theme.sementicColors.bg.info_subtle};
        &:hover {
          background: ${({ theme }) => theme.sementicColors.bg.info_subtle};
          border: 1px solid ${({ theme }) => theme.sementicColors.border.brand};
        }
      `;
    case 'disabled':
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.disabled};
        border: 1px solid ${({ theme }) => theme.sementicColors.bg.disabled};
        cursor: default;
        &:hover {
          background: ${({ theme }) => theme.sementicColors.bg.disabled};
          border: 1px solid ${({ theme }) => theme.sementicColors.bg.disabled};
        }
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
        border: 1px solid ${({ theme }) => theme.sementicColors.bg.tertiary};
        &:hover {
          background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
          border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
        }
      `;
  }
};
const JobMainCard = ({ text, icon, state }: JobMainCardProps) => {
  return (
    <Wrapper $state={state}>
      <Text variant="heading_20" color={state === 'disabled' ? 'disabled' : 'primary'}>
        {text}
      </Text>
      <CardIcon src={icon} width={80} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $state?: 'selected' | 'disabled' }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 134px;
  height: 200px;
  padding: 20px;
  border-radius: 16px;
  cursor: pointer;
  ${({ $state }) => getStateStyle($state)}
`;
const CardIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

JobMainCard.displayName = 'JobMainCard';

export default JobMainCard;
