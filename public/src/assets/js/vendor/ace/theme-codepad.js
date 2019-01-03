ace.define("ace/theme/codepad",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-codepad";
exports.cssText = ".ace-codepad .ace_gutter {\
background: #ebebeb;\
color: #bdbdbd;\
overflow : hidden;\
}\
.ace-codepad .ace_print-margin {\
width: 1px;\
background: #fafafa !important;\
}\
.ace-codepad {\
font: 13px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;\
background-color: #fafafa;\
color: #424242;\
}\
.ace-codepad .ace_cursor {\
color: #bdbdbd;\
}\
.ace-codepad .ace_invisible {\
color: #BDBDBD;\
}\
.ace-codepad .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-codepad .ace_constant.ace_language {\
color: #6A1B9A;\
}\
.ace-codepad .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-codepad .ace_invalid {\
background-color: rgb(153, 0, 0);\
color: white;\
}\
.ace-codepad .ace_fold {\
}\
.ace-codepad .ace_support.ace_function {\
color: #EF6C00;\
}\
.ace-codepad .ace_support.ace_constant {\
color: #00695C;\
}\
.ace-codepad .ace_support.ace_type,\
.ace-codepad .ace_support.ace_class\
.ace-codepad .ace_support.ace_other {\
color: #0277bd;\
}\
.ace-codepad .ace_variable.ace_parameter {\
font-style:italic;\
color: #FD971F;\
}\
.ace-codepad .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-codepad .ace_comment {\
color: #236e24;\
}\
.ace-codepad .ace_comment.ace_doc {\
color: #2E7D32;\
}\
.ace-codepad .ace_comment.ace_doc.ace_tag {\
color: #43A047;\
}\
.ace-codepad .ace_constant.ace_numeric {\
color: #ad1457;\
}\
.ace-codepad .ace_variable {\
color: #00838F;\
}\
.ace-codepad .ace_xml-pe {\
color: #708090;\
}\
.ace-codepad .ace_entity.ace_name.ace_function {\
color: #00838f;\
}\
.ace-codepad .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-codepad .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-codepad .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-codepad .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-codepad .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-codepad .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-codepad .ace_marker-layer .ace_active-line {\
background: fafafa;\
}\
.ace-codepad .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-codepad .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-codepad .ace_storage,\
.ace-codepad .ace_keyword,\
.ace-codepad .ace_meta.ace_tag {\
color: #AD1457;\
}\
.ace-codepad .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-codepad .ace_string {\
color: #c62828;\
}\
.ace-codepad .ace_entity.ace_other.ace_attribute-name {\
color: #2E7D32;\
}\
.ace-codepad .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
