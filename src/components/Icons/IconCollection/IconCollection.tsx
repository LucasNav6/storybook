import React from 'react';

import Alarm from '../Alarm';
import ArrowBack from '../ArrowBack';
import ArrowForward from '../ArrowForward';
import Bidlandscape from '../BidLandscape';
import CalendarToday from '../CalendarToday';
import ChatBubble from '../ChatBubble';
import Description from '../Description';
import ExpandLess from '../ExpandLess';
import ExpandMore from '../ExpandMore';
import FolderOpen from '../FolderOpen';
import Help from '../Help';
import Home from '../Home';
import Inbox from '../Inbox';
import Logout from '../Logout';
import Package from '../Package';
import Settings from '../Settings';
import AddCircle from '../AddCircle';
import AlternateEmail from '../AlternateEmail';
import ArrowDropDown from '../ArrowDropDown';
import Call from '../Call';
import CloseSmall from '../CloseSmall';
import DoNotDisturbOn from '../DoNotDisturbOn';
import Numbers123 from '../Numbers123';
import Schedule from '../Schedule';
import Search from '../Search';
import VisibilityOFF from '../VisibilityOFF';
import VisibilityON from '../VisibilityON';


interface Props{
  className?:string;
  name:string;
}

export const IconCollection: React.FC<Props> = ({className,name}) => {

  //ace lo que esta entre los return pero en un objeto para buscarlo por el nombre
  const icons = {
    'Alarm':Alarm,
    'ArrowBack':ArrowBack,
    'ArrowForward':ArrowForward,
    'BidLandscape':Bidlandscape,
    'CalendarToday':CalendarToday,
    'ChatBubble':ChatBubble,
    'Description':Description,
    'ExpandLess':ExpandLess,
    'ExpandMore':ExpandMore,
    'FolderOpen':FolderOpen,
    'Help':Help,
    'Home':Home,
    'Inbox':Inbox,
    'Logout':Logout,
    'Package':Package,
    'Settings':Settings,
    'AddCircle':AddCircle,
    'AlternateEmail':AlternateEmail,
    'ArrowDropDown':ArrowDropDown,
    'Call':Call,
    'CloseSmall':CloseSmall,
    'DoNotDisturbOn':DoNotDisturbOn,
    'Numbers123':Numbers123,
    'Schedule':Schedule,
    'Search':Search,
    'VisibilityOFF':VisibilityOFF,
    'VisibilityON':VisibilityON
  }

  return(<>
    {icons[name]({className:className})}
  </>)
}
