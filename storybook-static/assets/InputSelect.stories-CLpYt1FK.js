import{R as e}from"./index-BBkUAzwr.js";import{s as r}from"./Inputs.module-DrGX9FT2.js";import{H as te}from"./HelpText-KFYY5z56.js";import{A as se}from"./ArrowDropDown-Lzn461cu.js";import{C as v}from"./Checkbox-BefMih_0.js";const w=({color:n,required:U,helptext:x,type:X,placeholder:u="",value:E,isDisabled:g,label:f,name:Y,size:q="medium",text:h="Seleccionar",children:Z})=>{const[b,y]=e.useState(!1),T=e.useRef(null),ee=t=>{t.key==="Enter"&&(t.preventDefault(),y(!b))},S=t=>{T.current&&!T.current.contains(t.target)&&y(!1)};e.useEffect(()=>(document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}),[]);const re=(t,ae)=>{t(!ae)};return e.createElement(e.Fragment,null,e.createElement("div",{className:`${r.interactive_layer} ${q==="small"?r.small:""} ${g?r.disabled:""}`,ref:T},e.createElement("div",{className:r.label_container},e.createElement("label",{className:`${r.label} ${f!==u||E!==void 0?r["label-appear"]:""}`,htmlFor:Y},f!==u||E!==void 0?f:""),U?e.createElement("span",{className:r.required},"*"):null),e.createElement("div",{className:`${r.state_layer} ${r[X]} ${n?r[n]:""} ${g?r.disabled:""}`,onKeyDown:t=>ee(t),tabIndex:0},b&&e.createElement("div",{className:r.dropdown_options},Z),e.createElement("div",{className:`${r.input} ${q==="small"?r.country:r.select} ${r.align}  `},e.createElement("span",null,h||u)),e.createElement("div",{className:`${r.icon} ${r.pointer} ${g?r.disabled:""}`,onClick:()=>re(y,b)},e.createElement(se,null))),e.createElement("div",{className:r.helptext},x?e.createElement(te,{text:x,color:n}):null)))};w.__docgenInfo={description:"",methods:[],displayName:"InputSelect",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Seleccionar'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const de={title:"Beta/InputSelect",component:w,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"},size:{control:"select",options:["small","medium"]},text:{control:"text"}}},s={render:n=>e.createElement(w,{...n},e.createElement(v,{label:"opción 1"}),e.createElement(v,{label:"opción 2"}),e.createElement(v,{label:"opción 3"}))},a={...s,args:{type:"filled",text:"Checkbox Select"}},l={...s,args:{...a.args,type:"outline"}},o={...s,args:{...a.args,isDisabled:!0}},c={...s,args:{...a.args,helptext:"Select your options carefully."}},i={...s,args:{...a.args,color:"good",helptext:"Good selection."}},d={...s,args:{...a.args,color:"beware",helptext:"Think twice before selecting."}},m={...s,args:{...a.args,color:"bad",helptext:"Not a recommended option."}},p={...s,args:{...a.args,required:!0,label:"Required select"}};var $,N,R;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template,
  args: {
    type: 'filled',
    text: 'Checkbox Select'
  }
}`,...(R=(N=a.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var D,F,_;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Filled.args,
    type: 'outline'
  }
}`,...(_=(F=l.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var I,k,B;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Filled.args,
    isDisabled: true
  }
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,O,G;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Filled.args,
    helptext: 'Select your options carefully.'
  }
}`,...(G=(O=c.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,V,A;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Good selection.'
  }
}`,...(A=(V=i.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var K,L,W;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Think twice before selecting.'
  }
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var z,j,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Not a recommended option.'
  }
}`,...(J=(j=m.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var M,P,Q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Filled.args,
    required: true,
    label: 'Required select'
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const me=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{m as Bad,d as Beware,o as Disabled,a as Filled,i as Good,l as Outline,p as Required,c as WithHelpText,me as __namedExportsOrder,de as default};
