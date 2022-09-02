import {useState} from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import './App.css';

const element = <div className='navbar'></div>;
function App() {
    
    return (
      element,
        <AceEditor
            style={{
                height: '95vh',
                width: '95vw',
                left: '5vw',
                top: '5vh'
            }}
            placeholder = 'Start Coding...'
            mode='javascript'
            theme='dracula'
            name='basic-code-editor'
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
        />
    )
}

export default App;