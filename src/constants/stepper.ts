export type JobMainCategory = keyof typeof JOB_MAIN_LIST;

export const JOB_MAIN_LIST = {
  plan: {
    title: '기획',
    img: '/assets/icons/graphic/glass/file-on.png',
    icon: '📑',
  },
  development: {
    title: '개발',
    img: '/assets/icons/graphic/glass/laptop-on.png',
    icon: '‍🧑‍💻',
  },
  design: {
    title: '디자인',
    img: '/assets/icons/graphic/glass/flower-on.png',
    icon: '🎨',
  },
  data: {
    title: '데이터',
    img: '/assets/icons/graphic/glass/graph-on.png',
    icon: '💰',
  },
  marketing: {
    title: '마케팅',
    img: '/assets/icons/graphic/glass/coffee-on.png',
    icon: '🧑‍💼',
  },
  business: {
    title: '영업',
    img: '/assets/icons/graphic/glass/money-on.png',
    icon: '☕️',
  },
  operate: {
    title: '운영',
    img: '/assets/icons/graphic/glass/userbook-on.png',
    icon: '📊',
  },
};

export const JOB_SUB_LIST = {
  plan: ['사업', '전략', '서비스', 'R&D', '상품'],
  development: [
    '프론트엔드',
    '안드로이드',
    'ios',
    '유니티',
    '언리얼',
    'VR',
    '서버',
    'DBA',
    '.NET',
    '인프라',
    'DevOps',
    'CI/CD',
    '임베디드',
    '블록체인',
    '기술지원',
    'QA',
    '정보보안',
  ],
  design: ['CX', 'BX', 'UX', 'UI', '그래픽', '3D', '컨텐츠'],
  data: ['데이터 분석', '데이터 시각화', '머신러닝', 'AI'],
  marketing: [
    '디지털',
    '콘텐츠',
    '브랜드',
    '마케팅 전략',
    '퍼포먼스',
    '소셜',
    '광고',
    '글로벌',
    'PR',
    '그로스 해킹',
    '제휴',
    'ATL',
    'BTL',
  ],
  business: ['기술영업', '외부영업', '해외영업', '솔루션 컨설턴트', '미디어 세일즈'],
  operate: ['회계', '인사', '구매', '리스크', '법률', 'CS', '행정'],
};

export const TENDENCY_TITLE_LIST = [
  '1. 피드백을 자주 받는 걸 선호하시나요?',
  '1-1. 구체적인 피드백을 선호하시나요?',
  '2. 칭찬을 자주 받는 걸 선호하시나요?',
  '2-1. 구체적인 칭찬을 선호하시나요?',
];

export const PREFERENCE_LIST = ['매우 비선호😩', '비선호👎🏻', '선호👍🏻', '보통😐', '매우 선호😆'];
