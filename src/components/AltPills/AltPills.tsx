import React, { useState } from 'react';
import styles from './altpills.module.scss';

export interface PillProps {
  label: string;
  value: string;
  onClick?: (value?:string) => void;
  setIdSelected?: (value:string) => void;
  color?: 'primary' | 'secondary' | 'accent' |  'primary_minor' | 'secondary_minor' | 'accent_minor' ;
  isDisabled?: boolean;
}

export interface AltPillsProps {
  options: PillProps[];
  color?: 'primary' | 'secondary' | 'accent' |  'primary_minor' | 'secondary_minor' | 'accent_minor' ;
  selected?: string;
}



const PillUnselected: React.FC<PillProps> = ({ label, onClick,value,setIdSelected,isDisabled}) => {

  const clickhandler = () => {
    onClick? onClick(value):null;
    setIdSelected?setIdSelected(value):null;
  }

  const handleDivKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && isDisabled === false){
      e.preventDefault();
      clickhandler();
    }
  };

  return (
    <div className={`${styles.interactive_layer}`} onKeyDown={handleDivKeyDown} onClick={clickhandler} tabIndex={isDisabled?-1:0}>
      <button disabled={isDisabled}  aria-label="Cerrar" className={styles.main_container} tabIndex={-1}>
      <p className={styles.text_container}>{label}</p>
      </button>
    </div>
  );
};

const PillSelected: React.FC<PillProps> = ({ label, color}) => {
  const containerClass = ` ${styles.selected_main_container} ${ styles[ color || 'primary']}`;

  return (
    <div className={styles.interactive_layer}>
      <button className={containerClass} tabIndex={-1}>
      <p className={styles.selected_text_container}>{label}</p>
      </button>
    </div>
  );
};

 const AltPills: React.FC<AltPillsProps> = ({ options,color,selected }) => {
  const [idSelected, setIdSelected] = useState<string>(selected?selected:options[0].value);
  return (
    <div className={styles.pill_container}>
      {options.map((props: PillProps) => (
        props.value !== idSelected? <PillUnselected key={props.value} isDisabled={props.isDisabled} label={props.label} onClick={props.onClick} setIdSelected={setIdSelected} value={props.value} />
        : <PillSelected key={props.value} label={props.label} value={props.value} color={color} />
      ))}
    </div>
  );
};

export default AltPills;