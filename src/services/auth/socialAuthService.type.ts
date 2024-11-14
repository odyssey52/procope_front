/** params */
/** payload */
export type CreateTokenWithNaverPayload = {
  authorizationCode: string;
  state: string;
};

/** response */
export type CreateTokenWithNaverResponse = {
  accessToken: string;
  refreshToken: string;
  isNewUser: boolean;
};
