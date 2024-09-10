import{R as a}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as Y}from"./HelpText-KFYY5z56.js";import{D as Z,A as ee}from"./DoNotDisturbOn-BtRVzf3j.js";const W=({color:l,required:z,helptext:v,type:J,placeholder:g="",value:y,onChange:n,isDisabled:s=!1,label:b,name:q,id:M})=>{const P=t=>{t.key==="Enter"&&t.preventDefault()},[f,h]=a.useState(y||"0"),U=()=>{const t=parseInt(f,10);isNaN(t)||(h((t-1).toString()),n&&n((t-1).toString()))},X=()=>{const t=parseInt(f,10);isNaN(t)||(h((t+1).toString()),n&&n((t+1).toString()))};return a.createElement(a.Fragment,null,a.createElement("div",{className:`${e.interactive_layer} ${s?e.disabled:""}`},a.createElement("div",{className:e.label_container},a.createElement("label",{className:`${e.label} ${b!==g||y!==void 0?e["label-appear"]:""}`,htmlFor:q},b!==g||y!==void 0?b:""),z?a.createElement("span",{className:e.required},"*"):null),a.createElement("div",{className:`${e.state_layer} ${e[J]} ${l?e[l]:""} ${s?e.disabled:""}`,onKeyDown:t=>P(t),tabIndex:0},a.createElement("div",{className:`${e.icon} ${s?e.disabled:""}`,onClick:s?void 0:()=>U()},a.createElement(Z,null)),a.createElement("input",{className:`${e.input} ${e.number}`,type:"number",placeholder:g,value:f,onChange:s?void 0:t=>n&&n(t.target.value),disabled:s,name:q,id:M}),a.createElement("div",{className:`${e.icon} ${s?e.disabled:""}`,onClick:s?void 0:()=>X()},a.createElement(ee,null))),a.createElement("div",{className:e.helptext},v?a.createElement(Y,{text:v,color:l}):null)))};W.__docgenInfo={description:"",methods:[],displayName:"InputQuantity",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const ne={title:"Beta/InputQuantity",component:W,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},r={args:{type:"filled",placeholder:"0",label:"Quantity",onChange:l=>console.log(l)}},o={args:{...r.args,type:"outline",label:"Outline Quantity"}},i={args:{...r.args,isDisabled:!0,label:"Disabled Quantity"}},d={args:{...r.args,helptext:"Adjust the quantity as needed.",label:"Quantity with Help Text"}},c={args:{...r.args,color:"good",helptext:"Adequate stock available."}},u={args:{...r.args,color:"beware",helptext:"Limited stock, please verify."}},p={args:{...r.args,color:"bad",helptext:"Out of stock."}},m={args:{...r.args,required:!0,label:"Required Input"}};var x,T,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: '0',
    label: 'Quantity',
    onChange: value => console.log(value)
  }
}`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var E,N,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Quantity'
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var $,Q,F;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Quantity'
  }
}`,...(F=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};var I,k,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'Adjust the quantity as needed.',
    label: 'Quantity with Help Text'
  }
}`,...(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var _,A,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Adequate stock available.'
  }
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,R,V;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Limited stock, please verify.'
  }
}`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,j,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Out of stock.'
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var G,K,L;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Input'
  }
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const le=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{p as Bad,u as Beware,i as Disabled,r as Filled,c as Good,o as Outline,m as Required,d as WithHelpText,le as __namedExportsOrder,ne as default};
