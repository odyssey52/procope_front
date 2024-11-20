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

export type CreateTokenWithGooglePayload = {
  authorizationCode: string;
};

export type CreateTokenWithGoogleResponse = {
  accessToken: string;
  refreshToken: string;
  isNewUser: boolean;
};
