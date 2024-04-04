import React from 'react';
import { ChipProps } from './Chips';
declare const _default: {
    title: string;
    component: React.FC<ChipProps>;
    argTypes: {
        type: {
            control: string;
            options: string[];
        };
        color: {
            control: string;
            options: string[];
        };
        size: {
            control: string;
            options: string[];
        };
        isDisabled: {
            control: string;
        };
    };
};
export default _default;
export declare const FilledSmall: (args: ChipProps) => React.JSX.Element;
export declare const OutlineSmall: (args: ChipProps) => React.JSX.Element;
export declare const FilledLarge: (args: ChipProps) => React.JSX.Element;
export declare const OutlineLarge: (args: ChipProps) => React.JSX.Element;
