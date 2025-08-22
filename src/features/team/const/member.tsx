import Tag from '@/shared/ui/tag/Tag';
import { AuthorityTag } from '../types/member';

export const MEMBERLIST_TABLE_TITLE = ['참여자', '이메일', '직무', '담당업무', '참여 일자', '활성 일자', '권한', ''];
export const MEMBERLIST_TABLE_WIDTH = ['8', '18', '9', '23', '11', '11', '16'];

export const AUTHORITY_TAG: AuthorityTag[] = [
  {
    id: 'ADMIN',
    value: 'ADMIN',
    label: (
      <Tag $status="info" $style="transparent" $size="large">
        최고 관리자
      </Tag>
    ),
  },
  {
    id: 'MANAGER',
    value: 'MANAGER',
    label: (
      <Tag $status="success" $style="transparent" $size="large">
        관리자
      </Tag>
    ),
  },
  {
    id: 'MEMBER',
    value: 'MEMBER',
    label: (
      <Tag $style="transparent" $size="large">
        참여자
      </Tag>
    ),
  },
];
