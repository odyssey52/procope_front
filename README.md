# 프로코프(procope)

애자일 팀 원픽 회고 관리 서비스 **프로코프**의 프론트엔드 코드 저장소입니다.
<br/>
<br/>
<br/>
<br/>

## notice

<br/>

### [2024-10-29] React.js 19.0.0 stable upgrade

React 19 안정화 버전으로 업그레이드 진행되었습니다.

<br/>

### [2024-10-29] React.js -> Next.js 로 마이그레이션됩니다.

15.0.1v을 채용하였습니다.
Next.js + styled-components 조합에서 빈번하게 발생하는 hydration error 에 대한 개선이 이루어졌습니다.
기존 env 파일의 prefix가 next 표준에 따라 변경이 필요할 수 있습니다.

<br/>
<br/>

## getting started

<br/>

- 사전 준비

  - Next.js 15 버전은 node.js 18.18v 이상을 요구합니다.
    - 18.18 이하일 경우 아래 명령어를 통해 설치합니다.<br/>`nvm install 18.18`
      - nvm 이 설치돼 있지 않은 경우 아래 명령어를 통해 설치 후 터미널을 재실행합니다.<br/>`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
    - 설치가 완료되면 아래 명령어로 버전을 변경합니다. <br/>`nvm use 18.18`
      - prefix 관련 에러가 발생한다면 아래 명령어를 통해 설정을 제거합니다.<br/>`nvm use --delete-prefix v18.18`

- `npm install`
- `npm run dev`

<br/>
<br/>

## tech stack

<br/>

- Next.js (15.0.4)
- React (19.0.0)
- TypeScript
- Tanstack-query
- Zustand
- Styled-components

<br/>
<br/>

## directory structure

<br/>

```css
src
 ├── app
 │     ├── login
 │     ├── ...
 ├── components
 │     ├── common
 │     ├── layout
 │     └── pages
 ├── constants
 ├── hooks
 ├── lib
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
