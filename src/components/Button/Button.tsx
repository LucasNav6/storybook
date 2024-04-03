import React, {ReactNode} from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
  text: string; 
  color: 'default' | 'primary' | 'secondary' | 'accent' |  'primary_minor' | 'secondary_minor' | 'accent_minor' 
  | 'bad' | 'good' | 'beware' | 'bad_minor' | 'good_minor' | 'beware_minor' ;
  type: 'filled' | 'outline' | 'text';
  size?:'stretched';
  isDisabled?: boolean;
  onClick: () => void;
  children?: ReactNode;
  iconPosition?:'left'|'right';
}

const Button: React.FC<ButtonProps> = ({size = '',text,type, color, isDisabled, onClick ,children, iconPosition='left'}) => {
  const buttonClassName = `${styles.main_container}  ${styles[type+"_"+color]}  ${styles[type]}`;

  const handleDivKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter'){
      e.preventDefault();
      onClick();
    }
  };

  return (<div className={`${styles.interactive_layer} ${styles[size]}`} onClick={onClick} onKeyDown={handleDivKeyDown} tabIndex={0}>
      <button className={buttonClassName} disabled={isDisabled} tabIndex={-1}>
        <div className={styles.state_layer}>
          {iconPosition==='left'?children:null}
          <p className={styles.text_container}>{text}</p>
          {iconPosition==='right'?children:null}
        </div>
      </button>
    </div>);
};

export default Button;
