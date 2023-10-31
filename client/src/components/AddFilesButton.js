import React, { useState } from 'react';

function AddFilesButton() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  return (
    <div>
      
      <div>
        Archivos seleccionados:
        {selectedFiles.map((file) => (
          <div key={file.name}>{file.name}</div>
        ))}
      </div>
    </div>
  );
}

export default AddFilesButton;