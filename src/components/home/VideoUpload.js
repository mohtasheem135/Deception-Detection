// components/VideoUpload.js
import { useState } from 'react';
import { Button } from '../ui/button';

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:4000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('File successfully uploaded:', result);
      } else {
        console.error('Failed to upload file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload Video:
        <input type="file" accept="video/*" onChange={handleFileChange} />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default VideoUpload;
