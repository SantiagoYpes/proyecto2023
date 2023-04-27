import React from "react";
import { useState } from 'react'; 

function PhotoUpload() {
  const [photoPreview, setPhotoPreview] = useState(null);

  function handlePhotoUpload(event) {
    const file = event.target.files[0];

    if (file && file.type.includes('image/')) {
      const reader = new FileReader();

      reader.onload = function() {
        setPhotoPreview(reader.result);
      }

      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex flex-col items-center">
      {photoPreview && (
        <img src={photoPreview} alt="Vista previa de la foto de perfil" className="object-contain w-52 h-52 object-cover rounded-full border-4 border-white mt-4" />
      )} 
      <label htmlFor="photo-upload" className="relative cursor-pointer mt-3 bg-[#EE2737] hover:bg-red-700 rounded-md font-medium text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 px-4 py-2">
        Adjuntar foto
        <input id="photo-upload" name="photo-upload" type="file" className="sr-only" onChange={handlePhotoUpload} />
      </label>
    </div>
  );
}

export default PhotoUpload;