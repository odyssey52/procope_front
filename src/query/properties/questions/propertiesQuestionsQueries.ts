import { readPropertiesQuestions } from '@/services/properties/questions/propertiesQuestionsService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const propertiesQuestionsQueries = createQueryKeys('propertiesQuestions', {
  readPropertiesQuestions: {
    queryKey: null,
    queryFn: readPropertiesQuestions,
  },
});

export default propertiesQuestionsQueries;
