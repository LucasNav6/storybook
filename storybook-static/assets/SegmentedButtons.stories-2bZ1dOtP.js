import{r as P,R as a}from"./index-BBkUAzwr.js";import{C as $}from"./Check-D9fbp2E2.js";const h="_interactive_layer_2335x_8",V="_text_layer_2335x_16",A="_icon_2335x_73",I="_active_2335x_76",K="_primary_2335x_76",R="_secondary_2335x_86",j="_accent_2335x_94",F="_primary_minor_2335x_102",z="_secondary_minor_2335x_110",G="_accent_minor_2335x_118",H="_interactive_button_2335x_127",r={interactive_layer:h,text_layer:V,"toggle-button":"_toggle-button_2335x_24",icon:A,active:I,primary:K,secondary:R,accent:j,primary_minor:F,secondary_minor:z,accent_minor:G,interactive_button:H},q=({options:t,onClick:C,defaultValue:O,color:w="primary",isDisabled:i})=>{const[l,N]=P.useState(O||t[0].value),u=e=>{N(e),C(e)},T=(e,m)=>{e.key==="Enter"&&(e.preventDefault(),u(m))};return a.createElement(a.Fragment,null,a.createElement("div",{className:r.interactive_layer},t.map((e,m)=>a.createElement("div",{className:`${r.interactive_button} ${i?r.disabled:""}`,onClick:()=>u(e.value),onKeyDown:i?void 0:B=>T(B,e.value),tabIndex:0,key:m},a.createElement("button",{tabIndex:-1,disabled:i,className:`${r["toggle-button"]} ${l===e.value?r.active:""}
              ${l===e.value?r[w]:""}`},a.createElement("div",{className:r.text_layer},l===e.value&&a.createElement($,{className:r.icon}),e.label))))))};q.__docgenInfo={description:"",methods:[],displayName:"SegmentedButtons",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent' |  'primary_minor' | 'secondary_minor' | 'accent_minor'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'primary_minor'"},{name:"literal",value:"'secondary_minor'"},{name:"literal",value:"'accent_minor'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  value: string;
}[]`},description:""}}};const d=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],M={title:"Beta/SegmentedButtons",component:q,argTypes:{color:{control:"select",options:["primary","secondary","accent","primary_minor","secondary_minor","accent_minor"]},isDisabled:{control:"boolean"}}},n={args:{options:d,onClick:t=>console.log(t),defaultValue:d[0].value,color:"primary"}},o={args:{...n.args,color:"secondary"}},s={args:{...n.args,color:"accent"}},c={args:{...n.args,isDisabled:!0}};var _,p,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options,
    onClick: (option: string) => console.log(option),
    defaultValue: options[0].value,
    color: 'primary'
  }
}`,...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,v,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,f,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'accent'
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,E,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const Q=["Primary","Secondary","Accent","Disabled"];export{s as Accent,c as Disabled,n as Primary,o as Secondary,Q as __namedExportsOrder,M as default};
