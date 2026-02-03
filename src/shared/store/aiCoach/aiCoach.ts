import { create } from 'zustand';

interface AiCoachState {
  generatingSolutionIds: Record<string, boolean>;
  setGenerating: (solutionId: string | number, isGenerating: boolean) => void;
  clearGenerating: (solutionId: string | number) => void;
  reset: () => void;
}

const useAiCoachStore = create<AiCoachState>((set) => ({
  generatingSolutionIds: {},
  setGenerating: (solutionId, isGenerating) =>
    set((state) => ({
      generatingSolutionIds: {
        ...state.generatingSolutionIds,
        [String(solutionId)]: isGenerating,
      },
    })),
  clearGenerating: (solutionId) =>
    set((state) => {
      const next = { ...state.generatingSolutionIds };
      delete next[String(solutionId)];
      return { generatingSolutionIds: next };
    }),
  reset: () => set({ generatingSolutionIds: {} }),
}));

export default useAiCoachStore;
