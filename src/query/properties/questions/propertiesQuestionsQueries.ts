import PropertiesQuestionsService from '@/services/properties/questions/propertiesQuestionsService';
import * as types from '@/services/properties/questions/propertiesQuestionsService.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import PROPERTIES_QUERY_KEY from '../queryKey';

const propertiesQuestionsService = new PropertiesQuestionsService({ isPublic: false });

export const useReadPropertiesQuestions = () =>
  useQuery({
    queryKey: PROPERTIES_QUERY_KEY.READ_PROPERTIES_QUESTIONS,
    queryFn: () => propertiesQuestionsService.readPropertiesQuestions(),
  });

export const useCreatePropertiesQuestions = () =>
  useMutation({
    mutationKey: PROPERTIES_QUERY_KEY.CREATE_PROPERTIES_QUESTIONS,
    mutationFn: (payload: types.CreatePropertiesQuestionsPayload) =>
      propertiesQuestionsService.CreatePropertiesQuestions(payload),
  });
