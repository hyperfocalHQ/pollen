import modules from './modules';
export type ModuleName = keyof typeof modules;

export type PollenModule = {
  [module in ModuleName]: { [key: string]: string | number };
};

export type ConfigObject = {
  output?: string;
  modules: PollenModule;
};

export type Config = ConfigObject | ((pollen: typeof modules) => ConfigObject);
