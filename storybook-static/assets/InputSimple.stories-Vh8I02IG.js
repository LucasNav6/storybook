import{R as a}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as M}from"./HelpText-KFYY5z56.js";const V=({color:s,helptext:y,type:j,placeholder:m="",value:g,onChange:h,isDisabled:n,label:b,name:f,id:z,required:J})=>{const L=t=>{t.key==="Enter"&&t.preventDefault()};return a.createElement(a.Fragment,null,a.createElement("div",{className:`${e.interactive_layer} ${n?e.disabled:""}`},a.createElement("div",{className:e.label_container},a.createElement("label",{className:`${e.label} ${b!==m||g!==void 0?e["label-appear"]:""}`,htmlFor:f},b!==m||g!==void 0?b:""),J?a.createElement("span",{className:e.required},"*"):null),a.createElement("div",{className:`${e.state_layer} ${e[j]} ${s?e[s]:""} ${n?e.disabled:""}`,onKeyDown:t=>L(t),tabIndex:0},a.createElement("input",{className:`${e.input} ${e.text}`,type:"text",placeholder:m,value:g,onChange:n?void 0:t=>h&&h(t.target.value),disabled:n,name:f,id:z})),a.createElement("div",{className:e.helptext},y?a.createElement(M,{text:y,color:s}):null)))};V.__docgenInfo={description:"",methods:[],displayName:"InputSimple",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const Y={title:"Beta/InputSimple",component:V,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},r={args:{type:"filled",placeholder:"Enter text...",label:"Filled Input",onChange:s=>console.log(s)}},l={args:{...r.args,type:"outline",label:"Outline Input"}},o={args:{...r.args,isDisabled:!0,label:"Disabled Input"}},i={args:{...r.args,helptext:"This is helpful text.",label:"Input with Help Text"}},d={args:{...r.args,color:"good",helptext:"All good!"}},p={args:{...r.args,color:"beware",helptext:"Please double-check."}},c={args:{...r.args,color:"bad",helptext:"Something is wrong."}},u={args:{...r.args,required:!0,label:"Required Input"}};var x,v,q;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'Enter text...',
    label: 'Filled Input',
    onChange: value => console.log(value)
  }
}`,...(q=(v=r.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var T,w,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Input'
  }
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var S,E,F;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Input'
  }
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var $,D,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'This is helpful text.',
    label: 'Input with Help Text'
  }
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,H,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'All good!'
  }
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,O,k;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Please double-check.'
  }
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var C,A,G;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Something is wrong.'
  }
}`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var K,P,W;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Input'
  }
}`,...(W=(P=u.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const Z=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{c as Bad,p as Beware,o as Disabled,r as Filled,d as Good,l as Outline,u as Required,i as WithHelpText,Z as __namedExportsOrder,Y as default};
