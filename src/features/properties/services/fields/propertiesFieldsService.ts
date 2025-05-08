import ApiClient from '@/shared/api/apiClient';
import * as types from './propertiesFieldsService.type';

const URLS = {
  READ_PROPERTIES_FIELDS: '/properties/fields',
};

const api = new ApiClient({ isPublic: false });

export async function readPropertiesFields(
  params: types.ReadPropertiesFieldsParams,
): Promise<types.ReadPropertiesFieldsResponse> {
  const { data } = await api.get<types.ReadPropertiesFieldsResponse>(
    `${URLS.READ_PROPERTIES_FIELDS}?roleId=${params.roleId}`,
  );
  return data;
}
