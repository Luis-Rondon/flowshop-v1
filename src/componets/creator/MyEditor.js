import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo predeterminado de Quill
import '../creator/creator-componets.css'

const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // Negrita, cursiva, subrayado, tachado
    ['blockquote', 'code-block'],                     // Cita, bloque de código
    [{'list': 'ordered'}, {'list': 'bullet'}],        // Lista ordenada, lista desordenada
    [{'script': 'sub'}, {'script': 'super'}],         // Subíndice, superíndice
    [{'indent': '-1'}, {'indent': '+1'}],             // Disminuir sangría, aumentar sangría
    [{'direction': 'rtl'}],                           // Texto de derecha a izquierda
    [{'size': ['small', false, 'large', 'huge']}],    // Tamaño de fuente
    [{'header': [1, 2, 3, 4, 5, 6, false]}],         // Encabezados
    [{'color': []}, {'background': []}],              // Color de texto, color de fondo
    [{'font': []}],                                   // Familia de fuentes
    [{'align': []}],                                  // Alineación del texto
    ['clean'],                                        // Limpiar formateo
    ['link', 'image', 'video']                        // Insertar enlaces, imágenes y videos
  ];

  const editorStyles = {
    width: '100%',
    height: '480px',              
    backgroundColor: '#fff',  
    border: 'none',  
    borderRadius: '5px',         
    padding: '0px',
    scrollbarColor: '#6335ff transparent'             
  };

  return (
    <div style={{ Height: '100%' }}>
      
      <ReactQuill 
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        modules={{ toolbar: toolbarOptions }}
        style={editorStyles}
        className="custom-editor"
      />
    </div>
  );
};

export default MyEditor;