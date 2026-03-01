gdjs.map1Code = {};
gdjs.map1Code.localVariables = [];
gdjs.map1Code.idToCallbackMap = new Map();
gdjs.map1Code.GDbgObjects1= [];
gdjs.map1Code.GDbgObjects2= [];
gdjs.map1Code.GDvolObjects1= [];
gdjs.map1Code.GDvolObjects2= [];
gdjs.map1Code.GDbackObjects1= [];
gdjs.map1Code.GDbackObjects2= [];
gdjs.map1Code.GDmapObjects1= [];
gdjs.map1Code.GDmapObjects2= [];
gdjs.map1Code.GDgubukObjects1= [];
gdjs.map1Code.GDgubukObjects2= [];
gdjs.map1Code.GDlockObjects1= [];
gdjs.map1Code.GDlockObjects2= [];
gdjs.map1Code.GDlock2Objects1= [];
gdjs.map1Code.GDlock2Objects2= [];


gdjs.map1Code.mapOfGDgdjs_9546map1Code_9546GDgubukObjects1Objects = Hashtable.newFrom({"gubuk": gdjs.map1Code.GDgubukObjects1});
gdjs.map1Code.asyncCallback13140380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.map1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prolog", false);
}
gdjs.map1Code.localVariables.length = 0;
}
gdjs.map1Code.idToCallbackMap.set(13140380, gdjs.map1Code.asyncCallback13140380);
gdjs.map1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.map1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.map1Code.asyncCallback13140380(runtimeScene, asyncObjectsList)), 13140380, asyncObjectsList);
}
}

}


};gdjs.map1Code.mapOfGDgdjs_9546map1Code_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.map1Code.GDbackObjects1});
gdjs.map1Code.asyncCallback17320692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.map1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}
gdjs.map1Code.localVariables.length = 0;
}
gdjs.map1Code.idToCallbackMap.set(17320692, gdjs.map1Code.asyncCallback17320692);
gdjs.map1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.map1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.map1Code.asyncCallback17320692(runtimeScene, asyncObjectsList)), 17320692, asyncObjectsList);
}
}

}


};gdjs.map1Code.mapOfGDgdjs_9546map1Code_9546GDvolObjects1Objects = Hashtable.newFrom({"vol": gdjs.map1Code.GDvolObjects1});
gdjs.map1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("gubuk"), gdjs.map1Code.GDgubukObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map1Code.mapOfGDgdjs_9546map1Code_9546GDgubukObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10786300);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.map1Code.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.map1Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map1Code.mapOfGDgdjs_9546map1Code_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11611844);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.map1Code.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.map1Code.GDvolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.map1Code.mapOfGDgdjs_9546map1Code_9546GDvolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9494636);
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.map1Code.GDvolObjects1);
{for(var i = 0, len = gdjs.map1Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.map1Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("on");
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.map1Code.GDvolObjects1);
{for(var i = 0, len = gdjs.map1Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.map1Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("off");
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

gdjs.map1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.map1Code.GDbgObjects1.length = 0;
gdjs.map1Code.GDbgObjects2.length = 0;
gdjs.map1Code.GDvolObjects1.length = 0;
gdjs.map1Code.GDvolObjects2.length = 0;
gdjs.map1Code.GDbackObjects1.length = 0;
gdjs.map1Code.GDbackObjects2.length = 0;
gdjs.map1Code.GDmapObjects1.length = 0;
gdjs.map1Code.GDmapObjects2.length = 0;
gdjs.map1Code.GDgubukObjects1.length = 0;
gdjs.map1Code.GDgubukObjects2.length = 0;
gdjs.map1Code.GDlockObjects1.length = 0;
gdjs.map1Code.GDlockObjects2.length = 0;
gdjs.map1Code.GDlock2Objects1.length = 0;
gdjs.map1Code.GDlock2Objects2.length = 0;

gdjs.map1Code.eventsList2(runtimeScene);
gdjs.map1Code.GDbgObjects1.length = 0;
gdjs.map1Code.GDbgObjects2.length = 0;
gdjs.map1Code.GDvolObjects1.length = 0;
gdjs.map1Code.GDvolObjects2.length = 0;
gdjs.map1Code.GDbackObjects1.length = 0;
gdjs.map1Code.GDbackObjects2.length = 0;
gdjs.map1Code.GDmapObjects1.length = 0;
gdjs.map1Code.GDmapObjects2.length = 0;
gdjs.map1Code.GDgubukObjects1.length = 0;
gdjs.map1Code.GDgubukObjects2.length = 0;
gdjs.map1Code.GDlockObjects1.length = 0;
gdjs.map1Code.GDlockObjects2.length = 0;
gdjs.map1Code.GDlock2Objects1.length = 0;
gdjs.map1Code.GDlock2Objects2.length = 0;


return;

}

gdjs['map1Code'] = gdjs.map1Code;
