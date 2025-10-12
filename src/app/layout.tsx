import Provider from '@/shared/ui/provider/Provider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '프로코프',
  description: '애자일 팀 원픽 회고 관리 서비스',
  // 아래 두 항목은 default 로 세팅되어 있음.
  //   <meta charset="utf-8" />
  // <meta name="viewport" content="width=device-width, initial-scale=1" />
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
