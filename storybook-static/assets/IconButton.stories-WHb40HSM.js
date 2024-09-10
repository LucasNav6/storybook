import{R as e}from"./index-BBkUAzwr.js";import{A as $,I as k,P as w,a as B}from"./Add-Cb00Dym6.js";import{S as O}from"./SystemUpdateAlt-cpoblfa8.js";const C="_interactive_layer_1d3x8_6",D="_main_container_1d3x8_21",U="_state_layer_1d3x8_55",H="_filled_1d3x8_60",V="_primary_1d3x8_64",j="_selected_1d3x8_67",z="_secondary_1d3x8_75",F="_accent_1d3x8_86",G="_disabled_1d3x8_97",J="_outline_1d3x8_101",K="_standard_1d3x8_119",L="_img_icon_button_1d3x8_149",a={interactive_layer:C,main_container:D,state_layer:U,filled:H,primary:V,selected:j,secondary:z,accent:F,disabled:G,outline:J,standard:K,img_icon_button:L},A=({isDisabled:c,color:I,type:P,children:T,selected:N=!1,onClick:l})=>{const q=()=>{!c&&l&&l()},R=`${a.main_container} ${a[I]} ${N?a.selected:""} ${a[P]}${c?` ${a.disabled}`:""}`;return e.createElement("div",{className:a.interactive_layer,onClick:q,tabIndex:0},e.createElement("button",{className:R,disabled:c,tabIndex:-1},e.createElement("div",{className:a.state_layer},e.createElement("div",{className:a.img_icon_button},T))))};A.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'standard' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'outline'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const X={title:"BETA/IconButton",component:A,argTypes:{color:{control:"select",options:["primary","secondary","accent"]},type:{control:"select",options:["filled","standard","outline"]},isDisabled:{control:"boolean"},selected:{control:"boolean"}}},r={args:{color:"primary",type:"filled",children:e.createElement($,null),isDisabled:!1,selected:!0}},t={args:{...r.args,children:e.createElement(O,null),color:"secondary"}},n={args:{...r.args,color:"accent",children:e.createElement(k,null)}},s={args:{...r.args,children:e.createElement(w,null),type:"standard"}},o={args:{...r.args,children:e.createElement(B,null),type:"outline"}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    type: 'filled',
    children: <Add />,
    isDisabled: false,
    selected: true
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,_;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <SystemUploadAlt />,
    color: 'secondary'
  }
}`,...(_=(p=t.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var y,g,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'accent',
    children: <Inbox />
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,x,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Package />,
    type: 'standard'
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,S,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Alarm />,
    type: 'outline'
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const Y=["Primary","Secondary","Accent","Standart","Outline"];export{n as Accent,o as Outline,r as Primary,t as Secondary,s as Standart,Y as __namedExportsOrder,X as default};
