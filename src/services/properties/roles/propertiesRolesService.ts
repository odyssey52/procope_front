import ApiClient from '@/services/api/apiClient';
import * as types from './propertiesRolesService.type';

const URLS = {
  READ_PROPERTIES_ROLES: '/properties/roles',
  CREATE_PROPERTIES_ROLES: '/properties/roles',
};

export default class PropertiesRolesService {
  private apiClient: ApiClient;

  constructor({ isPublic }: { isPublic: boolean }) {
    this.apiClient = new ApiClient({ isPublic });
  }

  async readPropertiesRoles(): Promise<types.ReadPropertiesRolesResponse> {
    const { data } = await this.apiClient.get<types.ReadPropertiesRolesResponse>(URLS.READ_PROPERTIES_ROLES);
    return data;
  }

  async CreatePropertiesRoles(payload: types.CreatePropertiesRolesPayload) {
    const response = await this.apiClient.post(URLS.CREATE_PROPERTIES_ROLES, payload);
    return response;
  }
}
