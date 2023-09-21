"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{2086:function(n,e,o){o.r(e),o.d(e,{default:function(){return P}});var t,r,a,i,s=o(2791),d=o(9439),c=o(9520),l=o(5218),p=o(168),x=o(5867),u=x.zo.form(t||(t=(0,p.Z)(["\n  justify-content: center;\n  display: grid;\n  gap: 10px;\n"]))),b=x.zo.label(r||(r=(0,p.Z)(["\n  width: auto;\n  display: grid;\n  justify-content: center;\n"]))),h=x.zo.button(a||(a=(0,p.Z)(["\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 25px;\n  margin: 0 15px 15px 0;\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 50px;\n  height: 46px;\n//    width: 200px;\n  line-height: 46px;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #444;\n  background-color: #fff;\n  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);\n  cursor: pointer;\n  user-select: none;\n  appearance: none;\n  touch-action: manipulation;\n  vertical-align: top;\n  transition: box-shadow 0.2s;\n  width: fit-content;\n\n\n\n  &:focus-visible {\n    border: 1px solid #4c51f9;\n    outline: none;\n  }\n\n  &:hover {\n    transition: all 0.2s;\n    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);\n  }\n\n  &:active {\n    background-color: #808080;\n  }\n\n  &:disabled {\n    background-color: #eee;\n    border-color: #eee;\n    color: #444;\n    cursor: not-allowed;\n"]))),g=x.zo.input(i||(i=(0,p.Z)(["\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 25px;\n  margin: 0 15px 15px 0;\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 50px;\n  height: 46px;\n  width: 300px;\n  line-height: 46px;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #444;\n  background-color: #fff;\n  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);\n  cursor: pointer;\n  user-select: none;\n  appearance: none;\n  touch-action: manipulation;\n  vertical-align: top;\n  transition: box-shadow 0.2s;\n"]))),f=o(184);function m(){var n=function(){var n=(0,s.useState)(""),e=(0,d.Z)(n,2),o=e[0],t=e[1],r=(0,s.useState)(""),a=(0,d.Z)(r,2),i=a[0],p=a[1],x=(0,c.wY)().data,u=(0,c.Tn)(),b=(0,d.Z)(u,2),h=b[0],g=b[1].isLoading;return{name:o,number:i,handleSubmit:function(n){n.preventDefault(),x.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?l.Am.error("".concat(o," is already in contacts!")):(h({name:o,number:i}),t(""),p(""))},handleChange:function(n){var e=n.target,o=e.value;switch(e.name){case"name":t(o);break;case"number":p(o);break;default:return}},isLoading:g}}(),e=n.name,o=n.number,t=n.handleSubmit,r=n.handleChange,a=n.isLoading;return(0,f.jsx)("div",{children:(0,f.jsxs)(u,{type:"submit",onSubmit:t,children:[(0,f.jsxs)(b,{children:["Name",(0,f.jsx)(g,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:r,value:e})]}),(0,f.jsxs)(b,{children:["Number",(0,f.jsx)(g,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:r,value:o})]}),(0,f.jsx)(h,{type:"submit",disabled:a,children:"Add contact"})]})})}var v,w,y,j,k,z,C=o(7224),Z=o(5048),L=function(){var n=(0,Z.I0)();return{filter:(0,Z.v9)(C.AD),onChange:function(e){return n((0,C.Tv)(e.currentTarget.value.toLowerCase()))}}},A=x.zo.input(v||(v=(0,p.Z)(["\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 25px;\n  margin: 0 15px 15px 0;\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 50px;\n  height: 46px;\n  width: 300px;\n  line-height: 46px;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #444;\n  background-color: #fff;\n  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);\n  cursor: pointer;\n  user-select: none;\n  appearance: none;\n  touch-action: manipulation;\n  vertical-align: top;\n  transition: box-shadow 0.2s;\n"]))),F=function(){var n=L(),e=n.filter,o=n.onChange;return(0,f.jsxs)("div",{children:[(0,f.jsx)("h4",{children:"Find contacts by name"}),(0,f.jsx)(A,{type:"text",name:"name",value:e,onChange:o})]})},S=x.zo.ul(w||(w=(0,p.Z)(["\n  margin: auto;\n  padding: inherit;\n"]))),D=x.zo.li(y||(y=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  font-size: 20px;\n  font-family: revert;\n  padding: 20px;\n  border-radius: 30px;\n  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);\n  background-color: #fff;\n\n    &:focus-visible {\n    border: 1px solid #4c51f9;\n    outline: none;\n  }\n\n  &:hover {\n    transition: all 0.2s;\n    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);\n  }\n\n  &:active {\n    background-color: #808080;\n  }\n\n  &:disabled {\n    background-color: #eee;\n    border-color: #eee;\n    color: #444;\n    cursor: not-allowed;\n"]))),_=x.zo.div(j||(j=(0,p.Z)(['\n  opacity: 0.2;\n  cursor: pointer;\n  transition: opacity ease 0.5s;\n  color: red;\n  margin: auto;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &::before,\n  &::after {\n    content: "";\n    // position: absolute;\n    top: 10px;\n    display: block;\n    width: 24px;\n    height: 3px;\n    background: red;\n  }\n\n  &::before {\n    transform: rotate(45deg);\n  }\n\n  &::after {\n    transform: rotate(-45deg);\n  }\n']))),N=function(){var n=function(){var n=L().filter,e=(0,c.zr)(),o=(0,d.Z)(e,2),t=o[0],r=o[1].isLoading,a=(0,c.wY)(),i=a.data,s=a.isFetching,l=function(){if(i)return i.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}();return{deleteContact:t,isFetching:s,contacts:i,contactsList:l,isDeleting:r}}(),e=n.deleteContact,o=n.isFetching,t=n.contacts,r=n.contactsList,a=n.isDeleting;return(0,f.jsxs)(S,{children:[o&&(0,f.jsx)("h2",{children:"Loading..."}),t&&r.map((function(n){var o=n.id,t=n.name,r=n.number;return(0,f.jsxs)(D,{id:o,children:[t,": ",r,(0,f.jsx)(_,{type:"submit",onClick:function(){e(o)},disabled:a})]},o)}))]})},T=x.zo.div(k||(k=(0,p.Z)(["\n  border-radius: 30px;\n  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);\n  margin-top: 40px;\n  padding: 20px;\n  background: #8080800f;\n  display: inline-block;\n  text-align: center;\n  justify-content: center;\n"]))),q=x.zo.div(z||(z=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),P=function(){return(0,f.jsx)(q,{children:(0,f.jsxs)(T,{children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(m,{}),(0,f.jsx)("h1",{children:"Contacts"}),(0,f.jsx)(F,{}),(0,f.jsx)(N,{}),(0,f.jsx)(l.x7,{})]})})}}}]);
//# sourceMappingURL=86.8abfc3fc.chunk.js.map