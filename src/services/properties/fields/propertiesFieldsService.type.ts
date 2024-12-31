/** payload */
export interface CreatePropertiesRolesPayload {
  name: string;
  belongedFields: [string];
}

/** response */
export interface ReadPropertiesRolesResponse {
  roles: [
    {
      id: number;
      name: string;
      fields: {
        id: number;
        name: string;
      }[];
    },
  ];
}

export interface ReadPropertiesFieldsResponse {
  roles: [
    {
      id: number;
      name: string;
      fields: {
        id: number;
        name: string;
      }[];
    },
  ];
}
