/** payload */
export interface CreatePropertiesQuestionsPayload {
  description: string;
  childQuestions: string[];
}
/** response */
export interface ReadPropertiesQuestionsResponse {
  questions: {
    id: number;
    description: string;
    parentId: number;
  }[];
}
