export type JobMainCategory = keyof typeof JOB_MAIN_LIST;
export type JobMainId = (typeof JOB_MAIN_LIST)[keyof typeof JOB_MAIN_LIST]['id'];

export type JobMain = {
  id: JobMainId;
  title: string;
  img: string;
  icon: string;
  roles: { id: number; name: string }[];
};
export const JOB_MAIN_LIST = {
  기획: {
    id: 1,
    title: '기획',
    img: '/assets/icons/graphic/glass/file-on.png',
    icon: '📑',
    roles: [
      { id: 1, name: '사업' },
      { id: 2, name: '전략' },
      { id: 3, name: '서비스' },
      { id: 4, name: 'R&D' },
      { id: 5, name: '상품' },
    ],
  },
  개발: {
    id: 2,
    title: '개발',
    img: '/assets/icons/graphic/glass/laptop-on.png',
    icon: '‍🧑‍💻',
    roles: [
      { id: 1, name: '언리얼' },
      { id: 2, name: '정보보안' },
      { id: 3, name: '블록체인' },
      { id: 4, name: '유니티' },
      { id: 5, name: '인프라' },
      { id: 6, name: '안드로이드' },
      { id: 7, name: 'ios' },
      { id: 8, name: '임베디드' },
      { id: 9, name: 'CI/CD' },
      { id: 10, name: '.NET' },
      { id: 11, name: '프론트엔드' },
      { id: 12, name: 'DBA' },
      { id: 13, name: 'DevOps' },
      { id: 14, name: 'QA' },
      { id: 15, name: 'VR' },
      { id: 16, name: '기술지원' },
      { id: 17, name: '서버' },
    ],
  },
  디자인: {
    id: 3,
    title: '디자인',
    img: '/assets/icons/graphic/glass/flower-on.png',
    icon: '🎨',
    roles: [
      { id: 1, name: 'CX' },
      { id: 2, name: 'UX' },
      { id: 3, name: '컨텐츠' },
      { id: 4, name: '3D' },
      { id: 5, name: 'UI' },
      { id: 6, name: '그래픽' },
      { id: 7, name: 'BX' },
    ],
  },
  데이터: {
    id: 4,
    title: '데이터',
    img: '/assets/icons/graphic/glass/graph-on.png',
    icon: '💰',
    roles: [
      { id: 1, name: '데이터 분석' },
      { id: 2, name: '머신러닝' },
      { id: 3, name: '데이터 시각화' },
      { id: 4, name: 'AI' },
    ],
  },
  마케팅: {
    id: 5,
    title: '마케팅',
    img: '/assets/icons/graphic/glass/coffee-on.png',
    icon: '🧑‍💼',
    roles: [
      { id: 1, name: '디지털' },
      { id: 2, name: '브랜드' },
      { id: 3, name: '소셜' },
      { id: 4, name: '퍼포먼스' },
      { id: 5, name: 'ATL' },
      { id: 6, name: 'PR' },
      { id: 7, name: '그로스 해킹' },
      { id: 8, name: '콘텐츠' },
      { id: 9, name: '글로벌' },
      { id: 10, name: '제휴' },
      { id: 11, name: 'BTL' },
      { id: 12, name: '마케팅 전략' },
      { id: 13, name: '광고' },
    ],
  },
  영업: {
    id: 6,
    title: '영업',
    img: '/assets/icons/graphic/glass/money-on.png',
    icon: '☕️',
    roles: [
      { id: 1, name: '기술영업' },
      { id: 2, name: '솔루션 컨설턴트' },
      { id: 3, name: '해외영업' },
      { id: 4, name: '외부영업' },
      { id: 5, name: '미디어 세일즈' },
    ],
  },
  운영: {
    id: 7,
    title: '운영',
    img: '/assets/icons/graphic/glass/userbook-on.png',
    icon: '📊',
    roles: [
      { id: 1, name: '인사' },
      { id: 2, name: 'CS' },
      { id: 3, name: '법률' },
      { id: 4, name: '행정' },
      { id: 5, name: '회계' },
      { id: 6, name: '구매' },
      { id: 7, name: '리스크' },
    ],
  },
};

export const JOB_SUB_LIST = {
  기획: ['사업', '전략', '서비스', 'R&D', '상품'],
  개발: [
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
  디자인: ['CX', 'BX', 'UX', 'UI', '그래픽', '3D', '컨텐츠'],
  데이터: ['데이터 분석', '데이터 시각화', '머신러닝', 'AI'],
  마케팅: [
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
  영업: ['기술영업', '외부영업', '해외영업', '솔루션 컨설턴트', '미디어 세일즈'],
  운영: ['회계', '인사', '구매', '리스크', '법률', 'CS', '행정'],
};

export const TENDENCY_TITLE_LIST = [
  '1. 피드백을 자주 받는 걸 선호하시나요?',
  '1-1. 구체적인 피드백을 선호하시나요?',
  '2. 칭찬을 자주 받는 걸 선호하시나요?',
  '2-1. 구체적인 칭찬을 선호하시나요?',
];

export const PREFERENCE_LIST = ['매우 비선호😩', '비선호👎🏻', '선호👍🏻', '보통😐', '매우 선호😆'];
