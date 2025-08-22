import { UserRole } from '@/shared/types/team';
import React from 'react';

export interface AuthorityTag {
  id: UserRole;
  value: UserRole;
  label: React.JSX.Element;
}
