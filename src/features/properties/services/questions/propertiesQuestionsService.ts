import ApiClient from '@/shared/api/apiClient';
import * as types from './propertiesQuestionsService.type';

const URLS = {
  READ_PROPERTIES_QUESTIONS: '/properties/questions',
  CREATE_PROPERTIES_QUESTIONS: '/properties/questions',
};

const api = new ApiClient({ isPublic: false });

export async function readPropertiesQuestions(): Promise<types.ReadPropertiesQuestionsResponse> {
  const { data } = await api.get<types.ReadPropertiesQuestionsResponse>(URLS.READ_PROPERTIES_QUESTIONS);
  return data;
}

export async function createPropertiesQuestions(payload: types.CreatePropertiesQuestionsPayload) {
  const response = await api.post(URLS.CREATE_PROPERTIES_QUESTIONS, payload);
  return response;
}
