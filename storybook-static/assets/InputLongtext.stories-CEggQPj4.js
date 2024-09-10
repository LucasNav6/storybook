import{R as r}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as K}from"./HelpText-KFYY5z56.js";const V=({color:t,required:k,helptext:x,type:z,placeholder:u="",value:m,onChange:b,isDisabled:s,label:g,name:y,id:A})=>r.createElement(r.Fragment,null,r.createElement("div",{className:`${e.interactive_layer} ${s?e.disabled:""}`},r.createElement("div",{className:e.label_container},r.createElement("label",{className:`${e.label} ${g!==u||m!==void 0?e["label-appear"]:""}`,htmlFor:y},g!==u||m!==void 0?g:""),k?r.createElement("span",{className:e.required},"*"):null),r.createElement("div",{className:`${e.state_layer} ${e[z]} ${t?e[t]:""} ${s?e.disabled:""}`,tabIndex:0},r.createElement("textarea",{className:`${e.input} ${e.textarea} `,placeholder:u,value:m,onChange:s?void 0:J=>b&&b(J.target.value),disabled:s,name:y,id:A})),r.createElement("div",{className:e.helptext},x?r.createElement(K,{text:x,color:t}):null)));V.__docgenInfo={description:"",methods:[],displayName:"InputLongtext",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const X={title:"Beta/InputLongtext",component:V,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{type:"filled",placeholder:"Enter your text...",label:"Filled Textarea",onChange:t=>console.log(t)}},n={args:{...a.args,type:"outline",label:"Outline Textarea"}},l={args:{...a.args,isDisabled:!0,label:"Disabled Textarea"}},o={args:{...a.args,helptext:"This is helpful text for the textarea.",label:"Textarea with Help Text"}},i={args:{...a.args,color:"good",helptext:"Good job!"}},d={args:{...a.args,color:"beware",helptext:"Please, review your text."}},c={args:{...a.args,color:"bad",helptext:"This text has issues."}},p={args:{...a.args,required:!0,label:"Required Input"}};var h,T,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'Enter your text...',
    label: 'Filled Textarea',
    onChange: value => console.log(value)
  }
}`,...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var v,q,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Textarea'
  }
}`,...(w=(q=n.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var F,E,$;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Textarea'
  }
}`,...($=(E=l.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var I,N,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'This is helpful text for the textarea.',
    label: 'Textarea with Help Text'
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var _,H,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Good job!'
  }
}`,...(R=(H=i.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,D,O;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Please, review your text.'
  }
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var G,L,C;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'This text has issues.'
  }
}`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var j,P,W;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Input'
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const Y=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{c as Bad,d as Beware,l as Disabled,a as Filled,i as Good,n as Outline,p as Required,o as WithHelpText,Y as __namedExportsOrder,X as default};
