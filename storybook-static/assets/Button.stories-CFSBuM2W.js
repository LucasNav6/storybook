import{R as b}from"./index-BBkUAzwr.js";import{B as k}from"./Button-yh1k76xc.js";import{S as C}from"./SystemUpdateAlt-cpoblfa8.js";import{f as e}from"./index-2ywIqtt-.js";const I={title:"Beta/Button",component:k,argTypes:{color:{control:"select",options:["default","primary","secondary","accent","primary_minor","secondary_minor","accent_minor","bad","good","beware","bad_minor","good_minor","beware_minor"]},type:{control:"select",options:["filled","outline","text"]},size:{control:{type:"radio"},options:["none","stretched"]},isDisabled:{control:"boolean"},children:{control:"none"},iconPosition:{control:"select",options:["left","right"]},onClick:e()}},o={args:{text:"Primary Button",color:"primary",type:"filled",onClick:e()}},t={args:{text:"Secondary Button",color:"secondary",type:"outline",onClick:e()}},r={args:{text:"Button with Icon",color:"accent",type:"filled",children:b.createElement(C,null),iconPosition:"left",onClick:e()}},n={args:{text:"Disabled Button",color:"default",type:"filled",isDisabled:!0,onClick:e()}},a={args:{text:"Stretched Button",color:"good",type:"filled",size:"stretched",onClick:e()}};var c,s,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    color: 'primary',
    type: 'filled',
    onClick: fn()
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    color: 'secondary',
    type: 'outline',
    onClick: fn()
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Button with Icon',
    color: 'accent',
    type: 'filled',
    children: <SystemUploadAlt />,
    iconPosition: 'left',
    onClick: fn()
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,g,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Disabled Button',
    color: 'default',
    type: 'filled',
    isDisabled: true,
    onClick: fn()
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var h,B,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'Stretched Button',
    color: 'good',
    type: 'filled',
    size: 'stretched',
    onClick: fn()
  }
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const z=["Primary","Secondary","WithIcon","Disabled","Stretched"];export{n as Disabled,o as Primary,t as Secondary,a as Stretched,r as WithIcon,z as __namedExportsOrder,I as default};
