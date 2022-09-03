import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-csharp'
import 'ace-builds/src-noconflict/mode-java'

import 'ace-builds/src-noconflict/theme-chaos'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import './App.css';
import { hop } from "@onehop/client";
import React from 'react';
import 'ace-builds/src-noconflict/theme-eclipse'
hop.init({
	projectId: "project_NDk4NzkzMTA1MjU3NzYwMzI"
});




const saveButton = document.getElementById("save");
let aceCurrentValue = `function ExampleJS() {
    console.log("HELLO HACKATHON!!!");
}`;
var themeAce;
var modeAce;
var exampleText;
var fileType;
console.log(window.location.href.split("/")[3].toLowerCase() === "home");
if(window.location.href.split("/")[3].toLowerCase() === "home")
{
    console.log("Home page.");
    document.getElementById("Homepage").style = "visibility: visible;";
    document.getElementById("save").style = "visibility: hidden;";
    document.getElementById("topbar").style = "visibility: hidden;";
    document.getElementById("editor").style = "visibility: hidden;";
}

else{document.getElementById("settings").style.visibility = "hidden"}


if(window.location.href.split("/")[3].split("#")[0].toLowerCase() === "settings")
{
    console.log("setting visible");
    document.getElementById("settings").style.visibility = "visible";
}
 
if(window.location.href.split("/")[3].split("#")[0].toLowerCase() === "settings" || window.location.href.split("/")[3].split("#")[0].toLowerCase() === "nitro")
{
    
    if(typeof window.location.href.split("-")[1] === 'undefined')
    {
        console.log("Launching nitro");
        themeAce = 'dracula';
        localStorage.setItem("lasttheme", "dracula");
        changeATags(themeAce);
    }
    else
    {
        if (window.location.href.split("-")[1].toLowerCase() === "dracula")
        {     
            console.log("Launching nitro");       
            themeAce = 'dracula';
            localStorage.setItem("lasttheme", "dracula");
            changeATags("#Theme-" + themeAce);
        }  
        else if (window.location.href.split("-")[1].toLowerCase() === "terminal")
        {     
            console.log("Launching nitro");       
            themeAce = 'terminal';
            localStorage.setItem("lasttheme", "terminal");
            changeATags("#Theme-" + themeAce);
        } 
        else if (window.location.href.split("-")[1].toLowerCase() === "chaos")
        {     
            console.log("Launching nitro");       
            themeAce = 'chaos';
            localStorage.setItem("lasttheme", "chaos");
            changeATags("#Theme-" + themeAce);
        }
        else if (window.location.href.split("-")[1].toLowerCase() === "white")
        {     
            console.log("Launching nitro");       
            themeAce = 'white';
            localStorage.setItem("lasttheme", "white");
            changeATags("#Theme-" + themeAce);
        }
        console.log(window.location.href.split("-")[1].toLowerCase() === "html");
        if(window.location.href.split("-")[1].toLowerCase() === "html")
        {
            modeAce="html";
            fileType = ".html";
            exampleText = "<h1>Hello, world!</h1>"
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-HTML" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-HTML");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "css")
        {

            modeAce="css";
            fileType = ".css";
            exampleText = `
h1{
color: green;
}`;
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-CSS" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-CSS");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "js")
        {
            modeAce="javascript";
            fileType = ".js";
            exampleText = `console.log("Hello, world!");`;
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-JS" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-JS");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "c")
        {
            modeAce="c_cpp";
            fileType = ".c";
            exampleText = `
#include <stdio.h>
int main() {
    printf("Hello, World!");
     return 0;
}`;
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-C" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-C");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "cpp")
        {
            modeAce="c_cpp";
            fileType = ".cpp";
            exampleText = `

#include <iostream>
            
int main() {
    std::cout << "Hello World!";
    return 0;
}`;
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-CPP" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-CPP");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "python")
        {
            modeAce="python";
            fileType = ".py";
            exampleText = `print("hello world")`;
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-PYTHON" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-PYTHON");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "c#")
        {
            modeAce="csharp";
            fileType = ".cs";
            exampleText = 
`namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}`;
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-CSHARP" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-CSHARP");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "java")
        {
            modeAce="java";
            fileType = ".java";
            exampleText =  
`class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}`;
            if(typeof themeAce === undefined)
            {
                changeATags("#Mode-JAVA" + "#Theme-" + themeAce);
            }
            else{
                changeATags("#Mode-JAVA");
            }
        }
        if(window.location.href.split("-")[1].toLowerCase() === "txt")
        {
            modeAce="";
            fileType = ".txt";
            exampleText = "Hello world";
            if(typeof themeAce === undefined)
            {
                changeATags("" + "#Theme-" + themeAce);
            }
            else{
                changeATags("");
            }
        }
    }


}
function changeATags(newLink)
{
    document.getElementById("settings-sidebar").setAttribute("href", "/settings" + newLink);
    document.getElementById("nitro-sidebar").setAttribute("href", "/nitro" + newLink);
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


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
saveButton.onclick = function() {			
    var FileSaver = require('file-saver');
    var blob = new Blob([aceCurrentValue], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "Nitro Editor" + fileType);
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



function App() {
    
    return(<AceEditor
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
        mode={modeAce}
        name='editor'
        theme={localStorage.getItem("lasttheme")}
        onLoad={onLoad}
        onChange={onChange}
        value={exampleText}
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

export default App;
