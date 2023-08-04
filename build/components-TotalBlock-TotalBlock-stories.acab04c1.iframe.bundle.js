"use strict";(self.webpackChunknotes_react_app=self.webpackChunknotes_react_app||[]).push([[344],{"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./src/components/TotalBlock/TotalBlock.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:function(){return Simple},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TotalBlock_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),store=__webpack_require__("./src/redux/store/index.ts"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),hook=__webpack_require__("./src/hook.ts"),utils_changeTotalData=function changeTotalData(activeData,archiveData){var taskActive=activeData.filter((function(item){return"Task"===item.categoryValue})),randomActive=activeData.filter((function(item){return"Random Thought"===item.categoryValue})),ideaActive=activeData.filter((function(item){return"Idea"===item.categoryValue})),taskArchive=archiveData.filter((function(item){return"Task"===item.categoryValue})),randomArchive=archiveData.filter((function(item){return"Random Thought"===item.categoryValue})),ideaArchive=archiveData.filter((function(item){return"Idea"===item.categoryValue}));return{taskActive:taskActive.length,taskArchive:taskArchive.length,randomActive:randomActive.length,randomArchive:randomArchive.length,ideaActive:ideaActive.length,ideaArchive:ideaArchive.length}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TotalItem=function TotalItem(_ref){var imgSrc=_ref.imgSrc,categoryName=_ref.categoryName,categoryActive=_ref.categoryActive,categoryArchive=_ref.categoryArchive;return(0,jsx_runtime.jsxs)("div",{className:"py-2.5 pr-0 pl-2.5 mb-5 grid grid-cols-[3fr_2fr_2fr_3fr] bg-gray-200 items-center",children:[(0,jsx_runtime.jsxs)("div",{className:"flex gap-2 items-center text-gray-400 font-bold",children:[(0,jsx_runtime.jsx)("img",{src:imgSrc,className:"w-10 h-10 object-cover",alt:"iconName"}),(0,jsx_runtime.jsx)("span",{children:categoryName})]}),(0,jsx_runtime.jsx)("span",{className:"text-gray-400 font-bold text-center",children:categoryActive}),(0,jsx_runtime.jsx)("span",{className:"text-gray-400 font-bold text-center",children:categoryArchive})]})},TotalItem_TotalItem=TotalItem;try{TotalItem.displayName="TotalItem",TotalItem.__docgenInfo={description:"",displayName:"TotalItem",props:{imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!0,type:{name:"string"}},categoryName:{defaultValue:null,description:"",name:"categoryName",required:!0,type:{name:"string"}},categoryActive:{defaultValue:null,description:"",name:"categoryActive",required:!0,type:{name:"number"}},categoryArchive:{defaultValue:null,description:"",name:"categoryArchive",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TotalItem/TotalItem.tsx#TotalItem"]={docgenInfo:TotalItem.__docgenInfo,name:"TotalItem",path:"src/components/TotalItem/TotalItem.tsx#TotalItem"})}catch(__react_docgen_typescript_loader_error){}var TotalBlock=function TotalBlock(){var initialState={taskActive:0,taskArchive:0,randomActive:0,randomArchive:0,ideaActive:0,ideaArchive:0},notes=(0,hook.C)((function(state){return state.notes.notes})),archivedNotes=(0,hook.C)((function(state){return state.notes.archivedNotes})),_useState=(0,react.useState)(initialState),_useState2=(0,slicedToArray.Z)(_useState,2),totalData=_useState2[0],setTotalData=_useState2[1];return(0,react.useEffect)((function(){if(notes.length>0||archivedNotes.length>0){var totalResult=utils_changeTotalData(notes,archivedNotes);setTotalData(totalResult)}else setTotalData(initialState)}),[notes,archivedNotes]),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-[3fr_2fr_2fr_3fr] bg-neutral-400 text-white mb-4 text-lg",children:[(0,jsx_runtime.jsx)("div",{className:"p-3 text-center font-bold",children:"Note Category"}),(0,jsx_runtime.jsx)("div",{className:"p-3 text-center font-bold",children:"Active"}),(0,jsx_runtime.jsx)("div",{className:"p-3 text-center font-bold",children:"Archived"})]}),(0,jsx_runtime.jsxs)("div",{children:[(totalData.taskActive>0||totalData.taskArchive>0)&&(0,jsx_runtime.jsx)(TotalItem_TotalItem,{imgSrc:"./img/task.png",categoryName:"Task",categoryActive:totalData.taskActive,categoryArchive:totalData.taskArchive}),(totalData.randomActive>0||totalData.randomArchive>0)&&(0,jsx_runtime.jsx)(TotalItem_TotalItem,{imgSrc:"./img/random.png",categoryName:"Random Thought",categoryActive:totalData.randomActive,categoryArchive:totalData.randomArchive}),(totalData.ideaActive>0||totalData.ideaArchive>0)&&(0,jsx_runtime.jsx)(TotalItem_TotalItem,{imgSrc:"./img/idea.png",categoryName:"Idea",categoryActive:totalData.ideaActive,categoryArchive:totalData.ideaArchive}),0===notes.length&&(0,jsx_runtime.jsx)("div",{className:"text-center my-5 mx-0",children:"No data"})]})]})},TotalBlock_TotalBlock=TotalBlock;try{TotalBlock.displayName="TotalBlock",TotalBlock.__docgenInfo={description:"",displayName:"TotalBlock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TotalBlock/TotalBlock.tsx#TotalBlock"]={docgenInfo:TotalBlock.__docgenInfo,name:"TotalBlock",path:"src/components/TotalBlock/TotalBlock.tsx#TotalBlock"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/index.css");var _Simple$parameters,_Simple$parameters2,_Simple$parameters2$d,TotalBlock_stories={title:"Components/TotalBlock",component:TotalBlock_TotalBlock,decorators:[function(Story){return(0,jsx_runtime.jsx)(es.zt,{store:store.Z,children:(0,jsx_runtime.jsx)(Story,{})})}],parameters:{layout:"centered"},tags:["autodocs"]},Simple={};Simple.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Simple.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Simple$parameters=Simple.parameters)||void 0===_Simple$parameters?void 0:_Simple$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Simple$parameters2=Simple.parameters)||void 0===_Simple$parameters2||null===(_Simple$parameters2$d=_Simple$parameters2.docs)||void 0===_Simple$parameters2$d?void 0:_Simple$parameters2$d.source)})});var __namedExportsOrder=["Simple"]},"./src/hook.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return useAppSelector},T:function(){return useAppDispatch}});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),useAppDispatch=function useAppDispatch(){return(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.I0)()},useAppSelector=react_redux__WEBPACK_IMPORTED_MODULE_0__.v9},"./src/redux/slice/archiveBlockSlice.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{al:function(){return openArchiveBlock},cD:function(){return closeArchiveBlock}});var archiveBlockSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").oM)({name:"archivedBlock",initialState:{openArchiveBlock:!1},reducers:{openArchiveBlock:function openArchiveBlock(state){state.openArchiveBlock=!0},closeArchiveBlock:function closeArchiveBlock(state){state.openArchiveBlock=!1}}}),_archiveBlockSlice$ac=archiveBlockSlice.actions,openArchiveBlock=_archiveBlockSlice$ac.openArchiveBlock,closeArchiveBlock=_archiveBlockSlice$ac.closeArchiveBlock;__webpack_exports__.ZP=archiveBlockSlice.reducer},"./src/redux/slice/formSlice.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{BQ:function(){return openForm},zd:function(){return closeForm}});var formSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").oM)({name:"isForm",initialState:{openForm:!1},reducers:{openForm:function openForm(state){state.openForm=!0},closeForm:function closeForm(state){state.openForm=!1}}}),_formSlice$actions=formSlice.actions,openForm=_formSlice$actions.openForm,closeForm=_formSlice$actions.closeForm;__webpack_exports__.ZP=formSlice.reducer},"./src/redux/slice/notesSlice.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{AL:function(){return addNote},Bn:function(){return archiveNote},_V:function(){return unzipNote},f_:function(){return deleteNote},iW:function(){return editNote}});var notesSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").oM)({name:"notes",initialState:{notes:[{id:1690743110204,nameValue:"Сook food 05.08.2023 or 07/08/2023",formattedDate:"July 27, 2023",categoryValue:"Idea",contentValue:"Bake a pie",datesValue:"05/08/2023, 07/08/2023",archived:!1},{id:1690743110210,nameValue:"Go to the dentist 01/08/2023",formattedDate:"July 27, 2023",categoryValue:"Task",contentValue:"Examine teeth",datesValue:"01/08/2023",archived:!1},{id:1690743110224,nameValue:"Read book",formattedDate:"July 27, 2023",categoryValue:"Task",contentValue:"A Smarter Way to Learn JavaScript",datesValue:"",archived:!1},{id:1690743110234,nameValue:"Develop mobile App for language learning",formattedDate:"July 27, 2023",categoryValue:"Idea",contentValue:"React Native, MUI",datesValue:"",archived:!1},{id:1690743110274,nameValue:"Complete project report",formattedDate:"July 27, 2023",categoryValue:"Task",contentValue:"Deadline 03.08.2023",datesValue:"03/08/2023",archived:!1}],archivedNotes:[{id:1690743110367,nameValue:"Design a smart home automation system",formattedDate:"July 27, 2023",categoryValue:"Random Thought",contentValue:"Lighting, smart sockets",datesValue:"",archived:!0},{id:1690743110575,nameValue:"Prepare presentation",formattedDate:"July 27, 2023",categoryValue:"Task",contentValue:"Must use Canva or PowerPoint",datesValue:"",archived:!0}]},reducers:{addNote:function addNote(state,action){state.notes.unshift(action.payload)},editNote:function editNote(state,action){var _action$payload=action.payload,id=_action$payload.id,nameValue=_action$payload.nameValue,categoryValue=_action$payload.categoryValue,contentValue=_action$payload.contentValue,datesValue=_action$payload.datesValue,note=state.notes.find((function(note){return note.id===id})),arNote=state.archivedNotes.find((function(note){return note.id===id}));note?(note.nameValue=nameValue,note.categoryValue=categoryValue,note.contentValue=contentValue,note.datesValue=datesValue):arNote&&(arNote.nameValue=nameValue,arNote.categoryValue=categoryValue,arNote.contentValue=contentValue,arNote.datesValue=datesValue)},deleteNote:function deleteNote(state,action){state.notes.find((function(note){return note.id===action.payload}))?state.notes=state.notes.filter((function(note){return note.id!==action.payload})):state.archivedNotes=state.archivedNotes.filter((function(note){return note.id!==action.payload}))},archiveNote:function archiveNote(state,action){var noteToArchive=state.notes.find((function(note){return note.id===action.payload}));noteToArchive&&(noteToArchive.archived=!noteToArchive.archived,state.archivedNotes.unshift(noteToArchive),state.notes=state.notes.filter((function(note){return note.id!==action.payload})))},unzipNote:function unzipNote(state,action){var noteToUnzip=state.archivedNotes.find((function(note){return note.id===action.payload}));noteToUnzip&&(noteToUnzip.archived=!noteToUnzip.archived,state.notes.unshift(noteToUnzip),state.archivedNotes=state.archivedNotes.filter((function(note){return note.id!==action.payload})))}}}),_notesSlice$actions=notesSlice.actions,addNote=_notesSlice$actions.addNote,editNote=_notesSlice$actions.editNote,deleteNote=_notesSlice$actions.deleteNote,archiveNote=_notesSlice$actions.archiveNote,unzipNote=_notesSlice$actions.unzipNote;__webpack_exports__.ZP=notesSlice.reducer},"./src/redux/store/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),_slice_notesSlice__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/redux/slice/notesSlice.ts"),_slice_formSlice__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/redux/slice/formSlice.ts"),_slice_archiveBlockSlice__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/slice/archiveBlockSlice.ts"),store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.xC)({reducer:{notes:_slice_notesSlice__WEBPACK_IMPORTED_MODULE_0__.ZP,form:_slice_formSlice__WEBPACK_IMPORTED_MODULE_1__.ZP,archiveBlock:_slice_archiveBlockSlice__WEBPACK_IMPORTED_MODULE_2__.ZP}});__webpack_exports__.Z=store},"./src/index.css":function(){}}]);