import ApiClient from '@/services/api/apiClient';
import * as types from './propertiesRolesService.type';

const URLS = {
  READ_PROPERTIES_ROLES: '/properties/roles',
  CREATE_PROPERTIES_ROLES: '/properties/roles',
};

const api = new ApiClient({ isPublic: false });

export async function readPropertiesRoles(): Promise<types.ReadPropertiesRolesResponse> {
  const { data } = await api.get<types.ReadPropertiesRolesResponse>(URLS.READ_PROPERTIES_ROLES);
  return data;
}

export async function createPropertiesRoles(payload: types.CreatePropertiesRolesPayload) {
  const response = await api.post(URLS.CREATE_PROPERTIES_ROLES, payload);
  return response;
}
