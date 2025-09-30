import ApiClient from '@/shared/api/apiClient';
import * as types from './retroService.type';

const URLS = {
  READ_RETRO_LIST: (teamId: string) => `/retrospectives/${teamId}`,
  CREATE_RETRO: (teamId: string) => `/retrospectives/${teamId}`,
  READ_ONLINE_MEMBER_LIST: (retroId: string | number) => `/retrospectives/${retroId}/visitUsers`,
  READ_RETRO: (teamId: string, retroId: string | number) => `/retrospectives/${teamId}/${retroId}`,
  DELETE_RETRO: (teamId: string, retroId: string | number) => `/retrospectives/${teamId}/${retroId}`,

  UPDATE_RETRO_TITLE: (teamId: string, retroId: string | number) => `/retrospectives/${teamId}/${retroId}`,

  READ_RETRO_PROBLEM_LIST: (retroId: string | number, kanbanStatus: types.KanbanStatus | types.ProblemKanbanStatus) =>
    `/retrospectives/problems/${retroId}?kanbanStatus=${kanbanStatus}`,
  CREATE_RETRO_PROBLEM: (retroId: string | number) => `/retrospectives/problems/${retroId}`,
  UPDATE_RETRO_PROBLEM: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}`,
  READ_RETRO_PROBLEM_DETAIL: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}`,
  DELETE_RETRO_PROBLEM: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}`,
  UPDATE_RETRO_PROBLEM_ORDER: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}`,
  UPDATE_RETRO_PROBLEM_STATUS: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}`,
  READ_RETRO_PROBLEM_ROLE: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}/role`,
  CREATE_RETRO_PROBLEM_ROLE: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}/role`,
  DELETE_RETRO_PROBLEM_ROLE: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}/role`,
  UPDATE_RETRO_PROBLEM_COMPLETED_AT: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/${retroId}/${problemId}/completed`,
  UPDATE_RETRO_DATE: (teamId: string, retroId: string | number) => `/retrospectives/${teamId}/${retroId}/date`,
  READ_RETRO_MEMBER_LIST: (teamId: string, retroId: string | number) =>
    `/retrospectives/${teamId}/${retroId}/participants`,
  CREATE_RETRO_MEMBER: (teamId: string, retroId: string | number) =>
    `/retrospectives/${teamId}/${retroId}/participants`,
  DELETE_RETRO_MEMBER: (teamId: string, retroId: string | number) =>
    `/retrospectives/${teamId}/${retroId}/participants`,

  CREATE_RETRO_SOLUTION: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/solutions/${retroId}/${problemId}`,
  UPDATE_RETRO_SOLUTION: (retroId: string | number, problemId: string | number, solutionId: string | number) =>
    `/retrospectives/problems/solutions/${retroId}/${problemId}/${solutionId}`,
  DELETE_RETRO_SOLUTION: (retroId: string | number, problemId: string | number, solutionId: string | number) =>
    `/retrospectives/problems/solutions/${retroId}/${problemId}/${solutionId}`,
  READ_RETRO_SOLUTION_LIST: (retroId: string | number, problemId: string | number) =>
    `/retrospectives/problems/solutions/${retroId}/${problemId}`,
  READ_RETRO_SOLUTION_DETAIL: (retroId: string | number, problemId: string | number, solutionId: string | number) =>
    `/retrospectives/problems/solutions/${retroId}/${problemId}/${solutionId}`,
};

const api = new ApiClient({ isPublic: false });

export async function readRetroList(params: types.ReadRetroListParams): Promise<types.ReadRetroListResponse> {
  const { data } = await api.get<types.ReadRetroListResponse>(URLS.READ_RETRO_LIST(params.teamId));
  return data;
}

export async function createRetro(payload: types.CreateRetroPayload): Promise<types.CreateRetroResponse> {
  const { data } = await api.post<types.CreateRetroResponse>(URLS.CREATE_RETRO(payload.teamId), {
    title: payload.title,
  });
  return data;
}
export async function readRetro(params: types.ReadRetroParams): Promise<types.ReadRetroResponse> {
  const { data } = await api.get<types.ReadRetroResponse>(URLS.READ_RETRO(params.teamId, params.retroId));
  return data;
}

export async function deleteRetro(params: types.DeleteRetroParams) {
  const { data } = await api.delete(URLS.DELETE_RETRO(params.teamId, params.retroId));
  return data;
}

export async function updateRetroTitle(params: types.UpdateRetroTitleParams, payload: types.UpdateRetroTitlePayload) {
  const { data } = await api.put(URLS.UPDATE_RETRO_TITLE(params.teamId, params.retroId), payload);
  return data;
}

export async function readRetroProblemList(params: types.ReadRetroProblemListParams) {
  const { data } = await api.get<types.ReadRetroProblemListResponse>(
    URLS.READ_RETRO_PROBLEM_LIST(params.retroId, params.kanbanStatus),
  );
  return data;
}

export async function createRetroProblem(
  params: types.CreateRetroProblemParams,
  payload: types.CreateRetroProblemPayload,
) {
  const { data } = await api.post<types.CreateRetroProblemResponse>(URLS.CREATE_RETRO_PROBLEM(params.retroId), payload);
  return data;
}

export async function deleteRetroProblem(params: types.DeleteRetroProblemParams) {
  const { data } = await api.delete(URLS.DELETE_RETRO_PROBLEM(params.retroId, params.problemId));
  return data;
}

export async function updateRetroProblemOrder(
  params: types.UpdateRetroProblemOrderParams,
  payload: types.UpdateRetroProblemOrderPayload,
) {
  const { data } = await api.put(URLS.UPDATE_RETRO_PROBLEM_ORDER(params.retroId, params.problemId), payload);
  return data;
}

export async function updateRetroProblem(
  params: types.UpdateRetroProblemParams,
  payload: types.UpdateRetroProblemPayload,
) {
  const { data } = await api.put(URLS.UPDATE_RETRO_PROBLEM(params.retroId, params.problemId), payload);
  return data;
}

export async function readRetroProblemDetail(params: types.ReadRetroProblemDetailParams) {
  const { data } = await api.get<types.ReadRetroProblemDetailResponse>(
    URLS.READ_RETRO_PROBLEM_DETAIL(params.retroId, params.problemId),
  );
  return data;
}

export async function readRetroMemberList(params: types.ReadRetroMemberListParams) {
  const { data } = await api.get<types.ReadRetroMemberListResponse>(
    URLS.READ_RETRO_MEMBER_LIST(params.teamId, params.retroId),
  );
  return data;
}

export async function createRetroMember(
  params: types.CreateRetroMemberParams,
  payload: types.CreateRetroMemberPayload,
) {
  const { data } = await api.post(URLS.CREATE_RETRO_MEMBER(params.teamId, params.retroId), payload);
  return data;
}

export async function deleteRetroMember(
  params: types.DeleteRetroMemberParams,
  payload: types.DeleteRetroMemberPayload,
) {
  const { data } = await api.delete(URLS.DELETE_RETRO_MEMBER(params.teamId, params.retroId), {
    data: payload,
  });
  return data;
}

export async function updateRetroProblemStatus(
  params: types.UpdateRetroProblemStatusParams,
  payload: types.UpdateRetroProblemStatusPayload,
) {
  const { data } = await api.patch(URLS.UPDATE_RETRO_PROBLEM_STATUS(params.retroId, params.problemId), payload);
  return data;
}

export async function updateRetroProblemCompletedAt(
  params: types.UpdateRetroProblemCompletedAtParams,
  payload: types.UpdateRetroProblemCompletedAtPayload,
) {
  const { data } = await api.patch(URLS.UPDATE_RETRO_PROBLEM_COMPLETED_AT(params.retroId, params.problemId), payload);
  return data;
}

export async function updateRetroDate(params: types.UpdateRetroDateParams, payload: types.UpdateRetroDatePayload) {
  const { data } = await api.patch(URLS.UPDATE_RETRO_DATE(params.teamId, params.retroId), payload);
  return data;
}

export async function createRetroSolution(
  params: types.CreateRetroSolutionParams,
  payload: types.CreateRetroSolutionPayload,
) {
  const { data } = await api.post<types.CreateRetroSolutionResponse>(
    URLS.CREATE_RETRO_SOLUTION(params.retroId, params.problemId),
    payload,
  );
  return data;
}

export async function updateRetroSolution(
  params: types.UpdateRetroSolutionParams,
  payload: types.UpdateRetroSolutionPayload,
) {
  const { data } = await api.put(
    URLS.UPDATE_RETRO_SOLUTION(params.retroId, params.problemId, params.solutionId),
    payload,
  );
  return data;
}

export async function deleteRetroSolution(params: types.DeleteRetroSolutionParams) {
  const { data } = await api.delete(URLS.DELETE_RETRO_SOLUTION(params.retroId, params.problemId, params.solutionId));
  return data;
}

export async function readRetroSolutionList(params: types.ReadRetroSolutionListParams) {
  const { data } = await api.get<types.ReadRetroSolutionListResponse>(
    URLS.READ_RETRO_SOLUTION_LIST(params.retroId, params.problemId),
  );
  return data;
}

export async function readRetroSolutionDetail(params: types.ReadRetroSolutionDetailParams) {
  const { data } = await api.get<types.ReadRetroSolutionDetailResponse>(
    URLS.READ_RETRO_SOLUTION_DETAIL(params.retroId, params.problemId, params.solutionId),
  );
  return data;
}

export async function readOnlineMemberList(params: types.ReadOnlineMemberListParams) {
  const { data } = await api.get<types.ReadOnlineMemberListResponse>(URLS.READ_ONLINE_MEMBER_LIST(params.retroId));
  return data;
}

export async function readRetroProblemRole(params: types.ReadRetroProblemRoleParams) {
  const { data } = await api.get<types.ReadRetroProblemRoleResponse>(
    URLS.READ_RETRO_PROBLEM_ROLE(params.retroId, params.problemId),
  );
  return data;
}

export async function createRetroProblemRole(
  params: types.AddRetroProblemRoleParams,
  payload: types.CreateRetroProblemRolePayload,
) {
  const { data } = await api.post(URLS.CREATE_RETRO_PROBLEM_ROLE(params.retroId, params.problemId), payload);
  return data;
}
export async function deleteRetroProblemRole(
  params: types.DeleteRetroProblemRoleParams,
  payload: types.DeleteRetroProblemRolePayload,
) {
  const { data } = await api.delete(URLS.DELETE_RETRO_PROBLEM_ROLE(params.retroId, params.problemId), {
    data: payload,
  });
  return data;
}
