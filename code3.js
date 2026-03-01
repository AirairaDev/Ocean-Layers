gdjs.ch2Code = {};
gdjs.ch2Code.localVariables = [];
gdjs.ch2Code.idToCallbackMap = new Map();
gdjs.ch2Code.GDbgObjects1= [];
gdjs.ch2Code.GDbgObjects2= [];
gdjs.ch2Code.GDrusdiObjects1= [];
gdjs.ch2Code.GDrusdiObjects2= [];
gdjs.ch2Code.GDteks_9595rusdiObjects1= [];
gdjs.ch2Code.GDteks_9595rusdiObjects2= [];
gdjs.ch2Code.GDiqbalObjects1= [];
gdjs.ch2Code.GDiqbalObjects2= [];
gdjs.ch2Code.GDteksiqbalObjects1= [];
gdjs.ch2Code.GDteksiqbalObjects2= [];
gdjs.ch2Code.GDnextObjects1= [];
gdjs.ch2Code.GDnextObjects2= [];
gdjs.ch2Code.GDvolObjects1= [];
gdjs.ch2Code.GDvolObjects2= [];
gdjs.ch2Code.GDbackObjects1= [];
gdjs.ch2Code.GDbackObjects2= [];


gdjs.ch2Code.asyncCallback18216924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ch2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("iqbal"), gdjs.ch2Code.GDiqbalObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("next"), gdjs.ch2Code.GDnextObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("teksiqbal"), gdjs.ch2Code.GDteksiqbalObjects2);

{for(var i = 0, len = gdjs.ch2Code.GDiqbalObjects2.length ;i < len;++i) {
    gdjs.ch2Code.GDiqbalObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.ch2Code.GDteksiqbalObjects2.length ;i < len;++i) {
    gdjs.ch2Code.GDteksiqbalObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.ch2Code.GDnextObjects2.length ;i < len;++i) {
    gdjs.ch2Code.GDnextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
gdjs.ch2Code.localVariables.length = 0;
}
gdjs.ch2Code.idToCallbackMap.set(18216924, gdjs.ch2Code.asyncCallback18216924);
gdjs.ch2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ch2Code.localVariables);
for (const obj of gdjs.ch2Code.GDiqbalObjects1) asyncObjectsList.addObject("iqbal", obj);
for (const obj of gdjs.ch2Code.GDnextObjects1) asyncObjectsList.addObject("next", obj);
for (const obj of gdjs.ch2Code.GDteksiqbalObjects1) asyncObjectsList.addObject("teksiqbal", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.ch2Code.asyncCallback18216924(runtimeScene, asyncObjectsList)), 18216924, asyncObjectsList);
}
}

}


};gdjs.ch2Code.mapOfGDgdjs_9546ch2Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.ch2Code.GDnextObjects1});
gdjs.ch2Code.asyncCallback17285332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ch2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "setelah ikan2", false);
}
gdjs.ch2Code.localVariables.length = 0;
}
gdjs.ch2Code.idToCallbackMap.set(17285332, gdjs.ch2Code.asyncCallback17285332);
gdjs.ch2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ch2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.ch2Code.asyncCallback17285332(runtimeScene, asyncObjectsList)), 17285332, asyncObjectsList);
}
}

}


};gdjs.ch2Code.mapOfGDgdjs_9546ch2Code_9546GDvolObjects1Objects = Hashtable.newFrom({"vol": gdjs.ch2Code.GDvolObjects1});
gdjs.ch2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.ch2Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.ch2Code.GDnextObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.ch2Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.ch2Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.ch2Code.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.ch2Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDiqbalObjects1[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.ch2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteksiqbalObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.ch2Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.ch2Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ch2Code.GDnextObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDnextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.ch2Code.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.ch2Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ch2Code.mapOfGDgdjs_9546ch2Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16738844);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.ch2Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.ch2Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.ch2Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.ch2Code.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.ch2Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.ch2Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteks_9595rusdiObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ch2Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDiqbalObjects1[i].hide();
}
for(var i = 0, len = gdjs.ch2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteksiqbalObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.ch2Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.ch2Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.ch2Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.ch2Code.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.ch2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteksiqbalObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}
{for(var i = 0, len = gdjs.ch2Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.ch2Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ch2Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDiqbalObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.ch2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteksiqbalObjects1[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.ch2Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.ch2Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.ch2Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.ch2Code.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.ch2Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDiqbalObjects1[i].hide();
}
for(var i = 0, len = gdjs.ch2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteksiqbalObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ch2Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteks_9595rusdiObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}
{for(var i = 0, len = gdjs.ch2Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.ch2Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDteks_9595rusdiObjects1[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ch2Code.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.ch2Code.GDvolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ch2Code.mapOfGDgdjs_9546ch2Code_9546GDvolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16387012);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.ch2Code.GDvolObjects1);
{for(var i = 0, len = gdjs.ch2Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.ch2Code.GDvolObjects1);
{for(var i = 0, len = gdjs.ch2Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.ch2Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.ch2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ch2Code.GDbgObjects1.length = 0;
gdjs.ch2Code.GDbgObjects2.length = 0;
gdjs.ch2Code.GDrusdiObjects1.length = 0;
gdjs.ch2Code.GDrusdiObjects2.length = 0;
gdjs.ch2Code.GDteks_9595rusdiObjects1.length = 0;
gdjs.ch2Code.GDteks_9595rusdiObjects2.length = 0;
gdjs.ch2Code.GDiqbalObjects1.length = 0;
gdjs.ch2Code.GDiqbalObjects2.length = 0;
gdjs.ch2Code.GDteksiqbalObjects1.length = 0;
gdjs.ch2Code.GDteksiqbalObjects2.length = 0;
gdjs.ch2Code.GDnextObjects1.length = 0;
gdjs.ch2Code.GDnextObjects2.length = 0;
gdjs.ch2Code.GDvolObjects1.length = 0;
gdjs.ch2Code.GDvolObjects2.length = 0;
gdjs.ch2Code.GDbackObjects1.length = 0;
gdjs.ch2Code.GDbackObjects2.length = 0;

gdjs.ch2Code.eventsList2(runtimeScene);
gdjs.ch2Code.GDbgObjects1.length = 0;
gdjs.ch2Code.GDbgObjects2.length = 0;
gdjs.ch2Code.GDrusdiObjects1.length = 0;
gdjs.ch2Code.GDrusdiObjects2.length = 0;
gdjs.ch2Code.GDteks_9595rusdiObjects1.length = 0;
gdjs.ch2Code.GDteks_9595rusdiObjects2.length = 0;
gdjs.ch2Code.GDiqbalObjects1.length = 0;
gdjs.ch2Code.GDiqbalObjects2.length = 0;
gdjs.ch2Code.GDteksiqbalObjects1.length = 0;
gdjs.ch2Code.GDteksiqbalObjects2.length = 0;
gdjs.ch2Code.GDnextObjects1.length = 0;
gdjs.ch2Code.GDnextObjects2.length = 0;
gdjs.ch2Code.GDvolObjects1.length = 0;
gdjs.ch2Code.GDvolObjects2.length = 0;
gdjs.ch2Code.GDbackObjects1.length = 0;
gdjs.ch2Code.GDbackObjects2.length = 0;


return;

}

gdjs['ch2Code'] = gdjs.ch2Code;
