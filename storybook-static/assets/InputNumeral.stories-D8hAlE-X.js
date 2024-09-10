import{R as r}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as P}from"./HelpText-KFYY5z56.js";import{N as Q}from"./Numbers123-DC0bOlqZ.js";const j=({color:n,required:z,helptext:y,type:A,placeholder:m="",value:g,onChange:f,isDisabled:s,label:b,name:v,id:J})=>{const M=t=>{t.key==="Enter"&&t.preventDefault()};return r.createElement(r.Fragment,null,r.createElement("div",{className:`${e.interactive_layer} ${s?e.disabled:""}`},r.createElement("div",{className:e.label_container},r.createElement("label",{className:`${e.label} ${b!==m||g!==void 0?e["label-appear"]:""}`,htmlFor:v},b!==m||g!==void 0?b:""),z?r.createElement("span",{className:e.required},"*"):null),r.createElement("div",{className:`${e.state_layer} ${e[A]} ${n?e[n]:""} ${s?e.disabled:""}`,onKeyDown:t=>M(t),tabIndex:0},r.createElement("div",{className:`${e.icon} ${s?e.disabled:""}`},r.createElement(Q,null)),r.createElement("input",{className:`${e.input} ${e.text}`,type:"text",placeholder:m,value:g,onChange:s?void 0:t=>f&&f(t.target.value),disabled:s,name:v,id:J})),r.createElement("div",{className:e.helptext},y?r.createElement(P,{text:y,color:n}):null)))};j.__docgenInfo={description:"",methods:[],displayName:"InputNumeral",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const ee={title:"Beta/InputNumeral",component:j,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{type:"filled",placeholder:"Enter a number...",label:"Number Input",onChange:n=>console.log(n)}},l={args:{...a.args,type:"outline",label:"Outline Number Input"}},o={args:{...a.args,isDisabled:!0,label:"Disabled Number Input"}},i={args:{...a.args,helptext:"Numbers only, please.",label:"Input with Help Text"}},d={args:{...a.args,color:"good",helptext:"Looks good!"}},u={args:{...a.args,color:"beware",helptext:"Check the number format."}},c={args:{...a.args,color:"bad",helptext:"Invalid number."}},p={args:{...a.args,required:!0,label:"Required Input"}};var h,N,q;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'Enter a number...',
    label: 'Number Input',
    onChange: value => console.log(value)
  }
}`,...(q=(N=a.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var x,I,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Number Input'
  }
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,E,$;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Number Input'
  }
}`,...($=(E=o.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var F,S,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'Numbers only, please.',
    label: 'Input with Help Text'
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var D,H,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Looks good!'
  }
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var k,B,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Check the number format.'
  }
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var O,G,K;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Invalid number.'
  }
}`,...(K=(G=c.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var L,W,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Input'
  }
}`,...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const re=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{c as Bad,u as Beware,o as Disabled,a as Filled,d as Good,l as Outline,p as Required,i as WithHelpText,re as __namedExportsOrder,ee as default};
