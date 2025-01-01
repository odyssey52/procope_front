import { readPropertiesFields } from '@/services/properties/fields/propertiesFieldsService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const propertiesFieldsQueries = createQueryKeys('propertiesFields', {
  readPropertiesFields: {
    queryKey: null,
    queryFn: readPropertiesFields,
  },
});

export default propertiesFieldsQueries;
