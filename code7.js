gdjs.endingCode = {};
gdjs.endingCode.localVariables = [];
gdjs.endingCode.idToCallbackMap = new Map();
gdjs.endingCode.GDvolObjects1= [];
gdjs.endingCode.GDvolObjects2= [];
gdjs.endingCode.GDbackObjects1= [];
gdjs.endingCode.GDbackObjects2= [];
gdjs.endingCode.GDmapObjects1= [];
gdjs.endingCode.GDmapObjects2= [];
gdjs.endingCode.GDendingObjects1= [];
gdjs.endingCode.GDendingObjects2= [];


gdjs.endingCode.asyncCallback13105516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.endingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prolog", false);
}
gdjs.endingCode.localVariables.length = 0;
}
gdjs.endingCode.idToCallbackMap.set(13105516, gdjs.endingCode.asyncCallback13105516);
gdjs.endingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.endingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.endingCode.asyncCallback13105516(runtimeScene, asyncObjectsList)), 13105516, asyncObjectsList);
}
}

}


};gdjs.endingCode.mapOfGDgdjs_9546endingCode_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.endingCode.GDbackObjects1});
gdjs.endingCode.asyncCallback17194788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.endingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}
gdjs.endingCode.localVariables.length = 0;
}
gdjs.endingCode.idToCallbackMap.set(17194788, gdjs.endingCode.asyncCallback17194788);
gdjs.endingCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.endingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.endingCode.asyncCallback17194788(runtimeScene, asyncObjectsList)), 17194788, asyncObjectsList);
}
}

}


};gdjs.endingCode.mapOfGDgdjs_9546endingCode_9546GDvolObjects1Objects = Hashtable.newFrom({"vol": gdjs.endingCode.GDvolObjects1});
gdjs.endingCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11092380);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.endingCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.endingCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endingCode.mapOfGDgdjs_9546endingCode_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17286268);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.endingCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.endingCode.GDvolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endingCode.mapOfGDgdjs_9546endingCode_9546GDvolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10090084);
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.endingCode.GDvolObjects1);
{for(var i = 0, len = gdjs.endingCode.GDvolObjects1.length ;i < len;++i) {
    gdjs.endingCode.GDvolObjects1[i].getBehavior("Animation").setAnimationName("on");
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.endingCode.GDvolObjects1);
{for(var i = 0, len = gdjs.endingCode.GDvolObjects1.length ;i < len;++i) {
    gdjs.endingCode.GDvolObjects1[i].getBehavior("Animation").setAnimationName("off");
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

gdjs.endingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endingCode.GDvolObjects1.length = 0;
gdjs.endingCode.GDvolObjects2.length = 0;
gdjs.endingCode.GDbackObjects1.length = 0;
gdjs.endingCode.GDbackObjects2.length = 0;
gdjs.endingCode.GDmapObjects1.length = 0;
gdjs.endingCode.GDmapObjects2.length = 0;
gdjs.endingCode.GDendingObjects1.length = 0;
gdjs.endingCode.GDendingObjects2.length = 0;

gdjs.endingCode.eventsList2(runtimeScene);
gdjs.endingCode.GDvolObjects1.length = 0;
gdjs.endingCode.GDvolObjects2.length = 0;
gdjs.endingCode.GDbackObjects1.length = 0;
gdjs.endingCode.GDbackObjects2.length = 0;
gdjs.endingCode.GDmapObjects1.length = 0;
gdjs.endingCode.GDmapObjects2.length = 0;
gdjs.endingCode.GDendingObjects1.length = 0;
gdjs.endingCode.GDendingObjects2.length = 0;


return;

}

gdjs['endingCode'] = gdjs.endingCode;
