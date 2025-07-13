'use client';

import teamQueries from '@/features/team/query/teamQueries';
import AvatarGroup from '@/shared/ui/avatar/AvatarGroup';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Button from '@/shared/ui/button/Button';
import MoreButton from '@/shared/ui/button/MoreButton';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const members = [
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo01.svg', isOnline: true },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo02.svg', isOnline: true },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo03.svg', isOnline: true },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo04.svg', isOnline: false },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo05.svg', isOnline: false },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo06.svg', isOnline: false },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo06.svg', isOnline: false },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo06.svg', isOnline: false },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo06.svg', isOnline: false },
  { nickname: '홍길동', image: '/assets/icons/graphic/profile/photo06.svg', isOnline: false },
];

const RetroPage = () => {
  const params = useParams();
  const paths = [
    {
      name: '회고 관리',
      path: `/team/${params.teamId}`,
      clickable: false,
    },
    {
      name: '회고 목록',
      path: `/team/${params.teamId}/retro`,
      clickable: true,
    },
    {
      name: '회고 상세',
      path: `/team/${params.teamId}/retro/${params.retroId}`,
      clickable: true,
    },
  ];
  const { data, isSuccess } = useQuery({
    ...teamQueries.readRetro({ teamId: params.teamId as string, retroId: params.retroId as string }),
  });
  const [title, setTitle] = useState<string>('');
  const [isMemberListOpen, setIsMemberListOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setTitle(data?.title ?? '');
    }
  }, [isSuccess]);
  return (
    <Wrapper>
      <Head>
        <Breadcrumbs paths={paths} />
        <RetroInfoWrapper>
          <TitleWrapper>
            <PageTitle title={title} setTitle={setTitle} placeholder="제목을 작성해 주세요" />
            <MemberWrapper>
              <AvatarGroup profileList={members} size={32} />
              <Button $type="outline" pressed={isMemberListOpen} onClick={() => setIsMemberListOpen(!isMemberListOpen)}>
                Member
              </Button>
              <MoreButton size={40} />
            </MemberWrapper>
          </TitleWrapper>
        </RetroInfoWrapper>
      </Head>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
`;

const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RetroInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MemberWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

RetroPage.displayName = 'RetroPage';

export default RetroPage;
