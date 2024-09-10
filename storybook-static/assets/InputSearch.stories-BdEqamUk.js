import{R as a}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as P}from"./HelpText-KFYY5z56.js";import{S as Q}from"./Search-BMS2udMd.js";const j=({color:s,helptext:b,type:z,placeholder:m="",value:g,onChange:y,isDisabled:n,label:h,name:f,id:A,required:J})=>{const L=t=>{t.key==="Enter"&&t.preventDefault()};return a.createElement(a.Fragment,null,a.createElement("div",{className:`${e.interactive_layer} ${n?e.disabled:""}`},a.createElement("div",{className:e.label_container},a.createElement("label",{className:`${e.label} ${h!==m||g!==void 0?e["label-appear"]:""}`,htmlFor:f},h!==m||g!==void 0?h:""),J?a.createElement("span",{className:e.required},"*"):null),a.createElement("div",{className:`${e.state_layer} ${e[z]} ${s?e[s]:""} ${n?e.disabled:""}`,onKeyDown:t=>L(t),tabIndex:0},a.createElement("div",{className:`${e.icon} ${n?e.disabled:""}`},a.createElement(Q,null)),a.createElement("input",{className:`${e.input} ${e.search}`,type:"search",placeholder:m,value:g,onChange:n?void 0:t=>y&&y(t.target.value),disabled:n,name:f,id:A})),a.createElement("div",{className:e.helptext},b?a.createElement(P,{text:b,color:s}):null)))};j.__docgenInfo={description:"",methods:[],displayName:"InputSearch",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const ee={title:"Beta/InputSearch",component:j,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},r={args:{type:"filled",placeholder:"Search...",label:"Search",onChange:s=>console.log(s)}},l={args:{...r.args,type:"outline",label:"Outline Search"}},o={args:{...r.args,isDisabled:!0,label:"Disabled Search"}},i={args:{...r.args,helptext:"Type and search for items.",label:"Search with Help Text"}},c={args:{...r.args,color:"good",helptext:"Results are likely to be relevant."}},d={args:{...r.args,color:"beware",helptext:"Might take longer to search."}},p={args:{...r.args,color:"bad",helptext:"Could not find any matches."}},u={args:{...r.args,required:!0,label:"Required Search"}};var S,v,q;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'Search...',
    label: 'Search',
    onChange: value => console.log(value)
  }
}`,...(q=(v=r.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var T,x,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Search'
  }
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var E,$,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Search'
  }
}`,...(F=($=o.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var N,R,_;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'Type and search for items.',
    label: 'Search with Help Text'
  }
}`,...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var D,I,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Results are likely to be relevant.'
  }
}`,...(H=(I=c.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var k,B,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Might take longer to search.'
  }
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var O,G,K;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Could not find any matches.'
  }
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var M,W,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Search'
  }
}`,...(V=(W=u.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const ae=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{p as Bad,d as Beware,o as Disabled,r as Filled,c as Good,l as Outline,u as Required,i as WithHelpText,ae as __namedExportsOrder,ee as default};
