import { Action, action, createStore } from "easy-peasy";

export interface ProgressModel {
  progress: number;
  setProgress: Action<ProgressModel, number>;
}

export interface ApplicationModel {
  country: string;
  passYearsAgo: string;
  haveUKLicense: boolean;
  ukLicencePeriod: string;
  setForm: Action<ApplicationModel, any>;
}

export interface StoreModel extends ProgressModel , ApplicationModel{}

export const store = createStore<StoreModel>({
  progress: 40,
  country: '',
  passYearsAgo: "0-1",
  haveUKLicense: false,
  ukLicencePeriod: "",
  setForm: action((state, payload) => {
      state.country = payload.country ? payload.country : state.country;
      state.haveUKLicense = payload.haveUKLicense ? payload.haveUKLicense : state.haveUKLicense;
      state.passYearsAgo = payload.passYearsAgo ? payload.passYearsAgo : state.passYearsAgo;
      state.ukLicencePeriod= payload.ukLicencePeriod ? payload.ukLicencePeriod : state.ukLicencePeriod;
  }),
  setProgress: action((state, progress) => {
    state.progress = progress;
  }),
});
