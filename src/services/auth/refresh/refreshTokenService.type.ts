/** params */
/** payload */
export type createAccessTokenWithRefreshTokenPayload = {
  refreshToken: string;
};

/** response */
export type ReadAccessTokenWithRefreshTokenResponse = {
  accessToken: string;
};

export type CreateAccessTokenWithRefreshTokenResponse = string;
