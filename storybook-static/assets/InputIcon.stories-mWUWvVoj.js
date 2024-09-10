import{R as r}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as U}from"./HelpText-KFYY5z56.js";import{I as X,P as Y}from"./Add-Cb00Dym6.js";import"./DoNotDisturbOn-BtRVzf3j.js";import"./ArrowDropDown-Lzn461cu.js";import"./CalendarToday-D2twFid9.js";import"./Call-mLENxhpc.js";import"./Check-D9fbp2E2.js";import"./Tune-Dir6NTGF.js";import"./CloseSmall-C_9n5bZc.js";import"./ExpandAll-D0MBGcr9.js";import"./Numbers123-DC0bOlqZ.js";import"./Schedule-BarX4b96.js";import"./Search-BMS2udMd.js";import"./SystemUpdateAlt-cpoblfa8.js";import"./VisibilityON-Bqi7Y-dO.js";const z=({color:m,required:A,helptext:h,type:J,placeholder:u="",value:g,onChange:f,isDisabled:a,label:b,name:y,id:M,iconRight:x,iconLeft:I})=>{const Q=n=>{n.key==="Enter"&&n.preventDefault()};return r.createElement(r.Fragment,null,r.createElement("div",{className:`${e.interactive_layer} ${a?e.disabled:""}`},r.createElement("div",{className:e.label_container},r.createElement("label",{className:`${e.label} ${b!==u||g!==void 0?e["label-appear"]:""}`,htmlFor:y},b!==u||g!==void 0?b:""),A?r.createElement("span",{className:e.required},"*"):null),r.createElement("div",{className:`${e.state_layer} ${e[J]} ${m?e[m]:""} ${a?e.disabled:""}`,onKeyDown:n=>Q(n),tabIndex:0},I?r.createElement("div",{className:`${e.icon} ${a?e.disabled:""}`},I):null,r.createElement("input",{className:`${e.input} ${e.text}`,type:"text",placeholder:u,value:g,onChange:a?void 0:n=>f&&f(n.target.value),disabled:a,name:y,id:M}),x?r.createElement("div",{className:`${e.icon} ${a?e.disabled:""}`},x):null),r.createElement("div",{className:e.helptext},h?r.createElement(U,{text:h,color:m}):null)))};z.__docgenInfo={description:"",methods:[],displayName:"InputIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const he={title:"Beta/InputIcon",component:z,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},iconRight:{control:"none"},iconLeft:{control:"none"},helptext:{control:"text"},required:{control:"boolean"}}},t={args:{type:"filled",placeholder:"Enter something...",label:"Filled Input",iconLeft:r.createElement(X,null),iconRight:r.createElement(Y,null)}},s={args:{...t.args,type:"outline",label:"Outline Input"}},o={args:{...t.args,isDisabled:!0,label:"Disabled Input"}},l={args:{...t.args,helptext:"This is helpful text.",label:"Input with Help Text"}},i={args:{...t.args,color:"good",helptext:"Good choice!"}},c={args:{...t.args,color:"beware",helptext:"Double-check this."}},p={args:{...t.args,color:"bad",helptext:"Something went wrong."}},d={args:{...t.args,required:!0,label:"Required Input"}};var q,v,w;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'Enter something...',
    label: 'Filled Input',
    iconLeft: <Inbox />,
    iconRight: <Package />
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var T,E,R;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Input'
  }
}`,...(R=(E=s.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var N,$,F;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Input'
  }
}`,...(F=($=o.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var S,D,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'This is helpful text.',
    label: 'Input with Help Text'
  }
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var H,k,B;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Good choice!'
  }
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var O,G,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Double-check this.'
  }
}`,...(L=(G=c.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var P,K,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Something went wrong.'
  }
}`,...(W=(K=p.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var C,V,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Input'
  }
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const fe=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{p as Bad,c as Beware,o as Disabled,t as Filled,i as Good,s as Outline,d as Required,l as WithHelpText,fe as __namedExportsOrder,he as default};
