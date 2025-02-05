"use client";
import React, { useRef, useState } from "react";
import { CameraIcon } from "lucide-react";
import { readFileAsDataURL } from "@/lib/utils";
import ImagePreviewDialog from "../ImagePreviewDialog/ImagePreviewDialog";
import PreviewUsersDialog from "../PreviewUsersDialog/PreviewUsersDialog";
const ChatCamera = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const imageRef = useRef<HTMLInputElement>(null);
  const [flag, setFlag] = useState(false);
  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataURL(file);
      setSelectedFile(dataUrl);
    }
  };
  console.log("selectedFile", selectedFile);
  const closeDialog = () => {
    setSelectedFile("");
    setFlag(false);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center m-2 rounded-md bg-clip-padding backdrop-blur-sm bg-opacity-5 border p-5">
        <div
          onClick={() => imageRef.current?.click()}
          className="rounded-full p-8 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200 cursor-pointer text-white"
        >
          <CameraIcon size={"50px"} />
          <input
            ref={imageRef}
            type="file"
            accept="image/"
            hidden
            onChange={fileChangeHandler}
          />
        </div>
        <p className="w-2/3 text-lg text-center text-white mt-4 font-semibold">
          Let's send your first snap
        </p>
      </div>
      {flag === false ? (
        <ImagePreviewDialog
          selectedFile={selectedFile}
          close={closeDialog}
          imageChange={() => imageRef.current?.click()}
          setFlag={setFlag}
        />
      ) : (
        <PreviewUsersDialog
        selectedFile={selectedFile}
        close={closeDialog}
        onPreview={()=>setFlag(false)}

        />
      )}
    </>
  );
};

export default ChatCamera;
