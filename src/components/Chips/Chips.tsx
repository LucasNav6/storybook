import React from "react";
import styles from "./Chip.module.scss";
import CloseSmall from "../Icons/CloseSmall";

export interface ChipProps {
  label: string;
  icon?: JSX.Element;
  onClose?: () => void;
  type?: 'outline' | 'filled';
  color?: "primary" | "secondary" | "accent" | "primary_minor" | "secondary_minor" | "accent_minor"
  | "bad" | "good" | "beware" | "bad_minor" | "good_minor" | "beware_minor";
  size?: "small" | "large";
  isDisabled?: boolean;
}

const Chips: React.FC<ChipProps> = ({ label, icon, onClose,type, color, size='small',isDisabled }) => {
  return (
    <div className={styles.interactive_layer}>
      <div className={`${styles.main_container} ${styles[size]} ${styles[type+'_'+color]} ${isDisabled?styles[type+'_disabled']:''} `}>
        <div className={styles.state_layer}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {label}
          <button onClick={onClose} className={styles.close_button}>
          <CloseSmall />
          </button>
        </div>
      </div>
    </div>
  );
};


export default Chips;