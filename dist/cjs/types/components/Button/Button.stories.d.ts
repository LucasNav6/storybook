import React from 'react';
import { ButtonProps } from './Button';
declare const _default: {
    title: string;
    component: React.FC<ButtonProps>;
    argTypes: {
        color: {
            control: string;
            options: string[];
        };
        type: {
            control: string;
            options: string[];
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
        };
        isDisabled: {
            control: string;
        };
        iconPosition: {
            control: string;
            options: string[];
        };
        onClick: {
            action: string;
        };
    };
};
export default _default;
export declare const Primary: (args: ButtonProps) => React.JSX.Element;
export declare const Secondary: (args: ButtonProps) => React.JSX.Element;
export declare const WithIcon: (args: ButtonProps) => React.JSX.Element;
export declare const Disabled: (args: ButtonProps) => React.JSX.Element;
export declare const Stretched: (args: ButtonProps) => React.JSX.Element;
