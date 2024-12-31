import ApiClient from '@/services/api/apiClient';
import * as types from './propertiesFieldsService.type';

const URLS = {
  READ_PROPERTIES_FIELDS: '/properties/fields',
};

export default class PropertiesFieldsService {
  private apiClient: ApiClient;

  constructor({ isPublic }: { isPublic: boolean }) {
    this.apiClient = new ApiClient({ isPublic });
  }

  async readPropertiesFields(): Promise<types.ReadPropertiesFieldsResponse> {
    const { data } = await this.apiClient.get<types.ReadPropertiesFieldsResponse>(URLS.READ_PROPERTIES_FIELDS);
    return data;
  }
}
