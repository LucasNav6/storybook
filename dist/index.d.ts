import React, { ReactNode } from 'react';

interface ButtonProps {
    text: string;
    color: 'default' | 'primary' | 'secondary' | 'accent' | 'primary_minor' | 'secondary_minor' | 'accent_minor' | 'bad' | 'good' | 'beware' | 'bad_minor' | 'good_minor' | 'beware_minor';
    type: 'filled' | 'outline' | 'text';
    size?: 'stretched';
    isDisabled?: boolean;
    onClick: () => void;
    children?: ReactNode;
    iconPosition?: 'left' | 'right';
}
declare const Button: React.FC<ButtonProps>;

interface ChipProps {
    label: string;
    icon?: JSX.Element;
    onClose?: () => void;
    type?: 'outline' | 'filled';
    color?: "primary" | "secondary" | "accent" | "primary_minor" | "secondary_minor" | "accent_minor" | "bad" | "good" | "beware" | "bad_minor" | "good_minor" | "beware_minor";
    size?: "small" | "large";
    isDisabled?: boolean;
}
declare const Chips: React.FC<ChipProps>;

interface PillProps {
    label: string;
    value: string;
    onClick?: (value?: string) => void;
    setIdSelected?: (value: string) => void;
    color?: 'primary' | 'secondary' | 'accent' | 'primary_minor' | 'secondary_minor' | 'accent_minor';
    isDisabled?: boolean;
}
interface AltPillsProps {
    options: PillProps[];
    color?: 'primary' | 'secondary' | 'accent' | 'primary_minor' | 'secondary_minor' | 'accent_minor';
    selected?: string;
}
declare const AltPills: React.FC<AltPillsProps>;

export { AltPills, Button, Chips };
