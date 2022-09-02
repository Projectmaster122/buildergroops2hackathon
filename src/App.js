import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import './App.css';
import { createRoot } from "react-dom/client";
import { hop } from "@onehop/client";

hop.init({
	projectId: "project_NDk4NzkzMTA1MjU3NzYwMzI"
});
function App() {
    
    return (
        <AceEditor
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

createRoot(document.getElementById("root")).render(<App />);


export default App;