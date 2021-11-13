#!/usr/bin/env node
import deepmerge from 'deepmerge';
declare const MODULES: {
    typography: {
        scale: {
            '000': string;
            '00': string;
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            '10': string;
        };
        font: {
            sans: string;
            serif: string;
            mono: string;
            light: string;
            regular: string;
            medium: string;
            semibold: string;
            bold: string;
            extrabold: string;
            black: string;
        };
        line: {
            none: number;
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
        letter: {
            xs: string;
            sm: string;
            none: string;
            lg: string;
            xl: string;
        };
        prose: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    layout: {
        size: {
            px: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            14: string;
            16: string;
            20: string;
            24: string;
            28: string;
            32: string;
            36: string;
            40: string;
            44: string;
            48: string;
            52: string;
            56: string;
            60: string;
            64: string;
            72: string;
            80: string;
            96: string;
            full: string;
            screen: string;
            min: string;
            max: string;
        };
        width: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    ui: {
        radius: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            100: string;
            full: string;
        };
        blur: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        layer: {
            below: number;
            1: number;
            2: number;
            3: number;
            4: number;
            5: number;
            top: number;
        };
        elevation: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        easing: {
            standard: string;
            accelerate: string;
            decelerate: string;
        };
    };
    colors: {
        color: {
            black: string;
            grey100: string;
            grey300: string;
            grey500: string;
            grey700: string;
            grey: string;
            red300: string;
            red500: string;
            red700: string;
            red: string;
            green300: string;
            green500: string;
            green700: string;
            green: string;
            blue300: string;
            blue500: string;
            blue700: string;
            blue: string;
            pink300: string;
            pink500: string;
            pink700: string;
            pink: string;
            purple300: string;
            purple500: string;
            purple700: string;
            purple: string;
            teal300: string;
            teal500: string;
            teal700: string;
            teal: string;
            indigo300: string;
            indigo500: string;
            indigo700: string;
            indigo: string;
            yellow300: string;
            yellow500: string;
            yellow700: string;
            yellow: string;
            orange300: string;
            orange500: string;
            orange700: string;
            orange: string;
            brown300: string;
            brown500: string;
            brown700: string;
            brown: string;
        };
    };
    grid: {
        grid: {
            pageWidth: string;
            pageGutter: string;
            pageMain: string;
            page: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
        };
    };
    custom: {};
};
type ModuleName = keyof typeof MODULES;
type Module = {
    [key: string]: {
        [key: string | number]: string | number;
    };
};
type Config = (pollen: typeof MODULES, merge: typeof deepmerge) => {
    output?: string;
    modules: {
        [module in ModuleName]: Module;
    };
};
export { Config };
