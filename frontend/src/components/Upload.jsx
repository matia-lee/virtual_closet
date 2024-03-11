import "../static/Upload.css";
import { useCallback, useState, useRef } from "react";
import { useAuth } from "./AuthContext";
import Hanger from "../icons/Hanger";
import UploadIcon from "../icons/UploadIcon";
import GarbageIcon from "../icons/GarbageIcon";
import NextIcon from "../icons/NextIcon";
import HatIcon from "../icons/HatIcon";
import ShirtIcon from "../icons/ShirtIcon";
import PantsIcon from "../icons/PantsIcon";
import ShoeIcon from "../icons/ShoeIcon";

const Upload = () => {
  const [dragOver, setDragOver] = useState(false);
  const [confirmUploadedImage, setConfirmUploadedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [continuePage, setContinuePage] = useState(false);
  const { username } = useAuth();

  const fileInputRef = useRef(null);

  const handleBrowseFileClick = () => {
    setTimeout(() => {
      fileInputRef.current.click();
    }, 20);
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFileUpload(files[0]);
    }
  }, []);

  const handleFileUpload = (file) => {
    // console.log(file);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/temporary_upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("File uploaded successfully:", data);
        setConfirmUploadedImage(data.url);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      })
      .finally(() => setIsLoading(false));
  };

  const commitUpload = (url) => {
    console.log("commitUpload called with URL:", url);

    console.log("Sending to backend:", { url, username });

    fetch("http://localhost:5000/commit_upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, username }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Committed successfully", data);
        setContinuePage(true);
      })
      .catch((error) => {
        console.error("Error committing upload", error);
      });
  };

  const handleDiscardClick = () => {
    setConfirmUploadedImage("");
  };

  const handleFileSelection = (e) => {
    const files = e.target.files;
    if (files.length) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="uploadpage-icon">
          <Hanger color="#ff9999" />
        </div>
        <div className="logo">
          <div className="title">Outfitly</div>
          <div className="subtitle">Upload images</div>
        </div>
      </div>
      <div
        className={`upload-container ${dragOver ? "drag-over" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <div className="loading-indicator">Uploading...</div> // Display a simple loading text or spinner
        ) : (
          <>
            <UploadIcon size="80px" color="#ff9999" />
            <div className="instructions">
              <h3>Drag files to upload</h3>
              <p>or</p>
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileSelection}
              />
              <button
                className="browse-files-button"
                onClick={handleBrowseFileClick}
              >
                Browse files
              </button>
            </div>
          </>
        )}
      </div>
      {confirmUploadedImage && (
        <>
          <div className="overlay">
            <div className="image-preview">
              <p>Verify</p>
              <img src={confirmUploadedImage} alt="Uploaded" />
              <div className="garbage-icon-text">
                <GarbageIcon
                  className="garbage-icon"
                  onClick={handleDiscardClick}
                />
                <span className="discard-hover-text">
                  <p>Discard</p>
                </span>
              </div>
              <div className="next-icon-text">
                <NextIcon
                  className="next-icon"
                  onClick={() => commitUpload(confirmUploadedImage)}
                />
                <span className="continue-hover-text">
                  <p>Continue</p>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {continuePage && (
        <>
          <div className="overlay">
            <div className="continue-page-image">
              <img src={confirmUploadedImage} alt="Uploaded" />
              <div className="tagging-options">
                <div className="headwear">
                  <HatIcon className="hat-icon" />
                  <p>Headwear</p>
                </div>
                <div className="top">
                  <ShirtIcon className="shirt-icon" />
                  <p>Top</p>
                </div>
                <div className="bottom">
                  <PantsIcon className="pants-icon" />
                  <p>Bottom</p>
                </div>
                <div className="footwear">
                  <ShoeIcon className="shoe-icon" />
                  <p>Footwear</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Upload;
