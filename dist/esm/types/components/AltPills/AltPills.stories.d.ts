import { AltPillsProps } from './AltPills';
import React from 'react';
declare const _default: {
    title: string;
    component: React.FC<AltPillsProps>;
    argTypes: {
        color: {
            control: string;
            options: string[];
        };
        selected: {
            control: string;
        };
        options: {
            argTypes: {
                label: {
                    control: string;
                };
                value: {
                    control: string;
                };
                onClick: {
                    action: string;
                };
            };
        };
    };
};
export default _default;
export declare const Primary: (args: AltPillsProps) => React.JSX.Element;
export declare const Secondary: (args: AltPillsProps) => React.JSX.Element;
export declare const Accent: (args: AltPillsProps) => React.JSX.Element;
export declare const PrimaryMinor: (args: AltPillsProps) => React.JSX.Element;
export declare const SecondaryMinor: (args: AltPillsProps) => React.JSX.Element;
export declare const AccentMinor: (args: AltPillsProps) => React.JSX.Element;
export declare const DisabledPill: (args: AltPillsProps) => React.JSX.Element;
