import React, { ReactNode } from 'react';
export interface ButtonProps {
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
export default Button;
