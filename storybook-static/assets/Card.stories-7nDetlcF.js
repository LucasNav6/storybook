import{R as n}from"./index-BBkUAzwr.js";const S="_interactive_layer_1witb_7",$="_disabled_1witb_19",x="_card_1witb_23",O="_filled_locked_1witb_49",C="_filled_1witb_49",I="_filled_disabled_1witb_65",K="_outline_locked_1witb_71",L="_outline_1witb_71",B="_outline_disabled_1witb_89",V="_elevated_locked_1witb_93",j="_elevated_1witb_93",z="_elevated_disabled_1witb_114",a={interactive_layer:S,disabled:$,card:x,filled_locked:O,filled:C,filled_disabled:I,outline_locked:K,outline:L,outline_disabled:B,elevated_locked:V,elevated:j,elevated_disabled:z},R=({children:q,type:d,onClick:i,locked:c=!1,isDisabled:o})=>{const N=_=>{_.key==="Enter"&&(_.preventDefault(),i&&!c&&i())};return n.createElement("div",{className:`${a.interactive_layer} ${o?a.disabled:""}`,onClick:i,onKeyDown:N,tabIndex:o?-1:0},n.createElement("div",{className:`${a.card}  ${c?a[d+"_locked"]:o?a[d+"_disabled"]:a[d]}`},q))};R.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline' | 'elevated'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'elevated'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Beta/Card",component:R,argTypes:{type:{control:"select",options:["filled","outline","elevated"]},locked:{control:"boolean"},isDisabled:{control:"boolean"}}},e={args:{type:"filled",locked:!1,isDisabled:!1,children:n.createElement("p",null,"This is a card")}},l={args:{...e.args,type:"outline"}},t={args:{...e.args,type:"elevated"}},s={args:{...e.args,locked:!0}},r={args:{...e.args,isDisabled:!0}};var u,p,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    locked: false,
    isDisabled: false,
    children: <p>This is a card</p>
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,f,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline'
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,y,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'elevated'
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,D,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    locked: true
  }
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var h,E,F;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    isDisabled: true
  }
}`,...(F=(E=r.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const H=["Filled","Outline","Elevated","Locked","Disabled"];export{r as Disabled,t as Elevated,e as Filled,s as Locked,l as Outline,H as __namedExportsOrder,G as default};
