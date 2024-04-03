import React from "react";

interface Props{
  className?:string;
}

const CloseSmall: React.FC<Props> = ({className}) => {
  return(<>
 <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>
   </>)
}

export default CloseSmall;