import React, {useContext} from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

import { EditorContext } from '../../context/context';

export default function CssEditor() {

  const {css, setCss} = useContext(EditorContext)

  return (
    <AceEditor
        placeholder='write u css code'
        mode='css'
        theme='monokai'
        name='editor_css'
        fontSize="16"
        value={css}
        onChange={(value)=>setCss(value)}
        height={'100%'}
        width={'100%'}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={true}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 2
        }}
    />
  )
}
