import { common, IEnvironment } from './environment.common';

export const environment: IEnvironment = {
  ...common,
  production: true,
  enableLogging: false
};
