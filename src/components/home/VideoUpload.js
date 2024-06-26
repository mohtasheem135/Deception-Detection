// components/VideoUpload.js
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { CloudUpload, FileUp, FileVideo, FolderX, Trash2 } from "lucide-react";
import "./videoUpload.css";
import { useHistory, useNavigate } from "react-router-dom";

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
    setSelectedFile(file);
    console.log("XXXXX ", file);
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     if (!selectedFile) {
  //       alert("Please select a file first!");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("file", selectedFile);

  //     try {
  //       const response = await fetch("http://localhost:4000/predict", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         const result = await response.json();
  //         console.log("File successfully uploaded:", result);
  //       } else {
  //         console.error("Failed to upload file:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //     }
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("File successfully uploaded:", result);
        setLoading(false);
        navigate("/result", { state: { response: result } });
      } else {
        console.error("Failed to upload file:", response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div className="loading-spinner"></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          height: videoSrc ? "500px" : "300px",
          width: videoSrc ? "800px" : "500px",
          marginTop: videoSrc ? "20px" : "180px",
          cursor: !videoSrc ? "pointer" : "default",
        }}
        className="flex flex-col justify-center items-center border-dashed border-2 border-sky-500 rounded-md"
        onClick={() => {
          if (!videoSrc) {
            document.querySelector(".input-field").click();
          }
        }}
      >
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="input-field"
          hidden
        />
        {videoSrc ? (
          <video width="700" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <CloudUpload className="text-sky-500" size={60} />
            {/*<FileUp className="text-sky-500" size={60} /> */}
            <p>Browse Video Files to Upload</p>
          </>
        )}
      </form>
      <section
        style={{ width: videoSrc ? "800px" : "500px" }}
        className="flex items-center justify-between bg-sky-300 mt-[5px] p-[8px] rounded-md"
      >
        {videoSrc ? <FileVideo className="text-[blue]" size={30} /> : <FolderX className="text-[crimson]" size={30} />}
        <span className="flex ml-[10px] items-center">
          {selectedFile ? selectedFile?.name : "No Video Files Selected"}
          {videoSrc && (
            <Trash2
              size={30}
              className="cursor-pointer ml-[5px] text-[crimson] hover:text-[red]"
              onClick={() => {
                setSelectedFile(null);
                setVideoSrc(null);
              }}
            />
          )}
        </span>
      </section>
      {videoSrc && (
        <div className="mt-[20px]">
          <Button onClick={handleSubmit}>Get Result</Button>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
