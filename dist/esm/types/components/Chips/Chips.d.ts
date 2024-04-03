import React from "react";
export interface ChipProps {
    label: string;
    icon?: JSX.Element;
    onClose?: () => void;
    type?: 'outline' | 'filled';
    color?: "primary" | "secondary" | "accent" | "primary_minor" | "secondary_minor" | "accent_minor" | "bad" | "good" | "beware" | "bad_minor" | "good_minor" | "beware_minor";
    size?: "small" | "large";
    isDisabled?: boolean;
}
declare const Chips: React.FC<ChipProps>;
export default Chips;
