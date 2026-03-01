gdjs.setelah_32ikan1Code = {};
gdjs.setelah_32ikan1Code.localVariables = [];
gdjs.setelah_32ikan1Code.idToCallbackMap = new Map();
gdjs.setelah_32ikan1Code.GDbgObjects1= [];
gdjs.setelah_32ikan1Code.GDbgObjects2= [];
gdjs.setelah_32ikan1Code.GDbgObjects3= [];
gdjs.setelah_32ikan1Code.GDrusdiObjects1= [];
gdjs.setelah_32ikan1Code.GDrusdiObjects2= [];
gdjs.setelah_32ikan1Code.GDrusdiObjects3= [];
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1= [];
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects2= [];
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects3= [];
gdjs.setelah_32ikan1Code.GDiqbalObjects1= [];
gdjs.setelah_32ikan1Code.GDiqbalObjects2= [];
gdjs.setelah_32ikan1Code.GDiqbalObjects3= [];
gdjs.setelah_32ikan1Code.GDteksiqbalObjects1= [];
gdjs.setelah_32ikan1Code.GDteksiqbalObjects2= [];
gdjs.setelah_32ikan1Code.GDteksiqbalObjects3= [];
gdjs.setelah_32ikan1Code.GDnextObjects1= [];
gdjs.setelah_32ikan1Code.GDnextObjects2= [];
gdjs.setelah_32ikan1Code.GDnextObjects3= [];
gdjs.setelah_32ikan1Code.GDnggaObjects1= [];
gdjs.setelah_32ikan1Code.GDnggaObjects2= [];
gdjs.setelah_32ikan1Code.GDnggaObjects3= [];
gdjs.setelah_32ikan1Code.GDnext2Objects1= [];
gdjs.setelah_32ikan1Code.GDnext2Objects2= [];
gdjs.setelah_32ikan1Code.GDnext2Objects3= [];
gdjs.setelah_32ikan1Code.GDvolObjects1= [];
gdjs.setelah_32ikan1Code.GDvolObjects2= [];
gdjs.setelah_32ikan1Code.GDvolObjects3= [];
gdjs.setelah_32ikan1Code.GDbackObjects1= [];
gdjs.setelah_32ikan1Code.GDbackObjects2= [];
gdjs.setelah_32ikan1Code.GDbackObjects3= [];


gdjs.setelah_32ikan1Code.asyncCallback12585484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.setelah_32ikan1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ngga"), gdjs.setelah_32ikan1Code.GDnggaObjects3);

{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnggaObjects3.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnggaObjects3[i].hide(false);
}
}
gdjs.setelah_32ikan1Code.localVariables.length = 0;
}
gdjs.setelah_32ikan1Code.idToCallbackMap.set(12585484, gdjs.setelah_32ikan1Code.asyncCallback12585484);
gdjs.setelah_32ikan1Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.setelah_32ikan1Code.localVariables);
/* Don't save ngga as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.setelah_32ikan1Code.asyncCallback12585484(runtimeScene, asyncObjectsList)), 12585484, asyncObjectsList);
}
}

}


};gdjs.setelah_32ikan1Code.asyncCallback12585412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.setelah_32ikan1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("iqbal"), gdjs.setelah_32ikan1Code.GDiqbalObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("next"), gdjs.setelah_32ikan1Code.GDnextObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("teksiqbal"), gdjs.setelah_32ikan1Code.GDteksiqbalObjects2);

{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDiqbalObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDiqbalObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteksiqbalObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteksiqbalObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnextObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.setelah_32ikan1Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.setelah_32ikan1Code.localVariables.length = 0;
}
gdjs.setelah_32ikan1Code.idToCallbackMap.set(12585412, gdjs.setelah_32ikan1Code.asyncCallback12585412);
gdjs.setelah_32ikan1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.setelah_32ikan1Code.localVariables);
for (const obj of gdjs.setelah_32ikan1Code.GDiqbalObjects1) asyncObjectsList.addObject("iqbal", obj);
for (const obj of gdjs.setelah_32ikan1Code.GDnextObjects1) asyncObjectsList.addObject("next", obj);
for (const obj of gdjs.setelah_32ikan1Code.GDnggaObjects1) asyncObjectsList.addObject("ngga", obj);
for (const obj of gdjs.setelah_32ikan1Code.GDteksiqbalObjects1) asyncObjectsList.addObject("teksiqbal", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.setelah_32ikan1Code.asyncCallback12585412(runtimeScene, asyncObjectsList)), 12585412, asyncObjectsList);
}
}

}


};gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDnggaObjects1Objects = Hashtable.newFrom({"ngga": gdjs.setelah_32ikan1Code.GDnggaObjects1});
gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDnext2Objects1Objects = Hashtable.newFrom({"next2": gdjs.setelah_32ikan1Code.GDnext2Objects1});
gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDnext2Objects1Objects = Hashtable.newFrom({"next2": gdjs.setelah_32ikan1Code.GDnext2Objects1});
gdjs.setelah_32ikan1Code.asyncCallback18322628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.setelah_32ikan1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "map2", false);
}
gdjs.setelah_32ikan1Code.localVariables.length = 0;
}
gdjs.setelah_32ikan1Code.idToCallbackMap.set(18322628, gdjs.setelah_32ikan1Code.asyncCallback18322628);
gdjs.setelah_32ikan1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.setelah_32ikan1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.setelah_32ikan1Code.asyncCallback18322628(runtimeScene, asyncObjectsList)), 18322628, asyncObjectsList);
}
}

}


};gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDvolObjects1Objects = Hashtable.newFrom({"vol": gdjs.setelah_32ikan1Code.GDvolObjects1});
gdjs.setelah_32ikan1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.setelah_32ikan1Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.setelah_32ikan1Code.GDnextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.setelah_32ikan1Code.GDnggaObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.setelah_32ikan1Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.setelah_32ikan1Code.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnggaObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnggaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDiqbalObjects1[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteksiqbalObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnextObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.setelah_32ikan1Code.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.setelah_32ikan1Code.GDnggaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDnggaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17015604);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.setelah_32ikan1Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.setelah_32ikan1Code.GDnextObjects1);
/* Reuse gdjs.setelah_32ikan1Code.GDnggaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.setelah_32ikan1Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.setelah_32ikan1Code.GDteksiqbalObjects1);
gdjs.setelah_32ikan1Code.GDnext2Objects1.length = 0;

{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnggaObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnggaObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDiqbalObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteksiqbalObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnextObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnextObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDnext2Objects1Objects, 1794, 951, "Layer3");
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnext2Objects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnext2Objects1[i].getBehavior("Resizable").setWidth(73);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDnext2Objects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDnext2Objects1[i].getBehavior("Resizable").setHeight(70);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next2"), gdjs.setelah_32ikan1Code.GDnext2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDnext2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9293020);
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
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.setelah_32ikan1Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.setelah_32ikan1Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.setelah_32ikan1Code.GDteksiqbalObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDiqbalObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteksiqbalObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDteksiqbalObjects1[i].getBehavior("Animation").setAnimationName("2");
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

{ //Subevents
gdjs.setelah_32ikan1Code.eventsList2(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.setelah_32ikan1Code.GDvolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan1Code.mapOfGDgdjs_9546setelah_959532ikan1Code_9546GDvolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9465612);
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.setelah_32ikan1Code.GDvolObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("on");
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.setelah_32ikan1Code.GDvolObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan1Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan1Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.setelah_32ikan1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.setelah_32ikan1Code.GDbgObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDbgObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDbgObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDrusdiObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDrusdiObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDrusdiObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDiqbalObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDiqbalObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDiqbalObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDteksiqbalObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDteksiqbalObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDteksiqbalObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDnextObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDnextObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDnextObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDnggaObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDnggaObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDnggaObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDnext2Objects1.length = 0;
gdjs.setelah_32ikan1Code.GDnext2Objects2.length = 0;
gdjs.setelah_32ikan1Code.GDnext2Objects3.length = 0;
gdjs.setelah_32ikan1Code.GDvolObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDvolObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDvolObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDbackObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDbackObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDbackObjects3.length = 0;

gdjs.setelah_32ikan1Code.eventsList3(runtimeScene);
gdjs.setelah_32ikan1Code.GDbgObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDbgObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDbgObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDrusdiObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDrusdiObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDrusdiObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDteks_9595rusdiObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDiqbalObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDiqbalObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDiqbalObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDteksiqbalObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDteksiqbalObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDteksiqbalObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDnextObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDnextObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDnextObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDnggaObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDnggaObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDnggaObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDnext2Objects1.length = 0;
gdjs.setelah_32ikan1Code.GDnext2Objects2.length = 0;
gdjs.setelah_32ikan1Code.GDnext2Objects3.length = 0;
gdjs.setelah_32ikan1Code.GDvolObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDvolObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDvolObjects3.length = 0;
gdjs.setelah_32ikan1Code.GDbackObjects1.length = 0;
gdjs.setelah_32ikan1Code.GDbackObjects2.length = 0;
gdjs.setelah_32ikan1Code.GDbackObjects3.length = 0;


return;

}

gdjs['setelah_32ikan1Code'] = gdjs.setelah_32ikan1Code;
