import React from "react";
import styles from './button.module.scss';

export interface ButtonProps{
    label: string;

}

const Button = ( {label}: ButtonProps) => {
    return <button className={styles.btn} >{label}</button>
}

export default Button;
