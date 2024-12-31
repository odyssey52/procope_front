export const CREATE = 'CREATE';
export const READ = 'READ';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const USER = 'USER';
export const INFO = 'INFO';

export const ROLES = 'ROLES';
export const PREFERENCES = 'PREFERENCES';

const USER_INFO_QUERY_KEY = {
  READ_USER_INFO: [READ, USER, INFO],
  UPDATE_USER_INFO: [UPDATE, USER, INFO],
  READ_USER_INFO_ROLES: [READ, USER, INFO, ROLES],
  READ_USER_INFO_PREFERENCES: [READ, USER, INFO, PREFERENCES],
};
export default USER_INFO_QUERY_KEY;
