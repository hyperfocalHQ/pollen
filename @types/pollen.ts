import modules from '../src/modules';
type ModuleName = keyof typeof modules;

export type PollenModule = {
  [module in ModuleName]: { [key: string]: string | number };
};

export type ConfigObject = {
  output?:
    | string
    | {
        css?: string;
        json?: string;
      };
  selector?: string;
  modules: PollenModule;
};

export type Config = ConfigObject | ((pollen: typeof modules) => ConfigObject);
