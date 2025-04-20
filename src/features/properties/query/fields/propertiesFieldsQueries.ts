import { readPropertiesFields } from '@/features/properties/services/fields/propertiesFieldsService';
import { ReadPropertiesFieldsParams } from '@/features/properties/services/fields/propertiesFieldsService.type';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const propertiesFieldsQueries = createQueryKeys('propertiesFields', {
  readPropertiesFields: (params: ReadPropertiesFieldsParams) => ({
    queryKey: [params],
    queryFn: () => readPropertiesFields(params),
  }),
});

export default propertiesFieldsQueries;
