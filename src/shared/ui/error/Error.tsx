import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';
import Button from '../button/Button';

interface ErrorProps {
  title: string;
  description: string;
  onRetry?: () => void;
  onRetryLabel?: string;
}

const Error = ({ title, description, onRetry, onRetryLabel = '다시 시도' }: ErrorProps) => {
  return (
    <Wrapper>
      <Image src="/assets/icons/graphic/glass/warning.png" width={120} height={120} alt="추가 아이콘 이미지" />
      <TextBox>
        <Text variant="heading_18" color="primary">
          {title || 'Error'}
        </Text>
        <Text variant="body_14_regular" color="secondary">
          {description || '잠시후 다시 시도해 주시길 바랍니다.'}
        </Text>
      </TextBox>
      {onRetry && (
        <Button $type="outline" onClick={onRetry}>
          {onRetryLabel}
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

Error.displayName = 'Error';

export default Error;
