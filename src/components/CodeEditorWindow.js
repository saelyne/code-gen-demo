import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="60vh"
        width={`100%`}
        language={language || "python"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        options={{
          fontSize: 15,
          minimap: { enabled: false },
          scrollbar: {
            vertical: 'auto',
            horizontal: 'auto'
          }
        }}
      />
    </div>
  );
};
export default CodeEditorWindow;
