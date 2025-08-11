'use client';

import styled from 'styled-components';
import TextSkeleton from '../skeleton/TextSkeleton';
import BoxSkeleton from '../skeleton/BoxSkeleton';

const SkeletonTaskCard = () => {
  return (
    <Wrapper>
      <TextSkeleton width="25%" height={16} />
      <TextSkeleton width="55%" height={24} />
      <TextSkeleton width="100%" height={24} />
      <ProfileSkeleton>
        <BoxSkeleton width="32px" height="32px" borderRadius={16} />
        <TextSkeleton width="100%" height={16} />
      </ProfileSkeleton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 444px;
  gap: 12px;
  border-radius: 12px;
  padding: 24px;
  max-width: 444px;
  width: 100%;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
`;

const ProfileSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

SkeletonTaskCard.displayName = 'SkeletonTaskCard';

export default SkeletonTaskCard;
