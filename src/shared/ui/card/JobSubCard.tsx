import Image from 'next/image';
import styled, { css } from 'styled-components';
import Text from '../Text';

interface JobMainCardProps {
  text: string;
  size?: 'small'; // default: large
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

const JobSubCard = ({ text, size, subText, icon, state, onClick, disabled }: JobMainCardProps) => {
  return (
    <Wrapper $state={state} $size={size} onClick={onClick} disabled={disabled}>
      {icon && (
        <IconBox>
          <Image src={icon} width={80} height={80} alt="직무아이콘이미지" />
        </IconBox>
      )}
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

const Wrapper = styled.button<{ $state?: 'selected' | 'disabled'; $size?: 'small' }>`
  width: ${({ $size }) => ($size ? '267px' : '292px')};
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

const IconBox = styled.div`
  margin-bottom: 12px;
`;

JobSubCard.displayName = 'JobSubCard';

export default JobSubCard;
