import React from "react";

interface Props{
  className?:string;
}

const Bidlandscape: React.FC<Props> = ({className}) => {
  return(<>
 <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-162v82h560v-350L522-280 360-442 200-282Zm0-114 160-160 158 158 242-272v-90H200v364Zm0-154v-120 272-158 274-160 162-270Zm0 154v-364 362-158 160Zm0 114v-160 162-270 350-82Z"/></svg>
  </>)
}

export default Bidlandscape;