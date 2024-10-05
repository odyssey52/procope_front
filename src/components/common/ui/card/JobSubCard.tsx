import styled, { css } from 'styled-components';
import Text from '../Text';
import Icon from '../icon/Icon';

interface JobMainCardProps {
  text: string;
  subText?: string;
  icon?: string;
  state?: 'selected' | 'disabled';
  onClick?: () => void;
  disabled?: boolean;
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

const JobSubCard = ({ text, subText, icon, state, onClick, disabled }: JobMainCardProps) => {
  return (
    <Wrapper $state={state} onClick={onClick} disabled={disabled}>
      {icon && <CardIcon src={icon} width={80} />}
      <TextBox>
        <Text variant="heading_20" color={state === 'disabled' ? 'disabled' : 'primary'}>
          {text}
        </Text>
        {subText && (
          <Text variant="body_14_regular" color={state === 'disabled' ? 'disabled' : 'secondary'}>
            {subText}
          </Text>
        )}
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.button<{ $state?: 'selected' | 'disabled' }>`
  width: 292px;
  max-height: 240px;
  padding: 36px 20px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  ${({ $state }) => getStateStyle($state)}
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CardIcon = styled(Icon)`
  margin-bottom: 12px;
`;

JobSubCard.displayName = 'JobSubCard';

export default JobSubCard;
