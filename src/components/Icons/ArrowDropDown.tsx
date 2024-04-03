import React from "react";

interface Props{
  className?:string;
}

const ArrowDropDown: React.FC<Props> = ({className}) => {
  return(<>
 <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z"/></svg>
   </>)
}

export default ArrowDropDown;