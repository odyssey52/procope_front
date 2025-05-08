import { readPropertiesQuestions } from '@/features/properties/services/questions/propertiesQuestionsService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const propertiesQuestionsQueries = createQueryKeys('propertiesQuestions', {
  readPropertiesQuestions: {
    queryKey: null,
    queryFn: readPropertiesQuestions,
  },
});

export default propertiesQuestionsQueries;
