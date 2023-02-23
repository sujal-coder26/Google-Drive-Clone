import React from "react";
import { db } from "../../firebase";
import "../../styles/filesView.css";
import FileItem from "./fileitem";
import { useState, useEffect } from "react";
const FilesView = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="fileView">
      <div className="fileView-row"></div>
      <div className="fileView-titles">
        <div className="fileView-titles-left">
          <p>Name</p>
        </div>
        <div className="fileView-titles-right">
          <p>Last Modified</p>
          <p>Files Size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
};

export default FilesView;
