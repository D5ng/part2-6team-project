import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactQuill from 'react-quill';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

const Box = styled.div``;

const modules = {
  toolbar: [['bold', 'italic', 'underline'], [{ align: [] }, { color: [] }], ['clean']],
};

const formats = ['bold', 'italic', 'underline', 'bullet', 'indent', 'align', 'color'];

function TextEditor() {
  const [textValue, setTextValue] = useState('');
  const handleQuillChange = (content, delta, source, editor) => {
    setTextValue(editor.getContents());
  };
  return (
    <Box>
      <ReactQuill
        style={{ height: '250px' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={textValue || ''}
        onChange={handleQuillChange}
      />
    </Box>
  );
}

export default TextEditor;
