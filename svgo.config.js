module.exports = {
  multipass: true, // 여러 차례 최적화 수행
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // 필요에 따라 기본 플러그인 설정을 변경할 수 있습니다.
          removeTitle: false, // title 요소 제거 방지
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)', // 원하는 속성 제거
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ focusable: false }], // 속성 추가 예시
      },
    },
  ],
};
