import React from "react";

interface Props{
  className?:string;
}

const PaginationLastpage: React.FC<Props> = ({className}) => {
  return(<>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M6.30002 17.3C6.11669 17.1167 6.02502 16.8833 6.02502 16.6C6.02502 16.3167 6.11669 16.0833 6.30002 15.9L10.2 12L6.30002 8.1C6.11669 7.91667 6.02502 7.68333 6.02502 7.4C6.02502 7.11667 6.11669 6.88333 6.30002 6.7C6.48336 6.51667 6.71669 6.425 7.00002 6.425C7.28336 6.425 7.51669 6.51667 7.70002 6.7L12.3 11.3C12.4 11.4 12.471 11.5083 12.513 11.625C12.5544 11.7417 12.575 11.8667 12.575 12C12.575 12.1333 12.5544 12.2583 12.513 12.375C12.471 12.4917 12.4 12.6 12.3 12.7L7.70002 17.3C7.51669 17.4833 7.28336 17.575 7.00002 17.575C6.71669 17.575 6.48336 17.4833 6.30002 17.3ZM17 18C16.7167 18 16.4794 17.904 16.288 17.712C16.096 17.5207 16 17.2833 16 17V7C16 6.71667 16.096 6.479 16.288 6.287C16.4794 6.09567 16.7167 6 17 6C17.2834 6 17.5207 6.09567 17.712 6.287C17.904 6.479 18 6.71667 18 7V17C18 17.2833 17.904 17.5207 17.712 17.712C17.5207 17.904 17.2834 18 17 18Z" />
    </svg>
 </>)
}

export default PaginationLastpage;