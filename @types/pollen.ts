import modules from '../src/modules';
type ModuleName = keyof typeof modules;

export type CustomModule = {
  [rule: string]: { [key: string]: string | number };
};

export type PollenModule = {
  [module in ModuleName]: { [key: string]: string | number };
};

export type Query = {
  [query: string]: PollenModule & CustomModule;
};

export type ConfigObject = {
  output?:
    | string
    | {
        css?: string;
        json?: string;
      };
  selector?: string;
  modules: PollenModule & CustomModule;
  media?: Query;
  supports?: Query;
};

export type Config = ConfigObject | ((pollen: typeof modules) => ConfigObject);
