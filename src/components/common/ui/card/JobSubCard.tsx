import styled, { css } from 'styled-components';
import Text from '../Text';
import Icon from '../icon/Icon';
interface JobMainCardProps {
  text: string;
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

const JobSubCard = ({ text, state }: JobMainCardProps) => {
  return (
    <Wrapper $state={state}>
      <Text variant="heading_20" color={state === 'disabled' ? 'disabled' : 'primary'}>
        {text}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $state?: 'selected' | 'disabled' }>`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 292px;
  padding: 36px 20px;
  border-radius: 16px;
  cursor: pointer;
  ${({ $state }) => getStateStyle($state)}
`;

JobSubCard.displayName = 'JobSubCard';

export default JobSubCard;
