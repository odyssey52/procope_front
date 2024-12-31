import { JobMainCategory } from '@/constants/stepper';

/** payload */
export interface CreatePropertiesRolesPayload {
  name: JobMainCategory;
  belongedFields: string[];
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
