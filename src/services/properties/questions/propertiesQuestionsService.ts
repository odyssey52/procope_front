import ApiClient from '@/services/api/apiClient';
import * as types from './propertiesQuestionsService.type';

const URLS = {
  READ_PROPERTIES_QUESTIONS: '/properties/questions',
  CREATE_PROPERTIES_QUESTIONS: '/properties/questions',
};

export default class PropertiesQuestionsService {
  private apiClient: ApiClient;

  constructor({ isPublic }: { isPublic: boolean }) {
    this.apiClient = new ApiClient({ isPublic });
  }

  async readPropertiesQuestions(): Promise<types.ReadPropertiesQuestionsResponse> {
    const { data } = await this.apiClient.get<types.ReadPropertiesQuestionsResponse>(URLS.READ_PROPERTIES_QUESTIONS);
    return data;
  }

  async CreatePropertiesQuestions(payload: types.CreatePropertiesQuestionsPayload) {
    const response = await this.apiClient.post(URLS.CREATE_PROPERTIES_QUESTIONS, payload);
    return response;
  }
}
