import React, { useState } from "react";

import { Editor, EditorState } from "draft-js";
import 'draft-js/dist/Draft.css'

export default function DraftEditor(){
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const handleEditorChange = (state) => {
        setEditorState(state);
    };

    return (
        <div className="editor-container bg-light">
            <Editor
                editorState={editorState}
                onChange={handleEditorChange}
            />
        </div>
    );
};