import { readPropertiesRoles } from '@/services/properties/roles/propertiesRolesService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const propertiesRolesQueries = createQueryKeys('propertiesRoles', {
  readPropertiesRoles: {
    queryKey: null,
    queryFn: readPropertiesRoles,
  },
});

export default propertiesRolesQueries;
