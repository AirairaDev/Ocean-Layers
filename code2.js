gdjs.prologCode = {};
gdjs.prologCode.localVariables = [];
gdjs.prologCode.idToCallbackMap = new Map();
gdjs.prologCode.GDbgObjects1= [];
gdjs.prologCode.GDbgObjects2= [];
gdjs.prologCode.GDteks1Objects1= [];
gdjs.prologCode.GDteks1Objects2= [];
gdjs.prologCode.GDrusdiObjects1= [];
gdjs.prologCode.GDrusdiObjects2= [];
gdjs.prologCode.GDteks_9595rusdiObjects1= [];
gdjs.prologCode.GDteks_9595rusdiObjects2= [];
gdjs.prologCode.GDiqbalObjects1= [];
gdjs.prologCode.GDiqbalObjects2= [];
gdjs.prologCode.GDteksiqbalObjects1= [];
gdjs.prologCode.GDteksiqbalObjects2= [];
gdjs.prologCode.GDnextObjects1= [];
gdjs.prologCode.GDnextObjects2= [];
gdjs.prologCode.GDshadowObjects1= [];
gdjs.prologCode.GDshadowObjects2= [];
gdjs.prologCode.GDpetaObjects1= [];
gdjs.prologCode.GDpetaObjects2= [];
gdjs.prologCode.GDxObjects1= [];
gdjs.prologCode.GDxObjects2= [];
gdjs.prologCode.GDshadow2Objects1= [];
gdjs.prologCode.GDshadow2Objects2= [];
gdjs.prologCode.GDiyaObjects1= [];
gdjs.prologCode.GDiyaObjects2= [];
gdjs.prologCode.GDnggaObjects1= [];
gdjs.prologCode.GDnggaObjects2= [];
gdjs.prologCode.GDnext2Objects1= [];
gdjs.prologCode.GDnext2Objects2= [];
gdjs.prologCode.GDvolObjects1= [];
gdjs.prologCode.GDvolObjects2= [];
gdjs.prologCode.GDbackObjects1= [];
gdjs.prologCode.GDbackObjects2= [];


gdjs.prologCode.asyncCallback18227724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.prologCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("next"), gdjs.prologCode.GDnextObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("teks1"), gdjs.prologCode.GDteks1Objects2);

{for(var i = 0, len = gdjs.prologCode.GDteks1Objects2.length ;i < len;++i) {
    gdjs.prologCode.GDteks1Objects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDnextObjects2.length ;i < len;++i) {
    gdjs.prologCode.GDnextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
gdjs.prologCode.localVariables.length = 0;
}
gdjs.prologCode.idToCallbackMap.set(18227724, gdjs.prologCode.asyncCallback18227724);
gdjs.prologCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.prologCode.localVariables);
for (const obj of gdjs.prologCode.GDnextObjects1) asyncObjectsList.addObject("next", obj);
for (const obj of gdjs.prologCode.GDteks1Objects1) asyncObjectsList.addObject("teks1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.prologCode.asyncCallback18227724(runtimeScene, asyncObjectsList)), 18227724, asyncObjectsList);
}
}

}


};gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.prologCode.GDnextObjects1});
gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDxObjects1Objects = Hashtable.newFrom({"x": gdjs.prologCode.GDxObjects1});
gdjs.prologCode.asyncCallback10201284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.prologCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("iya"), gdjs.prologCode.GDiyaObjects2);
gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.prologCode.GDnggaObjects2);
{for(var i = 0, len = gdjs.prologCode.GDiyaObjects2.length ;i < len;++i) {
    gdjs.prologCode.GDiyaObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDnggaObjects2.length ;i < len;++i) {
    gdjs.prologCode.GDnggaObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
gdjs.prologCode.localVariables.length = 0;
}
gdjs.prologCode.idToCallbackMap.set(10201284, gdjs.prologCode.asyncCallback10201284);
gdjs.prologCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.prologCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.prologCode.asyncCallback10201284(runtimeScene, asyncObjectsList)), 10201284, asyncObjectsList);
}
}

}


};gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDiyaObjects1Objects = Hashtable.newFrom({"iya": gdjs.prologCode.GDiyaObjects1});
gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnext2Objects1Objects = Hashtable.newFrom({"next2": gdjs.prologCode.GDnext2Objects1});
gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnext2Objects1Objects = Hashtable.newFrom({"next2": gdjs.prologCode.GDnext2Objects1});
gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnggaObjects1Objects = Hashtable.newFrom({"ngga": gdjs.prologCode.GDnggaObjects1});
gdjs.prologCode.asyncCallback9409060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.prologCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "map1", false);
}
gdjs.prologCode.localVariables.length = 0;
}
gdjs.prologCode.idToCallbackMap.set(9409060, gdjs.prologCode.asyncCallback9409060);
gdjs.prologCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.prologCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.prologCode.asyncCallback9409060(runtimeScene, asyncObjectsList)), 9409060, asyncObjectsList);
}
}

}


};gdjs.prologCode.asyncCallback12448532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.prologCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
gdjs.prologCode.localVariables.length = 0;
}
gdjs.prologCode.idToCallbackMap.set(12448532, gdjs.prologCode.asyncCallback12448532);
gdjs.prologCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.prologCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.prologCode.asyncCallback12448532(runtimeScene, asyncObjectsList)), 12448532, asyncObjectsList);
}
}

}


};gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDvolObjects1Objects = Hashtable.newFrom({"vol": gdjs.prologCode.GDvolObjects1});
gdjs.prologCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.prologCode.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("iya"), gdjs.prologCode.GDiyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.prologCode.GDnextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.prologCode.GDnggaObjects1);
gdjs.copyArray(runtimeScene.getObjects("peta"), gdjs.prologCode.GDpetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.prologCode.GDshadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks1"), gdjs.prologCode.GDteks1Objects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.prologCode.GDteksiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("x"), gdjs.prologCode.GDxObjects1);
{for(var i = 0, len = gdjs.prologCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDshadowObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDpetaObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDpetaObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDxObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiqbalObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDiyaObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiyaObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.prologCode.GDnextObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDnextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.prologCode.GDnggaObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDnggaObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.prologCode.GDteks1Objects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.prologCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.prologCode.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15111068);
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
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks1"), gdjs.prologCode.GDteks1Objects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDteks1Objects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks1Objects1[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.prologCode.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.prologCode.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiqbalObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.prologCode.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.prologCode.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.prologCode.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiqbalObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].getBehavior("Animation").setAnimationName("2");
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
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.prologCode.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.prologCode.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiqbalObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.prologCode.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.prologCode.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.prologCode.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiqbalObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].getBehavior("Animation").setAnimationName("3");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("peta"), gdjs.prologCode.GDpetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.prologCode.GDshadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("x"), gdjs.prologCode.GDxObjects1);
{for(var i = 0, len = gdjs.prologCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDshadowObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDpetaObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDpetaObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDxObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDxObjects1[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("x"), gdjs.prologCode.GDxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDxObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10808860);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("peta"), gdjs.prologCode.GDpetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.prologCode.GDshadowObjects1);
/* Reuse gdjs.prologCode.GDxObjects1 */
{for(var i = 0, len = gdjs.prologCode.GDshadowObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDshadowObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.prologCode.GDpetaObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDpetaObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.prologCode.GDxObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDxObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(7);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].getBehavior("Animation").setAnimationName("4");
}
}

{ //Subevents
gdjs.prologCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("iya"), gdjs.prologCode.GDiyaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDiyaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16998812);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.prologCode.GDiqbalObjects1);
/* Reuse gdjs.prologCode.GDiyaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.prologCode.GDnextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.prologCode.GDnggaObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.prologCode.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.prologCode.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.prologCode.GDteksiqbalObjects1);
gdjs.prologCode.GDnext2Objects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.prologCode.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.prologCode.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.prologCode.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiqbalObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.prologCode.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDteksiqbalObjects1[i].getBehavior("Animation").setAnimationName("3");
}
}
{for(var i = 0, len = gdjs.prologCode.GDnextObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDnextObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnext2Objects1Objects, 1794, 951, "Layer3");
}
{for(var i = 0, len = gdjs.prologCode.GDiyaObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDiyaObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.prologCode.GDnggaObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDnggaObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.prologCode.GDnext2Objects1.length ;i < len;++i) {
    gdjs.prologCode.GDnext2Objects1[i].getBehavior("Resizable").setWidth(73);
}
}
{for(var i = 0, len = gdjs.prologCode.GDnext2Objects1.length ;i < len;++i) {
    gdjs.prologCode.GDnext2Objects1[i].getBehavior("Resizable").setHeight(70);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next2"), gdjs.prologCode.GDnext2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnext2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14023940);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.prologCode.GDnggaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDnggaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15110068);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.prologCode.eventsList2(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.prologCode.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.prologCode.GDvolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.prologCode.mapOfGDgdjs_9546prologCode_9546GDvolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17275724);
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.prologCode.GDvolObjects1);
{for(var i = 0, len = gdjs.prologCode.GDvolObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDvolObjects1[i].getBehavior("Animation").setAnimationName("on");
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.prologCode.GDvolObjects1);
{for(var i = 0, len = gdjs.prologCode.GDvolObjects1.length ;i < len;++i) {
    gdjs.prologCode.GDvolObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.prologCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.prologCode.GDbgObjects1.length = 0;
gdjs.prologCode.GDbgObjects2.length = 0;
gdjs.prologCode.GDteks1Objects1.length = 0;
gdjs.prologCode.GDteks1Objects2.length = 0;
gdjs.prologCode.GDrusdiObjects1.length = 0;
gdjs.prologCode.GDrusdiObjects2.length = 0;
gdjs.prologCode.GDteks_9595rusdiObjects1.length = 0;
gdjs.prologCode.GDteks_9595rusdiObjects2.length = 0;
gdjs.prologCode.GDiqbalObjects1.length = 0;
gdjs.prologCode.GDiqbalObjects2.length = 0;
gdjs.prologCode.GDteksiqbalObjects1.length = 0;
gdjs.prologCode.GDteksiqbalObjects2.length = 0;
gdjs.prologCode.GDnextObjects1.length = 0;
gdjs.prologCode.GDnextObjects2.length = 0;
gdjs.prologCode.GDshadowObjects1.length = 0;
gdjs.prologCode.GDshadowObjects2.length = 0;
gdjs.prologCode.GDpetaObjects1.length = 0;
gdjs.prologCode.GDpetaObjects2.length = 0;
gdjs.prologCode.GDxObjects1.length = 0;
gdjs.prologCode.GDxObjects2.length = 0;
gdjs.prologCode.GDshadow2Objects1.length = 0;
gdjs.prologCode.GDshadow2Objects2.length = 0;
gdjs.prologCode.GDiyaObjects1.length = 0;
gdjs.prologCode.GDiyaObjects2.length = 0;
gdjs.prologCode.GDnggaObjects1.length = 0;
gdjs.prologCode.GDnggaObjects2.length = 0;
gdjs.prologCode.GDnext2Objects1.length = 0;
gdjs.prologCode.GDnext2Objects2.length = 0;
gdjs.prologCode.GDvolObjects1.length = 0;
gdjs.prologCode.GDvolObjects2.length = 0;
gdjs.prologCode.GDbackObjects1.length = 0;
gdjs.prologCode.GDbackObjects2.length = 0;

gdjs.prologCode.eventsList4(runtimeScene);
gdjs.prologCode.GDbgObjects1.length = 0;
gdjs.prologCode.GDbgObjects2.length = 0;
gdjs.prologCode.GDteks1Objects1.length = 0;
gdjs.prologCode.GDteks1Objects2.length = 0;
gdjs.prologCode.GDrusdiObjects1.length = 0;
gdjs.prologCode.GDrusdiObjects2.length = 0;
gdjs.prologCode.GDteks_9595rusdiObjects1.length = 0;
gdjs.prologCode.GDteks_9595rusdiObjects2.length = 0;
gdjs.prologCode.GDiqbalObjects1.length = 0;
gdjs.prologCode.GDiqbalObjects2.length = 0;
gdjs.prologCode.GDteksiqbalObjects1.length = 0;
gdjs.prologCode.GDteksiqbalObjects2.length = 0;
gdjs.prologCode.GDnextObjects1.length = 0;
gdjs.prologCode.GDnextObjects2.length = 0;
gdjs.prologCode.GDshadowObjects1.length = 0;
gdjs.prologCode.GDshadowObjects2.length = 0;
gdjs.prologCode.GDpetaObjects1.length = 0;
gdjs.prologCode.GDpetaObjects2.length = 0;
gdjs.prologCode.GDxObjects1.length = 0;
gdjs.prologCode.GDxObjects2.length = 0;
gdjs.prologCode.GDshadow2Objects1.length = 0;
gdjs.prologCode.GDshadow2Objects2.length = 0;
gdjs.prologCode.GDiyaObjects1.length = 0;
gdjs.prologCode.GDiyaObjects2.length = 0;
gdjs.prologCode.GDnggaObjects1.length = 0;
gdjs.prologCode.GDnggaObjects2.length = 0;
gdjs.prologCode.GDnext2Objects1.length = 0;
gdjs.prologCode.GDnext2Objects2.length = 0;
gdjs.prologCode.GDvolObjects1.length = 0;
gdjs.prologCode.GDvolObjects2.length = 0;
gdjs.prologCode.GDbackObjects1.length = 0;
gdjs.prologCode.GDbackObjects2.length = 0;


return;

}

gdjs['prologCode'] = gdjs.prologCode;
