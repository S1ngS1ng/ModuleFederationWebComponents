export interface Registry {
  'angular-module': () => Promise<unknown>;
  'react-module': () => Promise<unknown>;
  'angularjs-module': () => Promise<unknown>;
}

export const registry: Registry = {
  'angular-module': () => import('angular-module/Module'),
  'react-module': () => import('react-module/Module'),
  'angularjs-module': () => import('angularjs-module/Module'),
};
