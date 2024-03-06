import React from 'react';
import ReactQuill from 'react-quill';
import './TextEditor.css';
import 'react-quill/dist/quill.snow.css';
import { useMessageFormContext } from '../context/MessageFormContext';

const modules = {
  toolbar: [['bold', 'italic', 'underline'], [{ align: [] }, { color: [] }], ['clean']],
};

const formats = ['bold', 'italic', 'underline', 'bullet', 'indent', 'align', 'color'];

function TextEditor({ messageLength }) {
  const { message, setMessage } = useMessageFormContext();
  const handleQuillChange = (content, delta, source, editor) => {
    setMessage(editor.getContents());
    messageLength(editor.getLength());
  };

  return (
    <ReactQuill theme="snow" modules={modules} formats={formats} value={message || ''} onChange={handleQuillChange} />
  );
}

export default TextEditor;
