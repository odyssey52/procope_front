import { create } from 'zustand';
import { ReadTeamDetailResponse } from '@/features/team/services/teamService.type';

interface TeamState {
  teamInfo: ReadTeamDetailResponse | null;
  setTeamInfo: (team: ReadTeamDetailResponse | null) => void;
  resetTeamInfo: () => void;
}

const useTeamStore = create<TeamState>((set) => ({
  teamInfo: null,
  setTeamInfo: (team) => set({ teamInfo: team }),
  resetTeamInfo: () => set({ teamInfo: null }),
}));

export default useTeamStore;
