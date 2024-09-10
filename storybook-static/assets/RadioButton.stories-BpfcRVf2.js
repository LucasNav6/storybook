import{R as e}from"./index-BBkUAzwr.js";const k="_interactive_layer_idyzf_8",v="_disabled_idyzf_21",w="_state_layer_idyzf_32",E="_state_layer_disabled_idyzf_53",x="_circle_idyzf_58",B="_circle_unchecked_idyzf_63",z="_radioInput_idyzf_72",D="_radioButton_idyzf_87",I="_label_idyzf_108",t={interactive_layer:k,disabled:v,state_layer:w,state_layer_disabled:E,circle:x,circle_unchecked:B,radioInput:z,radioButton:D,label:I},T=({label:l,isDisabled:a,checked:o,onClick:i})=>{const c=()=>{i&&i(o)},f=d=>{d.key==="Enter"&&(d.preventDefault(),c())};return e.createElement("div",{className:`${t.interactive_layer} ${a?t.disabled:""}`,onClick:a?void 0:c,onKeyDown:a?void 0:f,tabIndex:0},e.createElement("div",{className:`${t.state_layer} ${a?t.state_layer_disabled:""}`},e.createElement("input",{tabIndex:-1,type:"radio",className:t.radioInput,checked:o,disabled:a,onChange:c}),o===!0?e.createElement("span",{className:t.circle},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},e.createElement("path",{d:"M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"}))):e.createElement("span",{className:t.circle_unchecked},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},e.createElement("path",{d:"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"})))),l?e.createElement("label",{className:t.label},e.createElement("span",null,l)):null)};T.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const O={title:"Beta/RadioButton",component:T,argTypes:{checked:{control:"boolean"},isDisabled:{control:"boolean"},label:{control:"text"}}},n={args:{label:"Option 1",checked:!0}},r={args:{label:"Option 2",checked:!1}},s={args:{label:"Disabled Option",isDisabled:!0,checked:!1}};var p,_,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    checked: true
  }
}`,...(m=(_=n.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};var u,b,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Option 2',
    checked: false
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var q,h,g;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Option',
    isDisabled: true,
    checked: false // o true, según quieras mostrar un botón deshabilitado seleccionado o no seleccionado
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Z=["Checked","Unchecked","Disabled"];export{n as Checked,s as Disabled,r as Unchecked,Z as __namedExportsOrder,O as default};
