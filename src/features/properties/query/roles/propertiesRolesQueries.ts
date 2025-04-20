import { readPropertiesRoles } from '@/features/properties/services/roles/propertiesRolesService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const propertiesRolesQueries = createQueryKeys('propertiesRoles', {
  readPropertiesRoles: {
    queryKey: null,
    queryFn: readPropertiesRoles,
  },
});

export default propertiesRolesQueries;
