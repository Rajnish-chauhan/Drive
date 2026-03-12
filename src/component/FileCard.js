import React from "react";
import "./FileCard.css";

const FileCard = ({ file, onDownload, onDelete }) => {
  const getFileIcon = (fileName) => {
    const ext = fileName.split(".").pop().toLowerCase();

    if (ext === "pdf")
      return "https://cdn-icons-png.flaticon.com/512/337/337946.png";
    if (["doc"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/281/281760.png";
    if (["txt"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/8243/8243060.png";
    if (["docx"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/10451/10451822.png";
    if (["xls"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/8361/8361442.png";
    if (["xlsx"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/8361/8361467.png";
    if (["ppt"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/11037/11037444.png";
    if (["pptx"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/11037/11037529.png";
    if (["jpg"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/136/136524.png";
    if (["jpeg"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/8243/8243000.png ";
    if (["png"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/11621/11621804.png ";
    if (["gif"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/2306/2306094.png";
    if (["mp3"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/337/337953.png";
    if (["wav"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/8300/8300641.png ";
    if (["txt"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/337/337956.png";
    if (["txt", "log", "md"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/337/337956.png";
    if (["log"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/1960/1960087.png ";
    if (["logs"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/8422/8422186.png";
    if (["java"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/5968/5968282.png ";
    if (["json"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/136/136525.png ";
    if (["py"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/5968/5968350.png ";
    if(["mp4"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/29/29530.png";
    if(["mkv"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/6954/6954513.png";
    if(["exe"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/29/29614.png ";
    if(["apk"].includes(ext))
      return "https://cdn-icons-png.flaticon.com/512/2535/2535357.png";

    // Default icon
    return "https://cdn-icons-png.flaticon.com/512/148/148946.png";
  };

  return (
    <div
      className="file-card"
      onClick={(e) => {
        if (e.target.classList.contains("delete-btn")) return;
        onDownload(file.id);
      }}
    >
      <img src={getFileIcon(file.name)} alt="file icon" />
      <p className="file-name">{file.name}</p>
      <p className="file-size">{(file.size / 1024).toFixed(2)} KB</p>
      <button className="delete-btn" onClick={() => onDelete(file.id)}>
        🗑️
      </button>
    </div>
  );
};

export default FileCard;
