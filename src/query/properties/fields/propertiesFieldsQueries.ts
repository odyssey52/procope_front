import PropertiesFieldsService from '@/services/properties/fields/propertiesFieldsService';
import { useQuery } from '@tanstack/react-query';
import PROPERTIES_QUERY_KEY from '../queryKey';

const propertiesFieldsService = new PropertiesFieldsService({ isPublic: false });

export const useReadPropertiesFields = () =>
  useQuery({
    queryKey: PROPERTIES_QUERY_KEY.READ_PROPERTIES_FIELDS,
    queryFn: () => propertiesFieldsService.readPropertiesFields(),
  });
