import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import './App.css';
import { createRoot } from "react-dom/client";
import { hop } from "@onehop/client";
import React from 'react'
import ReactDOM from 'react-dom';

hop.init({
	projectId: "project_NDk4NzkzMTA1MjU3NzYwMzI"
});
let visible = false;


const saveButton = document.getElementById("save");
let aceCurrentValue = `function ExampleJS() {
    console.log("HELLO HACKATHON!!!");
}`;
if(window.location.href.split("/")[3].toLowerCase() === "settings")
{
    nitro();

}
if(window.location.href.split("/")[3].toLowerCase() === "home")
{
    console.log("Home page.");
    document.getElementById("save").style = "visibility: hidden;";
    document.getElementById("topbar").style = "visibility: hidden;";
    document.getElementById("Homepage").style = "visibility: visible;";
}
if(window.location.href.split("/")[3].toLowerCase() === "nitro")
{
    nitro();
}
else{document.getElementById("settings").style.visibility = "hidden"}
if(window.location.href.split("/")[3].toLowerCase() === "settings")
{
    console.log("setting visible");
    document.getElementById("settings").style.visibility = "visible";
}

function GetElementInsideContainer(containerID, childID) {
    var elm = {};
    var elms = document.getElementById(containerID).getElementsByTagName("*");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].id === childID) {
            elm = elms[i];
            break;
        }
    }
    return elm;
}
function nitro() {


saveButton.onclick = function() {			
    var FileSaver = require('file-saver');
    var blob = new Blob([aceCurrentValue], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.txt");
}



const button = GetElementInsideContainer("settings", "dropbtn");

button.onclick = function ()
{
    
}


function onChange(newValue) {
    aceCurrentValue = newValue;
    console.log(newValue);
}
function onLoad()
{
    
}
createRoot(document.getElementById("root")).render(<AceEditor
    style={{
      position: 'absolute',
        height: '93vh',
        width: '89vw',
        left: '10.5vw',
        top: '5vh',
        border: "1px solid white",
        borderRadius: ".5%"
    }}
    placeholder = 'Start Coding...'
    mode='javascript'
    theme='dracula'
    name='editor'
    onLoad={onLoad}
    onChange={onChange}
    value={`function ExampleJS() {
    console.log("HELLO HACKATHON!!!");
}`}
    fontSize = { 24 }
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine = {true}
    setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
    }}
/>);
}
function App() {
    
    return(<h1>a</h1>)
    
}

export default App;
