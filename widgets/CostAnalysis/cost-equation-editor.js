// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/cost-equation-editor.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n    \x3cdiv class\x3d"esriCTCostEquationTitle"\x3e\r\n      ${nls.workBench.costEquationTitle}\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"costEquationEditorNode"\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis"  title\x3d"${nls.workBench.geographyTitle}"\x3e\r\n            ${nls.workBench.geographyTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth"\x3e\r\n            \x3cdiv aria-label\x3d"${nls.workBench.geographyTitle}" class\x3d"esriCTFullWidth" readonly  data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"geographyValue"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis"  title\x3d"${nls.workBench.scenarioTitle}"\x3e\r\n            ${nls.workBench.scenarioTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth"\x3e\r\n            \x3cdiv class\x3d"esriCTFullWidth" data-dojo-type\x3d"jimu/dijit/formSelect" data-dojo-attach-point\x3d"scenarioValue" aria-label\x3d"${nls.workBench.scenarioTitle}"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis" title\x3d"${nls.workBench.newCostEquationTitle}"\x3e\r\n            ${nls.workBench.newCostEquationTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth" data-dojo-attach-point\x3d"newCostEquationParent"\x3e\r\n            \x3cdiv class\x3d\x3d"esriCTFullWidth" style\x3d"min-height:70px;" spellcheck\x3d"false" data-dojo-type\x3d"dijit/form/Textarea" data-dojo-attach-point\x3d"newCostEquationValue" required\x3d"true"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n           \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis"  title\x3d"${nls.workBench.defaultCostEquationTitle}"\x3e\r\n            ${nls.workBench.defaultCostEquationTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth"\x3e\r\n            \x3cdiv class\x3d"esriCTFullWidth" style\x3d"min-height:70px;" spellcheck\x3d"false" readonly data-dojo-type\x3d"dijit/form/Textarea" data-dojo-attach-point\x3d"defaultCostEquationValue"\r\n            aria-label\x3d"${nls.workBench.defaultCostEquationTitle}"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTFullWidth"\x3e\r\n          \x3cdiv style\x3d"outline-offset: -2px;" tabindex\x3d"0" role\x3d"presentation" class\x3d"esriCTHint" data-dojo-attach-point\x3d"costEquationHint"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButton" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.common.ok}"\x3e${nls.common.ok}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"cancelButton" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.common.cancel}"\x3e${nls.common.cancel}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./cost-equation-editor.html dojo/_base/lang dojo/_base/array dojo/on dojo/dom-attr dojo/dom-class jimu/utils dojo/keys dojo/_base/event dijit/focus dijit/form/Textarea dijit/form/TextBox jimu/dijit/formSelect".split(" "),function(u,v,w,x,y,d,z,f,q,m,h,k,r,A){return u([v,w,x],{templateString:y,baseClass:"jimu-widget-cost-analysis-equation-editor",_groupInfo:null,postCreate:function(){this.inherited(arguments);
q.set(this.costEquationHint,"innerHTML",this.nls.workBench.costingInfoHintText);var a=h.stripHTML(this.nls.workBench.costingInfoHintText);q.set(this.costEquationHint,"aria-label",a)},startup:function(){this.inherited(arguments);this.own(f(this.okButton,"click",d.hitch(this,this._onOkButtonClicked)));this.own(f(this.okButton,"keydown",d.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)r.stop(a),this._onOkButtonClicked()})));this.own(f(this.cancelButton,"click",d.hitch(this,function(){this.emit("onCancelButtonClicked")})));
this.own(f(this.cancelButton,"keydown",d.hitch(this,function(a){if(a.keyCode===k.ENTER||a.keyCode===k.SPACE)r.stop(a),this.emit("onCancelButtonClicked")})));this.own(f(this.newCostEquationValue,"change",d.hitch(this,this._onEquationChange)));this.own(f(this.scenarioValue,"change",d.hitch(this,this._onScenarioChange)))},_onOkButtonClicked:function(){var a={};m.contains(this.newCostEquationParent,"esriCTInvalidEquation")?this.appUtils.showMessage(this.nls.workBench.errorInvalidCostEquation):(a=this.scenarioValue._getSelectedOptionsAttr(),
this._groupInfo.scenario!==a.scenario||this._groupInfo.equation.toLowerCase()!==this.newCostEquationValue.get("value").toLowerCase()?(a={templateInfo:{COSTEQUATION:this.newCostEquationValue.get("value"),SCENARIO:a.scenario},groupInfo:this._groupInfo},this.emit("onOkButtonClicked",a)):this.emit("onCancelButtonClicked"))},_onEquationChange:function(){var a=!1;var c=h.sanitizeHTML(this.newCostEquationValue.get("value"));(a=this.appUtils.validateEquation(c))?(this.newCostEquationValue.set("value",c),
m.remove(this.newCostEquationParent,"esriCTInvalidEquation")):m.add(this.newCostEquationParent,"esriCTInvalidEquation")},_onScenarioChange:function(){var a=this.scenarioValue._getSelectedOptionsAttr();this.newCostEquationValue.set("value",this._groupInfo.scenario===a.scenario?this._groupInfo.equation:a.costEquation);this.defaultCostEquationValue.set("value",a.defaultEquation)},setGroupInfo:function(a){var c=a.region;var g=a.scenario;"null"===c&&(c=this.nls.scenarioSelection.noneText);this._groupInfo=
a;this.geographyValue.set("value",c);a=this._getConfiguredCostEquations(a.layerId,a.templateName,a.region,g);this.scenarioValue.set("options",[]);this.scenarioValue.addOption(a);this._add508SupportCostEquationEditor()},_getConfiguredCostEquations:function(a,c,g,B){var n;var t=[];var l=[];this.config.costingInfoSettings.hasOwnProperty(a)&&(t=this.config.costingInfoSettings[a]);"null"===g&&(g="");z.forEach(t,d.hitch(this,function(b){if(b.geography===g&&b.featureTemplate===c){var e;var p=e=b.scenario;
e||(e=this.nls.scenarioSelection.noneText,p="null");e={label:e,value:b.costEquation,costEquation:b.costEquation,defaultEquation:b.costEquation,scenario:p,selected:!1};B===p&&(e.selected=!0,this.newCostEquationValue.set("value",this._groupInfo.equation),this.defaultCostEquationValue.set("value",b.costEquation));l.push(e)}""===b.geography&&""===b.scenario&&b.featureTemplate===c&&(n=b.costEquation)}));0===l.length&&(l.push({label:this.nls.scenarioSelection.noneText,value:this._groupInfo.equation,costEquation:this._groupInfo.equation,
defaultEquation:n,scenario:"null",selected:!0}),this.newCostEquationValue.set("value",this._groupInfo.equation),this.defaultCostEquationValue.set("value",n));return l},_add508SupportCostEquationEditor:function(){h.initFirstFocusNode(this.widgetDomNode,this.geographyValue.textbox);A.focus(this.geographyValue.textbox);h.initLastFocusNode(this.widgetDomNode,this.cancelButton)}})});