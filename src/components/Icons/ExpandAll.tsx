import React from "react";

interface Props{
  className?:string;
}

const ExpandAll: React.FC<Props> = ({className}) => {
  return(<>
 <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z"/></svg>
  </>)
}

export default ExpandAll;


