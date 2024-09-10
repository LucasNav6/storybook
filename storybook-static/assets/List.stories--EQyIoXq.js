import{r as C,R as e}from"./index-BBkUAzwr.js";import{E as g}from"./ExpandAll-D0MBGcr9.js";import{B as s}from"./Button-yh1k76xc.js";const k="_row_3gk2t_7",R="_rowContent_3gk2t_17",v="_row_hover_3gk2t_32",b="_box_expand_3gk2t_36",h="_expand_3gk2t_48",y="_rowDetails_3gk2t_57",N="_children_detail_3gk2t_71",f="_blocks_3gk2t_75",L="_boxes_3gk2t_81",B="_divider_3gk2t_92",n={row:k,rowContent:R,row_hover:v,box_expand:b,expand:h,rowDetails:y,children_detail:N,blocks:f,boxes:L,divider:B},l=({children:o,more:c})=>{const[i,x]=C.useState(!1);return e.createElement("div",null,e.createElement("div",{className:`${n.row}`},e.createElement("div",{className:`${n.rowContent} ${n.row_hover}`},e.Children.map(o,w=>e.createElement("div",{className:n.boxes},w)),c&&e.createElement("div",{className:n.box_expand,onClick:()=>x(!i)},e.createElement("button",{className:n.expand},e.createElement(g,null)))),c&&i&&e.createElement("div",{className:n.rowDetails},e.createElement("div",{className:n.children_detail},c))),e.createElement("div",{className:n.divider}))};l.__docgenInfo={description:"",methods:[],displayName:"List",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},more:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $={title:"BETA/List",component:l,argTypes:{more:{control:"boolean"}}},t=()=>e.createElement("div",{style:{padding:"10px"}},e.createElement("p",null,"Content")),D=()=>e.createElement("div",{style:{padding:"10px",backgroundColor:"#f0f0f0"}},e.createElement("p",null,"This is the expanded content with more details.")),r={args:{more:e.createElement(D,null)},render:o=>e.createElement(l,{...o},e.createElement(t,null),e.createElement(t,null),e.createElement(t,null),e.createElement(t,null),e.createElement(t,null),e.createElement(s,{color:"accent",type:"outline",text:"hover me",onClick:()=>{}}))},a={args:{more:null},render:o=>e.createElement(l,{...o},e.createElement(t,null),e.createElement(t,null),e.createElement(s,{color:"primary",type:"outline",text:"button",onClick:()=>{}}),e.createElement(s,{color:"accent",type:"outline",text:"button",onClick:()=>{}}),e.createElement(t,null),e.createElement(t,null),e.createElement(t,null))};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    more: <MoreContent />
  },
  render: args => <List {...args}>
    <RowContent />
    <RowContent />
    <RowContent />
    <RowContent />
    <RowContent />
    <Button color="accent" type="outline" text="hover me" onClick={() => {}} /> 
  </List>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,_,E;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    more: null
  },
  render: args => <List {...args}>
    <RowContent />
    <RowContent />
    <Button color="primary" type="outline" text="button" onClick={() => {}} /> 
    <Button color="accent" type="outline" text="button" onClick={() => {}} /> 
    <RowContent />
    <RowContent />
    <RowContent />
    
  </List>
}`,...(E=(_=a.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const q=["Default","WithoutMore"];export{r as Default,a as WithoutMore,q as __namedExportsOrder,$ as default};
