import React from 'react';

export const metadata = {
  title: '인터셉트 페이지',
  description: '',
};

export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
