import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const MusicUpload = ({
  fileURL,
  setFileURL,
  notifySuccess,
  notifyError,
  setLoader,
}) => {
  const uploadToIPFS = async (file) => {
    if (file) {
      try {
        setLoader(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: `2dad907ea4c72f8af571`,
            pinata_secret_api_key: `236a5a125f25830c0bd9815c28bb44bd44b248596d452274a31be3ee354f81d6`,
            "Content-Type": "multipart/form-data",
          },
        });

        const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        setFileURL(url);
        setLoader(false);
        notifySuccess("audio Uploade Successfully");
      } catch (error) {
        setLoader(false);
        notifyError("Unable to upload image to Pinata, check your API key");
      }
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToIPFS(acceptedFile[0]);
  }, []);

  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({ onDrop, maxSize: 500000000000 });
  return (
    <div class="flex h-full max-h-[calc(100vh-64px)] flex-col overflow-hidden">
      <h3 class="c-ddfucX">Select Auido</h3>
      {fileURL ? (
        <audio className="new_full_width_audio" controls>
          <source src={fileURL} type="audio/ogg" />
          <source src={fileURL} type="audio/mpeg" />
          Your browser dose not support the audio tag
        </audio>
      ) : (
        <div {...getRootProps()} class="c-jnBfEb">
          <p>
            Select your Sounds from your collection on the left-hand side to
            move them to this shelf.
          </p>
          <div class="c-cWWxYX">
            {" "}
            <input {...getInputProps()} type="file" accept="image/*" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicUpload;
