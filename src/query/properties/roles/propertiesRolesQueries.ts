import PropertiesRolesService from '@/services/properties/roles/propertiesRolesService';
import * as types from '@/services/properties/roles/propertiesRolesService.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import PROPERTIES_QUERY_KEY from '../queryKey';

const propertiesRolesService = new PropertiesRolesService({ isPublic: false });

export const useReadPropertiesRoles = () =>
  useQuery({
    queryKey: PROPERTIES_QUERY_KEY.READ_PROPERTIES_ROLES,
    queryFn: () => propertiesRolesService.readPropertiesRoles(),
  });

export const useCreatePropertiesRoles = () =>
  useMutation({
    mutationKey: PROPERTIES_QUERY_KEY.CREATE_PROPERTIES_ROLES,
    mutationFn: (payload: types.CreatePropertiesRolesPayload) => propertiesRolesService.CreatePropertiesRoles(payload),
  });
