gdjs.homeCode = {};
gdjs.homeCode.localVariables = [];
gdjs.homeCode.idToCallbackMap = new Map();
gdjs.homeCode.GDbgObjects1= [];
gdjs.homeCode.GDbgObjects2= [];
gdjs.homeCode.GDjudulObjects1= [];
gdjs.homeCode.GDjudulObjects2= [];
gdjs.homeCode.GDbtnObjects1= [];
gdjs.homeCode.GDbtnObjects2= [];


gdjs.homeCode.asyncCallback8430764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.homeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn"), gdjs.homeCode.GDbtnObjects2);

{for(var i = 0, len = gdjs.homeCode.GDbtnObjects2.length ;i < len;++i) {
    gdjs.homeCode.GDbtnObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
gdjs.homeCode.localVariables.length = 0;
}
gdjs.homeCode.idToCallbackMap.set(8430764, gdjs.homeCode.asyncCallback8430764);
gdjs.homeCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.homeCode.localVariables);
for (const obj of gdjs.homeCode.GDbtnObjects1) asyncObjectsList.addObject("btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.homeCode.asyncCallback8430764(runtimeScene, asyncObjectsList)), 8430764, asyncObjectsList);
}
}

}


};gdjs.homeCode.mapOfGDgdjs_9546homeCode_9546GDbtnObjects1Objects = Hashtable.newFrom({"btn": gdjs.homeCode.GDbtnObjects1});
gdjs.homeCode.asyncCallback17200316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.homeCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prolog", false);
}
gdjs.homeCode.localVariables.length = 0;
}
gdjs.homeCode.idToCallbackMap.set(17200316, gdjs.homeCode.asyncCallback17200316);
gdjs.homeCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.homeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.homeCode.asyncCallback17200316(runtimeScene, asyncObjectsList)), 17200316, asyncObjectsList);
}
}

}


};gdjs.homeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.homeCode.GDbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("judul"), gdjs.homeCode.GDjudulObjects1);
{for(var i = 0, len = gdjs.homeCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDbtnObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.homeCode.GDjudulObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDjudulObjects1[i].getBehavior("Tween").addObjectPositionTween2(gdjs.evtTools.common.toString((gdjs.homeCode.GDjudulObjects1[i].getPointY(""))), 0, -(57), "easeInOutBack", 0.8, false);
}
}

{ //Subevents
gdjs.homeCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.homeCode.GDbtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.homeCode.mapOfGDgdjs_9546homeCode_9546GDbtnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16376316);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.homeCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


};

gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDbgObjects1.length = 0;
gdjs.homeCode.GDbgObjects2.length = 0;
gdjs.homeCode.GDjudulObjects1.length = 0;
gdjs.homeCode.GDjudulObjects2.length = 0;
gdjs.homeCode.GDbtnObjects1.length = 0;
gdjs.homeCode.GDbtnObjects2.length = 0;

gdjs.homeCode.eventsList2(runtimeScene);
gdjs.homeCode.GDbgObjects1.length = 0;
gdjs.homeCode.GDbgObjects2.length = 0;
gdjs.homeCode.GDjudulObjects1.length = 0;
gdjs.homeCode.GDjudulObjects2.length = 0;
gdjs.homeCode.GDbtnObjects1.length = 0;
gdjs.homeCode.GDbtnObjects2.length = 0;


return;

}

gdjs['homeCode'] = gdjs.homeCode;
