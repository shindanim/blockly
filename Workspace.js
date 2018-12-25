class Workspace {
    constructor(parent, xmlString) {
        this.block = "";
        this.subWorkspaceOptions = { readOnly: true, };
        this.parent = parent;
        this.xmlString = xmlString;
        this.listeners = [];
        console.log(this.parent.id);    
    }
    addListener(listenerId){
        this.listeners.push(listenerId);
    }
    injectWorkspace(parent) {
  	    let element = document.createElement("DIV");
  	    // className should be defined, if not, the workspace would not be displayed.
        // order is important
        element.className = "subWS";
        this.parent.appendChild(element);
  	    this.workspace = Blockly.inject(element, this.subWorkspaceOptions);

        element.id = this.workspace.id + "div";

  	    this.id = this.workspace.id;
        this.addButton(parent);
    }
    addButton(parent){
        let element = document.createElement("BUTTON");
        element.id = this.id;
        element.className = "subWSButton";
        element.innerHTML = "UNREGISTER";
        element.addEventListener("click", this.clearWorkspace, this);
        this.parent.appendChild(element);
    }
    loadXmlToBlock() {
        console.log("loadXmlToBlock " + this.parent.id);
        Blockly.Xml.domToWorkspace(this.xmlString, this.workspace);
    }
    clearWorkspace() {
        // add unregister step here
        console.log(this.id);
        this.parentNode.removeChild(document.getElementById(this.id + "div"));
        this.parentNode.removeChild(this);
    }
}