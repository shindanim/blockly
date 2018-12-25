// TODO :
// 1. get block dynamically from primary workspace O
// 2. display blocks to new subWS O
// 3. Add destroy steps O
// 4. Make global array to manage ws - really necessary ?
// 5. Define block's position

const primaryWorkspaceOptions = {
  toolbox,
  media: 'blockly/media/',
};

const primaryWorkspace = Blockly.inject(document.getElementById("primaryDiv"), primaryWorkspaceOptions);

// add this after data.res
// Think how to figure it out nested data.res
// (arrow function loses this scope)
function addEventWorkspace() {
  const eventArea = document.getElementById("eventArea");
  var xml = Blockly.Xml.workspaceToDom(primaryWorkspace);
  let ws = new Workspace(eventArea, xml);
  ws.injectWorkspace(eventArea);
  // 요거를 언제 불러줄지 .. 그냥 불러줘도 문제가 없을지 .. 
  ws.addListener("listener1,");
  ws.addListener("listener2");
  ws.loadXmlToBlock();
}