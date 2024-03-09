import React from 'react';
import ReactQuill from 'react-quill';
import './TextEditor.css';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [['bold', 'italic', 'underline'], [{ color: [] }], ['clean']],
};

const formats = ['bold', 'italic', 'underline', 'bullet', 'indent', 'color'];

function TextEditor({ messageLength, dispatch }) {
  const handleOnChange = (content, delta, source, editor) => {
    const allText = editor.getContents();
    const text = allText.ops.map((messages) => messages.insert).join('\n');
    messageLength(editor.getLength());
    dispatch({ type: 'content', content: text });
  };

  return <ReactQuill theme="snow" modules={modules} formats={formats} onChange={handleOnChange} />;
}

export default TextEditor;
