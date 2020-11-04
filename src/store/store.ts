import { Action, action, createStore } from "easy-peasy";

export interface ProgressModel {
  progress: number;
  setProgress: Action<ProgressModel, number>;
}

export interface StoreModel extends ProgressModel {}

export const store = createStore<StoreModel>({
  progress: 40,
  setProgress: action((state, progress) => {
    state.progress = progress;
  }),
});
