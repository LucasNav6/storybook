import{R as r}from"./index-BBkUAzwr.js";import{s as e}from"./Inputs.module-DrGX9FT2.js";import{H as X}from"./HelpText-KFYY5z56.js";import{V as Y,a as Z}from"./VisibilityON-Bqi7Y-dO.js";const z=({color:t,helptext:y,type:A,placeholder:g="",value:b,onChange:f,isDisabled:n,label:w,name:v,id:J,required:L})=>{const M=s=>{s.key==="Enter"&&s.preventDefault()},[o,Q]=r.useState(!1),U=()=>{Q(!o)};return r.createElement(r.Fragment,null,r.createElement("div",{className:`${e.interactive_layer} ${n?e.disabled:""}`},r.createElement("div",{className:e.label_container},r.createElement("label",{className:`${e.label} ${w!==g||b!==void 0?e["label-appear"]:""}`,htmlFor:v},w!==g||b!==void 0?w:""),L?r.createElement("span",{className:e.required},"*"):null),r.createElement("div",{className:`${e.state_layer} ${e[A]} ${t?e[t]:""} ${n?e.disabled:""}`,onKeyDown:s=>M(s),tabIndex:0},r.createElement("input",{className:`${e.input} ${e[o?"text":"password"]}`,type:o?"text":"password",placeholder:g,value:b,onChange:n?void 0:s=>f&&f(s.target.value),disabled:n,name:v,id:J}),r.createElement("div",{className:`${e.icon} ${e.pointer} ${n?e.disabled:""}`,onClick:()=>U()},o?r.createElement(Y,null):r.createElement(Z,null))),r.createElement("div",{className:e.helptext},y?r.createElement(X,{text:y,color:t}):null)))};z.__docgenInfo={description:"",methods:[],displayName:"InputPassword",props:{color:{required:!1,tsType:{name:"union",raw:"'bad'| 'good' | 'beware'",elements:[{name:"literal",value:"'bad'"},{name:"literal",value:"'good'"},{name:"literal",value:"'beware'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | any) => void",signature:{arguments:[{type:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helptext:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const te={title:"Beta/InputPassword",component:z,argTypes:{type:{control:"select",options:["filled","outline"]},color:{control:"select",options:["bad","good","beware"]},isDisabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{type:"filled",placeholder:"Enter your password...",label:"Password",onChange:t=>console.log(t)}},l={args:{...a.args,type:"outline",label:"Outline Password"}},i={args:{...a.args,isDisabled:!0,label:"Disabled Password"}},d={args:{...a.args,helptext:"Password must be 8-12 characters.",label:"Password with Help Text"}},c={args:{...a.args,color:"good",helptext:"Strong password."}},p={args:{...a.args,color:"beware",helptext:"Consider using a stronger password."}},u={args:{...a.args,color:"bad",helptext:"Weak password."}},m={args:{...a.args,required:!0,label:"Required Password"}};var h,q,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    placeholder: 'Enter your password...',
    label: 'Password',
    onChange: value => console.log(value)
  }
}`,...(x=(q=a.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var T,E,P;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline',
    label: 'Outline Password'
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,$,S;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true,
    label: 'Disabled Password'
  }
}`,...(S=($=i.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var N,_,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    helptext: 'Password must be 8-12 characters.',
    label: 'Password with Help Text'
  }
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var I,O,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'good',
    helptext: 'Strong password.'
  }
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var H,R,V;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'beware',
    helptext: 'Consider using a stronger password.'
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,k,W;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    color: 'bad',
    helptext: 'Weak password.'
  }
}`,...(W=(k=u.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var G,K,j;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    required: true,
    label: 'Required Password'
  }
}`,...(j=(K=m.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};const ne=["Filled","Outline","Disabled","WithHelpText","Good","Beware","Bad","Required"];export{u as Bad,p as Beware,i as Disabled,a as Filled,c as Good,l as Outline,m as Required,d as WithHelpText,ne as __namedExportsOrder,te as default};
