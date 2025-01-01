import ApiClient from '@/services/api/apiClient';
import * as types from './propertiesFieldsService.type';

const URLS = {
  READ_PROPERTIES_FIELDS: '/properties/fields',
};

const api = new ApiClient({ isPublic: false });

export async function readPropertiesFields(): Promise<types.ReadPropertiesFieldsResponse> {
  const { data } = await api.get<types.ReadPropertiesFieldsResponse>(URLS.READ_PROPERTIES_FIELDS);
  return data;
}
