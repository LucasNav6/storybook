import{R as r}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as M}from"./HelpText-KFYY5z56.js";import{C as Q}from"./Call-mLENxhpc.js";const V=({color:t,required:j,helptext:h,type:z,placeholder:m="",value:g,onChange:y,isDisabled:s,label:b,name:v,id:J})=>{const L=n=>{n.key==="Enter"&&n.preventDefault()};return r.createElement(r.Fragment,null,r.createElement("div",{className:`${e.interactive_layer} ${s?e.disabled:""}`},r.createElement("div",{className:e.label_container},r.createElement("label",{className:`${e.label} ${b!==m||g!==void 0?e["label-appear"]:""}`,htmlFor:v},b!==m||g!==void 0?b:""),j?r.createElement("span",{className:e.required},"*"):null),r.createElement("div",{className:`${e.state_layer} ${e[z]} ${t?e[t]:""} ${s?e.disabled:""}`,onKeyDown:n=>L(n),tabIndex:0},r.createElement("div",{className:`${e.icon} ${s?e.disabled:""}`},r.createElement(Q,null)),r.createElement("input",{className:`${e.input} ${e.tel}`,type:"tel",placeholder:m,value:g,onChange:s?void 0:n=>y&&y(n.target.value),disabled:s,name:v,id:J})),r.createElement("div",{className:e.helptext},h?r.createElement(M,{text:h,color:t}):null)))};V.__docgenInfo={description:"",methods:[],displayName:"InputPhone",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const ee={title:"Beta/InputPhone",component:V,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{type:"filled",placeholder:"Enter your phone number...",label:"Phone Number",onChange:t=>console.log(t)}},o={args:{...a.args,type:"outline",label:"Outline Phone Number"}},l={args:{...a.args,isDisabled:!0,label:"Disabled Phone Number"}},i={args:{...a.args,helptext:"Please enter a valid phone number.",label:"Phone Number with Help Text"}},d={args:{...a.args,color:"good",helptext:"Phone number looks good!"}},u={args:{...a.args,color:"beware",helptext:"Are you sure about this number?"}},c={args:{...a.args,color:"bad",helptext:"Invalid phone number."}},p={args:{...a.args,required:!0,label:"Required Input"}};var f,q,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'Enter your phone number...',
    label: 'Phone Number',
    onChange: value => console.log(value)
  }
}`,...(x=(q=a.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var N,T,P;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Phone Number'
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var w,E,$;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Phone Number'
  }
}`,...($=(E=l.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var F,I,S;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'Please enter a valid phone number.',
    label: 'Phone Number with Help Text'
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,D,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Phone number looks good!'
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var R,B,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Are you sure about this number?'
  }
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var O,k,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Invalid phone number.'
  }
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var G,K,W;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Input'
  }
}`,...(W=(K=p.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const re=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{c as Bad,u as Beware,l as Disabled,a as Filled,d as Good,o as Outline,p as Required,i as WithHelpText,re as __namedExportsOrder,ee as default};
