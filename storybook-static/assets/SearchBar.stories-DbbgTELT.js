import{r as m,R as n}from"./index-BBkUAzwr.js";import{C as A,T as I}from"./Tune-Dir6NTGF.js";import{S as f}from"./Search-BMS2udMd.js";const R="_interactive_layer_1ljd3_7",V="_main_container_1ljd3_16",W="_outline_1ljd3_36",z="_writing_1ljd3_50",G="_filled_1ljd3_56",H="_baseplate_1ljd3_77",J="_search_container_1ljd3_94",K="_outline_open_1ljd3_101",M="_filled_open_1ljd3_105",P="_baseplate_open_1ljd3_108",Q="_search_1ljd3_94",U="_dropdown_options_1ljd3_138",X="_dropdown_option_1ljd3_138",Y="_outline_option_1ljd3_183",Z="_selected_1ljd3_187",ee="_disabled_1ljd3_191",ne="_outline_icon_option_1ljd3_195",te="_filled_option_1ljd3_200",ae="_filled_icon_option_1ljd3_222",oe="_baseplate_option_1ljd3_227",le="_baseplate_icon_option_1ljd3_239",se="_icon_1ljd3_258",t={interactive_layer:R,main_container:V,outline:W,writing:z,filled:G,baseplate:H,search_container:J,outline_open:K,filled_open:M,baseplate_open:P,search:Q,dropdown_options:U,dropdown_option:X,outline_option:Y,selected:Z,disabled:ee,outline_icon_option:ne,filled_option:te,filled_icon_option:ae,baseplate_option:oe,baseplate_icon_option:le,icon:se},N=({options:l,onClick:q,type:s,tune:b})=>{const[u,r]=m.useState(!1),[D,g]=m.useState({label:"",value:-1}),[a,p]=m.useState(""),_=n.useRef(null),B=()=>{r(!u)},T=e=>{q(e),g(e),p(e.label),r(!1)},v=e=>{_.current&&!_.current.contains(e.target)&&r(!1)},L=()=>{p(""),g({label:"",value:-1})};return n.useEffect(()=>(document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}),[]),n.createElement("div",{className:`${t.interactive_layer}`,onClick:B,ref:_},n.createElement("div",{className:`${t.main_container} ${t[s]} ${a.length>0?t.writing:""}`},n.createElement("div",{className:t.base},n.createElement("div",{className:`${t.search_container} ${u&&a!==""&&l.some(e=>e.label.toLowerCase().includes(a.toLowerCase()))?t[s+"_open"]:""} `},n.createElement("span",{className:`${t.icon} `}," ",n.createElement(f,null)," "),n.createElement("input",{className:t.search,type:"search",value:a,onChange:e=>{p(e.target.value),r(!0)}}),n.createElement("span",{onClick:()=>L(),className:`${t.icon} `}," ",n.createElement(A,null)),b?n.createElement("span",{onClick:()=>b(),className:`${t.icon} `}," ",n.createElement(I,null)):null)),u&&a!==""&&l.some(e=>e.label.toLowerCase().includes(a.toLowerCase()))&&n.createElement("div",{className:t.dropdown_options},l.filter(e=>e.label.toLowerCase().includes(a.toLowerCase())).slice(0,5).map(e=>n.createElement("div",{key:e.value,className:`${t.dropdown_option} ${t[s+"_option"]} ${e.value===D.value?t.selected:""} ${e.isDisabled?t.disabled:""} `,onClick:e.isDisabled?void 0:()=>T(e)},n.createElement("span",{className:`${t[s+"_icon_option"]} `}," ",n.createElement(f,null)),n.createElement("span",null,e.label))))))};N.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string | number;
  isDisabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"OptionItem[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedOption: OptionItem) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  label: string;
  value: string | number;
  isDisabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}},name:"selectedOption"}],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline' | 'baseplate'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'baseplate'"}]},description:""},tune:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ue={title:"Beta/SearchBar",component:N,argTypes:{type:{control:"select",options:["filled","outline","baseplate"]},tune:{action:"tuneClicked"}}},re=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",isDisabled:!0},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}],o={args:{options:re,onClick:l=>console.log(l),type:"filled",tune:void 0}},i={args:{...o.args,type:"outline"}},c={args:{...o.args,type:"baseplate"}},d={args:{...o.args,tune:()=>{}}};var w,y,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options,
    onClick: option => console.log(option),
    type: 'filled',
    tune: undefined // Asegúrate de ajustar esta prop según cómo esté implementada en tu componente
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,h,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'outline'
  }
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var S,k,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    type: 'baseplate'
  }
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var $,x,F;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    tune: () => {} // Ajusta según la implementación. Si \`tune\` es un evento, considera cómo manejarlo aquí.
  }
  // Si necesitas un manejo especial para el evento \`tune\`, podrías necesitar ajustar cómo se implementa esta parte.
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const pe=["Filled","Outline","Baseplate","WithTuneButton"];export{c as Baseplate,o as Filled,i as Outline,d as WithTuneButton,pe as __namedExportsOrder,ue as default};
