import React from "react";

interface Props{
  className?:string;
}

const ExpandLess: React.FC<Props> = ({className}) => {
  return(<>
 <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg>
  </>)
}

export default ExpandLess;


