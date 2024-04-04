import React from 'react';
export interface PillProps {
    label: string;
    value: string;
    onClick?: (value?: string) => void;
    setIdSelected?: (value: string) => void;
    color?: 'primary' | 'secondary' | 'accent' | 'primary_minor' | 'secondary_minor' | 'accent_minor';
    isDisabled?: boolean;
}
export interface AltPillsProps {
    options: PillProps[];
    color?: 'primary' | 'secondary' | 'accent' | 'primary_minor' | 'secondary_minor' | 'accent_minor';
    selected?: string;
}
declare const AltPills: React.FC<AltPillsProps>;
export default AltPills;
