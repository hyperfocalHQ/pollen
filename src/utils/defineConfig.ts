import type { Config, ConfigObject } from '../../@types/pollen';
import modules from '../modules';

/**
 * Configuration helper to provide typescript support
 */
export function defineConfig(config: Config): ConfigObject {
  return typeof config === 'function' ? config(modules) : config;
}
