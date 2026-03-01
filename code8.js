gdjs.map2Code = {};
gdjs.map2Code.localVariables = [];
gdjs.map2Code.idToCallbackMap = new Map();
gdjs.map2Code.GDbgObjects1= [];
gdjs.map2Code.GDbgObjects2= [];
gdjs.map2Code.GDvolObjects1= [];
gdjs.map2Code.GDvolObjects2= [];
gdjs.map2Code.GDbackObjects1= [];
gdjs.map2Code.GDbackObjects2= [];
gdjs.map2Code.GDmapObjects1= [];
gdjs.map2Code.GDmapObjects2= [];
gdjs.map2Code.GDgubukObjects1= [];
gdjs.map2Code.GDgubukObjects2= [];
gdjs.map2Code.GDlockObjects1= [];
gdjs.map2Code.GDlockObjects2= [];
gdjs.map2Code.GDlock2Objects1= [];
gdjs.map2Code.GDlock2Objects2= [];


gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDgubukObjects1Objects = Hashtable.newFrom({"gubuk": gdjs.map2Code.GDgubukObjects1});
gdjs.map2Code.asyncCallback15809484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.map2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prolog", false);
}
gdjs.map2Code.localVariables.length = 0;
}
gdjs.map2Code.idToCallbackMap.set(15809484, gdjs.map2Code.asyncCallback15809484);
gdjs.map2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.map2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.map2Code.asyncCallback15809484(runtimeScene, asyncObjectsList)), 15809484, asyncObjectsList);
}
}

}


};gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDlockObjects1Objects = Hashtable.newFrom({"lock": gdjs.map2Code.GDlockObjects1});
gdjs.map2Code.asyncCallback18191580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.map2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
gdjs.map2Code.localVariables.length = 0;
}
gdjs.map2Code.idToCallbackMap.set(18191580, gdjs.map2Code.asyncCallback18191580);
gdjs.map2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.map2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.map2Code.asyncCallback18191580(runtimeScene, asyncObjectsList)), 18191580, asyncObjectsList);
}
}

}


};gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDlock2Objects1Objects = Hashtable.newFrom({"lock2": gdjs.map2Code.GDlock2Objects1});
gdjs.map2Code.asyncCallback11620132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.map2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ch2", false);
}
gdjs.map2Code.localVariables.length = 0;
}
gdjs.map2Code.idToCallbackMap.set(11620132, gdjs.map2Code.asyncCallback11620132);
gdjs.map2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.map2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.map2Code.asyncCallback11620132(runtimeScene, asyncObjectsList)), 11620132, asyncObjectsList);
}
}

}


};gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.map2Code.GDbackObjects1});
gdjs.map2Code.asyncCallback9849212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.map2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}
gdjs.map2Code.localVariables.length = 0;
}
gdjs.map2Code.idToCallbackMap.set(9849212, gdjs.map2Code.asyncCallback9849212);
gdjs.map2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.map2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.map2Code.asyncCallback9849212(runtimeScene, asyncObjectsList)), 9849212, asyncObjectsList);
}
}

}


};gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDvolObjects1Objects = Hashtable.newFrom({"vol": gdjs.map2Code.GDvolObjects1});
gdjs.map2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("gubuk"), gdjs.map2Code.GDgubukObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDgubukObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13109196);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.map2Code.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("lock"), gdjs.map2Code.GDlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDlockObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9688868);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.map2Code.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("lock2"), gdjs.map2Code.GDlock2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDlock2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18159372);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.map2Code.eventsList2(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.map2Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18333292);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.map2Code.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.map2Code.GDvolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map2Code.mapOfGDgdjs_9546map2Code_9546GDvolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18211460);
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.map2Code.GDvolObjects1);
{for(var i = 0, len = gdjs.map2Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.map2Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("on");
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.map2Code.GDvolObjects1);
{for(var i = 0, len = gdjs.map2Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.map2Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
{
elseEventsChainSatisfied = true;
}

}


};

gdjs.map2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.map2Code.GDbgObjects1.length = 0;
gdjs.map2Code.GDbgObjects2.length = 0;
gdjs.map2Code.GDvolObjects1.length = 0;
gdjs.map2Code.GDvolObjects2.length = 0;
gdjs.map2Code.GDbackObjects1.length = 0;
gdjs.map2Code.GDbackObjects2.length = 0;
gdjs.map2Code.GDmapObjects1.length = 0;
gdjs.map2Code.GDmapObjects2.length = 0;
gdjs.map2Code.GDgubukObjects1.length = 0;
gdjs.map2Code.GDgubukObjects2.length = 0;
gdjs.map2Code.GDlockObjects1.length = 0;
gdjs.map2Code.GDlockObjects2.length = 0;
gdjs.map2Code.GDlock2Objects1.length = 0;
gdjs.map2Code.GDlock2Objects2.length = 0;

gdjs.map2Code.eventsList4(runtimeScene);
gdjs.map2Code.GDbgObjects1.length = 0;
gdjs.map2Code.GDbgObjects2.length = 0;
gdjs.map2Code.GDvolObjects1.length = 0;
gdjs.map2Code.GDvolObjects2.length = 0;
gdjs.map2Code.GDbackObjects1.length = 0;
gdjs.map2Code.GDbackObjects2.length = 0;
gdjs.map2Code.GDmapObjects1.length = 0;
gdjs.map2Code.GDmapObjects2.length = 0;
gdjs.map2Code.GDgubukObjects1.length = 0;
gdjs.map2Code.GDgubukObjects2.length = 0;
gdjs.map2Code.GDlockObjects1.length = 0;
gdjs.map2Code.GDlockObjects2.length = 0;
gdjs.map2Code.GDlock2Objects1.length = 0;
gdjs.map2Code.GDlock2Objects2.length = 0;


return;

}

gdjs['map2Code'] = gdjs.map2Code;
