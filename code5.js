gdjs.setelah_32ikan2Code = {};
gdjs.setelah_32ikan2Code.localVariables = [];
gdjs.setelah_32ikan2Code.idToCallbackMap = new Map();
gdjs.setelah_32ikan2Code.GDbgObjects1= [];
gdjs.setelah_32ikan2Code.GDbgObjects2= [];
gdjs.setelah_32ikan2Code.GDbgObjects3= [];
gdjs.setelah_32ikan2Code.GDrusdiObjects1= [];
gdjs.setelah_32ikan2Code.GDrusdiObjects2= [];
gdjs.setelah_32ikan2Code.GDrusdiObjects3= [];
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1= [];
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects2= [];
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects3= [];
gdjs.setelah_32ikan2Code.GDiqbalObjects1= [];
gdjs.setelah_32ikan2Code.GDiqbalObjects2= [];
gdjs.setelah_32ikan2Code.GDiqbalObjects3= [];
gdjs.setelah_32ikan2Code.GDteksiqbalObjects1= [];
gdjs.setelah_32ikan2Code.GDteksiqbalObjects2= [];
gdjs.setelah_32ikan2Code.GDteksiqbalObjects3= [];
gdjs.setelah_32ikan2Code.GDnextObjects1= [];
gdjs.setelah_32ikan2Code.GDnextObjects2= [];
gdjs.setelah_32ikan2Code.GDnextObjects3= [];
gdjs.setelah_32ikan2Code.GDnggaObjects1= [];
gdjs.setelah_32ikan2Code.GDnggaObjects2= [];
gdjs.setelah_32ikan2Code.GDnggaObjects3= [];
gdjs.setelah_32ikan2Code.GDnext2Objects1= [];
gdjs.setelah_32ikan2Code.GDnext2Objects2= [];
gdjs.setelah_32ikan2Code.GDnext2Objects3= [];
gdjs.setelah_32ikan2Code.GDvolObjects1= [];
gdjs.setelah_32ikan2Code.GDvolObjects2= [];
gdjs.setelah_32ikan2Code.GDvolObjects3= [];
gdjs.setelah_32ikan2Code.GDbackObjects1= [];
gdjs.setelah_32ikan2Code.GDbackObjects2= [];
gdjs.setelah_32ikan2Code.GDbackObjects3= [];
gdjs.setelah_32ikan2Code.GDshadowObjects1= [];
gdjs.setelah_32ikan2Code.GDshadowObjects2= [];
gdjs.setelah_32ikan2Code.GDshadowObjects3= [];
gdjs.setelah_32ikan2Code.GDbarangObjects1= [];
gdjs.setelah_32ikan2Code.GDbarangObjects2= [];
gdjs.setelah_32ikan2Code.GDbarangObjects3= [];
gdjs.setelah_32ikan2Code.GDxObjects1= [];
gdjs.setelah_32ikan2Code.GDxObjects2= [];
gdjs.setelah_32ikan2Code.GDxObjects3= [];
gdjs.setelah_32ikan2Code.GDungkapObjects1= [];
gdjs.setelah_32ikan2Code.GDungkapObjects2= [];
gdjs.setelah_32ikan2Code.GDungkapObjects3= [];
gdjs.setelah_32ikan2Code.GDbtnungkapObjects1= [];
gdjs.setelah_32ikan2Code.GDbtnungkapObjects2= [];
gdjs.setelah_32ikan2Code.GDbtnungkapObjects3= [];


gdjs.setelah_32ikan2Code.asyncCallback9476388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ngga"), gdjs.setelah_32ikan2Code.GDnggaObjects3);

{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnggaObjects3.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnggaObjects3[i].hide(false);
}
}
gdjs.setelah_32ikan2Code.localVariables.length = 0;
}
gdjs.setelah_32ikan2Code.idToCallbackMap.set(9476388, gdjs.setelah_32ikan2Code.asyncCallback9476388);
gdjs.setelah_32ikan2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
/* Don't save ngga as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.setelah_32ikan2Code.asyncCallback9476388(runtimeScene, asyncObjectsList)), 9476388, asyncObjectsList);
}
}

}


};gdjs.setelah_32ikan2Code.asyncCallback16349180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("iqbal"), gdjs.setelah_32ikan2Code.GDiqbalObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("next"), gdjs.setelah_32ikan2Code.GDnextObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("teksiqbal"), gdjs.setelah_32ikan2Code.GDteksiqbalObjects2);

{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDiqbalObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDiqbalObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDteksiqbalObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDteksiqbalObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnextObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacityon", 255, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.setelah_32ikan2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.setelah_32ikan2Code.localVariables.length = 0;
}
gdjs.setelah_32ikan2Code.idToCallbackMap.set(16349180, gdjs.setelah_32ikan2Code.asyncCallback16349180);
gdjs.setelah_32ikan2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
for (const obj of gdjs.setelah_32ikan2Code.GDiqbalObjects1) asyncObjectsList.addObject("iqbal", obj);
for (const obj of gdjs.setelah_32ikan2Code.GDnextObjects1) asyncObjectsList.addObject("next", obj);
for (const obj of gdjs.setelah_32ikan2Code.GDnggaObjects1) asyncObjectsList.addObject("ngga", obj);
for (const obj of gdjs.setelah_32ikan2Code.GDteksiqbalObjects1) asyncObjectsList.addObject("teksiqbal", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.setelah_32ikan2Code.asyncCallback16349180(runtimeScene, asyncObjectsList)), 16349180, asyncObjectsList);
}
}

}


};gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDnggaObjects1Objects = Hashtable.newFrom({"ngga": gdjs.setelah_32ikan2Code.GDnggaObjects1});
gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDnext2Objects1Objects = Hashtable.newFrom({"next2": gdjs.setelah_32ikan2Code.GDnext2Objects1});
gdjs.setelah_32ikan2Code.asyncCallback10204996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("barang"), gdjs.setelah_32ikan2Code.GDbarangObjects2);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.setelah_32ikan2Code.GDshadowObjects2);
gdjs.copyArray(runtimeScene.getObjects("x"), gdjs.setelah_32ikan2Code.GDxObjects2);
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDshadowObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDshadowObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDbarangObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDbarangObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDxObjects2.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDxObjects2[i].hide(false);
}
}
gdjs.setelah_32ikan2Code.localVariables.length = 0;
}
gdjs.setelah_32ikan2Code.idToCallbackMap.set(10204996, gdjs.setelah_32ikan2Code.asyncCallback10204996);
gdjs.setelah_32ikan2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.setelah_32ikan2Code.asyncCallback10204996(runtimeScene, asyncObjectsList)), 10204996, asyncObjectsList);
}
}

}


};gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDxObjects1Objects = Hashtable.newFrom({"x": gdjs.setelah_32ikan2Code.GDxObjects1});
gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDnext2Objects1Objects = Hashtable.newFrom({"next2": gdjs.setelah_32ikan2Code.GDnext2Objects1});
gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDbtnungkapObjects1Objects = Hashtable.newFrom({"btnungkap": gdjs.setelah_32ikan2Code.GDbtnungkapObjects1});
gdjs.setelah_32ikan2Code.asyncCallback9677524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ending", false);
}
gdjs.setelah_32ikan2Code.localVariables.length = 0;
}
gdjs.setelah_32ikan2Code.idToCallbackMap.set(9677524, gdjs.setelah_32ikan2Code.asyncCallback9677524);
gdjs.setelah_32ikan2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.setelah_32ikan2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.setelah_32ikan2Code.asyncCallback9677524(runtimeScene, asyncObjectsList)), 9677524, asyncObjectsList);
}
}

}


};gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDvolObjects1Objects = Hashtable.newFrom({"vol": gdjs.setelah_32ikan2Code.GDvolObjects1});
gdjs.setelah_32ikan2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("barang"), gdjs.setelah_32ikan2Code.GDbarangObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnungkap"), gdjs.setelah_32ikan2Code.GDbtnungkapObjects1);
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.setelah_32ikan2Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.setelah_32ikan2Code.GDnextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.setelah_32ikan2Code.GDnggaObjects1);
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.setelah_32ikan2Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.setelah_32ikan2Code.GDshadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.setelah_32ikan2Code.GDteksiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("ungkap"), gdjs.setelah_32ikan2Code.GDungkapObjects1);
gdjs.copyArray(runtimeScene.getObjects("x"), gdjs.setelah_32ikan2Code.GDxObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnggaObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnggaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDbtnungkapObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDungkapObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDungkapObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDshadowObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDshadowObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDbarangObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDbarangObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDxObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDiqbalObjects1[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDteksiqbalObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDbtnungkapObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDrusdiObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnextObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.setelah_32ikan2Code.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ngga"), gdjs.setelah_32ikan2Code.GDnggaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDnggaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9074316);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.setelah_32ikan2Code.GDnextObjects1);
/* Reuse gdjs.setelah_32ikan2Code.GDnggaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.setelah_32ikan2Code.GDteksiqbalObjects1);
gdjs.setelah_32ikan2Code.GDnext2Objects1.length = 0;

{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnggaObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnggaObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDteksiqbalObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnextObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnextObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDnext2Objects1Objects, 1794, 951, "Layer3");
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnext2Objects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnext2Objects1[i].getBehavior("Resizable").setWidth(73);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDnext2Objects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDnext2Objects1[i].getBehavior("Resizable").setHeight(70);
}
}

{ //Subevents
gdjs.setelah_32ikan2Code.eventsList2(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("x"), gdjs.setelah_32ikan2Code.GDxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDxObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9831460);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("barang"), gdjs.setelah_32ikan2Code.GDbarangObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadow"), gdjs.setelah_32ikan2Code.GDshadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.setelah_32ikan2Code.GDteksiqbalObjects1);
/* Reuse gdjs.setelah_32ikan2Code.GDxObjects1 */
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDshadowObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDshadowObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDbarangObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDbarangObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDxObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDxObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDteksiqbalObjects1[i].getBehavior("Animation").setAnimationName("3");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next2"), gdjs.setelah_32ikan2Code.GDnext2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDnext2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10830508);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("iqbal"), gdjs.setelah_32ikan2Code.GDiqbalObjects1);
gdjs.copyArray(runtimeScene.getObjects("teksiqbal"), gdjs.setelah_32ikan2Code.GDteksiqbalObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDiqbalObjects1[i].hide();
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDteksiqbalObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDteksiqbalObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnungkap"), gdjs.setelah_32ikan2Code.GDbtnungkapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDbtnungkapObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length;i<l;++i) {
    if ( gdjs.setelah_32ikan2Code.GDbtnungkapObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.setelah_32ikan2Code.GDbtnungkapObjects1[k] = gdjs.setelah_32ikan2Code.GDbtnungkapObjects1[i];
        ++k;
    }
}
gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9858540);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.setelah_32ikan2Code.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("rusdi"), gdjs.setelah_32ikan2Code.GDrusdiObjects1);
gdjs.copyArray(runtimeScene.getObjects("teks_rusdi"), gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDrusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDrusdiObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("btnungkap"), gdjs.setelah_32ikan2Code.GDbtnungkapObjects1);
gdjs.copyArray(runtimeScene.getObjects("ungkap"), gdjs.setelah_32ikan2Code.GDungkapObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDbtnungkapObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.setelah_32ikan2Code.GDungkapObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDungkapObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDbtnungkapObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.setelah_32ikan2Code.GDvolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.setelah_32ikan2Code.mapOfGDgdjs_9546setelah_959532ikan2Code_9546GDvolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18165740);
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.setelah_32ikan2Code.GDvolObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("on");
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
gdjs.copyArray(runtimeScene.getObjects("vol"), gdjs.setelah_32ikan2Code.GDvolObjects1);
{for(var i = 0, len = gdjs.setelah_32ikan2Code.GDvolObjects1.length ;i < len;++i) {
    gdjs.setelah_32ikan2Code.GDvolObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.setelah_32ikan2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.setelah_32ikan2Code.GDbgObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbgObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbgObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDrusdiObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDrusdiObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDrusdiObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDiqbalObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDiqbalObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDiqbalObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDteksiqbalObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDteksiqbalObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDteksiqbalObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDnextObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDnextObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDnextObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDnggaObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDnggaObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDnggaObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDnext2Objects1.length = 0;
gdjs.setelah_32ikan2Code.GDnext2Objects2.length = 0;
gdjs.setelah_32ikan2Code.GDnext2Objects3.length = 0;
gdjs.setelah_32ikan2Code.GDvolObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDvolObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDvolObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDbackObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbackObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbackObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDshadowObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDshadowObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDshadowObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDbarangObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbarangObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbarangObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDxObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDxObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDxObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDungkapObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDungkapObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDungkapObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbtnungkapObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbtnungkapObjects3.length = 0;

gdjs.setelah_32ikan2Code.eventsList4(runtimeScene);
gdjs.setelah_32ikan2Code.GDbgObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbgObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbgObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDrusdiObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDrusdiObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDrusdiObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDteks_9595rusdiObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDiqbalObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDiqbalObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDiqbalObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDteksiqbalObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDteksiqbalObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDteksiqbalObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDnextObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDnextObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDnextObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDnggaObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDnggaObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDnggaObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDnext2Objects1.length = 0;
gdjs.setelah_32ikan2Code.GDnext2Objects2.length = 0;
gdjs.setelah_32ikan2Code.GDnext2Objects3.length = 0;
gdjs.setelah_32ikan2Code.GDvolObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDvolObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDvolObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDbackObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbackObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbackObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDshadowObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDshadowObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDshadowObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDbarangObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbarangObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbarangObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDxObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDxObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDxObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDungkapObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDungkapObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDungkapObjects3.length = 0;
gdjs.setelah_32ikan2Code.GDbtnungkapObjects1.length = 0;
gdjs.setelah_32ikan2Code.GDbtnungkapObjects2.length = 0;
gdjs.setelah_32ikan2Code.GDbtnungkapObjects3.length = 0;


return;

}

gdjs['setelah_32ikan2Code'] = gdjs.setelah_32ikan2Code;
