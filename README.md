# 프로코프(procope)

애자일 팀 원픽 회고 관리 서비스 **프로코프**의 프론트엔드 코드 저장소입니다.

## notice

[2024-10-29]

- React.js -> Next.js 로 마이그레이션됩니다. 15.0.1v을 채용하고 사유는 아래와 같습니다.
  1.  Next.js + styled-components 조합에서 빈번하게 발생하는 hydration error 에 대한 개선이 이루어졌습니다.
  2.  React 19의 도입으로 memo 에 대한 접근성이 높아질 것으로 예상됩니다.
- 기존 env 파일의 prefix 를 next 표준에 따라 변경하세요.

## getting started

- 사전 준비

  - Next.js 15 버전은 node.js 18.18v 이상을 요구합니다.
    - 18.18 이하일 경우 아래 명령어를 통해 설치합니다.<br/>`nvm install 18.18`
      - nvm 이 설치돼 있지 않은 경우 아래 명령어를 통해 설치 후 터미널을 재실행합니다.<br/>`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
    - 설치가 완료되면 아래 명령어로 버전을 변경합니다. <br/>`nvm use 18.18`
      - prefix 관련 에러가 발생한다면 아래 명령어를 통해 설정을 제거합니다.<br/>`nvm use --delete-prefix v18.18`

- `npm install`
- `npm run dev`

## tech stack

- Next.js
- TypeScript
- Styled-components
- Tanstack-query
- Zustand

## directory structure

```css
src
 ├── components
 │     ├── common
 │     ├── layout
 │     └── pages
 ├── constants
 ├── hooks
 ├── query
 │     ├── auth
 ├── services
 │     ├── api
 │     ├── auth
 ├── store
 │     └── modal
 ├── styles
 │     └── theme
 ├── type
 └── utils
```
