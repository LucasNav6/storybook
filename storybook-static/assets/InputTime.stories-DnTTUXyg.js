import{R as r}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as L}from"./HelpText-KFYY5z56.js";import{S as P}from"./Schedule-BarX4b96.js";const V=({color:s,helptext:y,type:j,placeholder:u="",value:g,onChange:h,isDisabled:n,label:b,name:f,id:z,required:A})=>{const J=t=>{t.key==="Enter"&&t.preventDefault()};return r.createElement(r.Fragment,null,r.createElement("div",{className:`${e.interactive_layer} ${n?e.disabled:""}`},r.createElement("div",{className:e.label_container},r.createElement("label",{className:`${e.label} ${b!==u||g!==void 0?e["label-appear"]:""}`,htmlFor:f},b!==u||g!==void 0?b:""),A?r.createElement("span",{className:e.required},"*"):null),r.createElement("div",{className:`${e.state_layer} ${e[j]} ${s?e[s]:""} ${n?e.disabled:""}`,onKeyDown:t=>J(t),tabIndex:0},r.createElement("input",{className:`${e.input} ${e.time}`,type:"time",placeholder:u,value:g,onChange:n?void 0:t=>h&&h(t.target.value),disabled:n,name:f,id:z}),r.createElement("div",{className:`${e.icon} ${e.date_time} ${n?e.disabled:""}`},r.createElement(P,null))),r.createElement("div",{className:e.helptext},y?r.createElement(L,{text:y,color:s}):null)))};V.__docgenInfo={description:"",methods:[],displayName:"InputTime",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const ee={title:"Beta/InputTime",component:V,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{type:"filled",placeholder:"HH:MM",label:"Time",onChange:s=>console.log(s)}},l={args:{...a.args,type:"outline"}},o={args:{...a.args,isDisabled:!0,helptext:"This input is disabled."}},i={args:{...a.args,helptext:"Select a time for your event."}},d={args:{...a.args,color:"good",helptext:"This is a suitable time."}},c={args:{...a.args,color:"beware",helptext:"You might want to double-check this time."}},m={args:{...a.args,color:"bad",helptext:"Invalid time selected."}},p={args:{...a.args,required:!0,label:"Required Input"}};var v,T,q;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'HH:MM',
    label: 'Time',
    onChange: value => console.log(value)
  }
}`,...(q=(T=a.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var x,w,E;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline'
  }
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var $,S,F;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    helptext: 'This input is disabled.'
  }
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var I,N,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'Select a time for your event.'
  }
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var H,R,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'This is a suitable time.'
  }
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var D,M,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'You might want to double-check this time.'
  }
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var C,O,G;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Invalid time selected.'
  }
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var K,W,Y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Input'
  }
}`,...(Y=(W=p.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const re=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{m as Bad,c as Beware,o as Disabled,a as Filled,d as Good,l as Outline,p as Required,i as WithHelpText,re as __namedExportsOrder,ee as default};
