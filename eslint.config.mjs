/* eslint-disable max-len */
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  ...compat.extends('eslint-config-airbnb'),
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off', // 빈 객체 타입에 대한 규칙. 작업 전 미리 정의할 수 있는 경우가 있어 off
      'import/prefer-default-export': 'off', // 단일 export 에 대한 export default 를 권장하는 규칙. 추가적인 export 를 위해 미리 처리하는 경우가 있어 off
      'react/jsx-no-useless-fragment': 'off', // Fragment 사용에 대한 경고 off. Fragment 사용을 지양하지만 필요한 경우가 있기 때문에 off 처리함
      // prefer-template & quotes : 문자열 연결에 대한 규칙. 백틱과 ${} 조합을 권장합니다.
      // import/order : import 순서를 강제하는 규칙. import 문의 순서를 변경하여 해결할 수 있습니다.
      indent: 'off', // 들여쓰기 강제 규칙 off. prettier 에서 처리하고 있음
      'no-nested-ternary': 'off', // 3항 연산자 중첩 사용 금지 규칙 off. 필요에 따라 자율적으로 사용할 수 있게 off 처리함
      'nonblock-statement-body-position': 'off', // if, else, for, while, do-while 이후 중괄호가 없을 경우 해당 줄에 코드가 바로 작성되도록 하는 규칙.
      curly: 'off', // if, else, for, while, do-while 문에 중괄호를 사용하도록 강제 한줄일 경우 가독성 측면에서 생략할 수 있게 허용
      'no-confusing-arrow': 'off', // 화살표 함수와 연산자가 혼동될 수 있는 경우에 대한 규칙. 오버 매니징이라고 판단하여 off 처리함
      'no-shadow': 'off', // 필요한 rule 이지만 styled theme 에서 변수명이 중복되는 경우가 빈번하여 off 처리
      'max-len': 'off', // 한 줄의 최대 길이 제한하는 규칙. 현재 prettier 에서 처리하고 있고 주석의 경우는 예외해야하므로 off
      'react/jsx-one-expression-per-line': 'off', // 한 줄에 하나의 표현식만 허용하는 규칙 off.
      'react/no-array-index-key': 'off', // index key 금지 규칙 off. key는 고유해야하지만 매번 crypto 를 사용할 수 없기 때문에 off 처리함
      'operator-linebreak': 'off', // 연산자 줄바꿈 강제 off.
      'implicit-arrow-linebreak': 'off', // 애로우 펑션 줄바꿈 강제.
      'react/destructuring-assignment': 'off', // 구조 분해 할당을 강제하지 않음.
      'react/state-in-constructor': 'off', // constructor 내부에 state를 선언하라는 규칙. constructor 사용을 지양하기 때문에 off 처리함
      '@typescript-eslint/no-unused-vars': 'off', // 사용하지 않는 변수 경고. 사용하지 않는 변수더라도 추후 작업을 위해 남겨둘 수 있게 off 처리함
      'object-curly-newline': 'off', // 중괄호 다음 줄바꿈 강제하는 규칙.
      'no-underscore-dangle': 'off', // underscore 사용에 대한 경고 off. _로 시작하는 변수에 대한 위험성 낮다고 판단하여 off 처리함
      'react/require-default-props': 'off', // defaultProps 정의하라는 규칙. React 최신에서는 defaultProps를 더이상 사용하지 않는다는 내용 확인.
      'import/no-extraneous-dependencies': 'off', // dependencies에 포함해야 할 패키지가 devDependencies에 잘못 포함되어 있을 때 경고를 발생.
      'import/extensions': 'off', // import 시 확장자를 명시하라는 규칙. 파일마다 확장자를 명시하는 것은 번거로우므로 off 처리함
      'no-use-before-define': 'off', // 함수가 선언되기 전에 사용하는 것에 대한 rule. react 환경에서는 필연적으로 발생하기 때문에 off 처리함
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
      'arrow-body-style': 'off', // return 스타일 유무에 대한 강제. 이 부분은 강제 시 효율성이 떨어질 수 있어 off 처리함
      'no-unused-vars': 'off', // 사용하지 않는 변수 경고 off 생산성 향상을 위해 off 처리함
      'react/function-component-definition': [2, { namedComponents: ['arrow-function', 'function-declaration'] }], // 컴포넌트 정의 방식을 명시적으로 지정 (arrow-function 사용 권장)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'consistent-return': 'off', // if 와 else if 의 차이가 없을 때 if 사용을 권장하고 return 을 강제. useEffect 에서 return 의 경우 cleanup 함수와 혼동을 줄이기 위해 off 처리함
    },
    settings: {
      'import/resolver': {
        // 'src' 디렉터리로 alias 설정 eslint 가 alias 를 인식하게 하기 위함 '@/'에 대한 에러 해결
        alias: {
          map: [['@', path.resolve(__dirname, 'src')]],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // 지원하는 파일 확장자
        },
      },
    },
  },
  {
    languageOptions: {
      globals: {
        React: true, // React 사용을 정의. React.Component 사용 시 에러가 발생하지 않도록 함
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
