'use client';

import { useReadAccessTokenWithRefreshToken } from '@/query/auth/refresh/refreshTokenQueries';
import { confirmModalActions } from '@/store/modal/confirmModal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const readAccessTokenWithRefreshToken = useReadAccessTokenWithRefreshToken();
  const router = useRouter();
  // useEffect(
  //   function accessTokenRefreshCheck() {
  //     if (!readAccessTokenWithRefreshToken.isError) {
  //       confirmModalActions.open({
  //         icon: (
  //           <Image src="/assets/icons/graphic/glass/error.png" width={80} height={80} alt="모달 에러 아이콘 이미지" />
  //         ),
  //         type: 'error',
  //         title: '세션이 만료되었습니다.',
  //         description: '로그인 페이지로 이동합니다.',
  //         cancelLabel: '뒤로가기',
  //         onCancel: () => router.back(),
  //         confirmLabel: '확인',
  //         onConfirm: () => router.push('/login'),
  //       });
  //     }
  //   },
  //   [router],
  // );
  return null;
};

page.displayName = 'page';

export default page;
