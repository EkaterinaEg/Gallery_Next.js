"use client";
import { UploadDropzone } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
import "./UploadForm.scss";
import { addPhoto } from "@/actions/photoActions";
import { useRouter } from "next/navigation";

export default function UploadForm(props) {
  const router = useRouter();
  const { albumId, isRedirect } = props;
  return (
    <div className="UploadForm">
      <UploadDropzone
        endpoint="photoUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          // alert("Upload Completed");

          const uploads = res.map((file) => {
            const userId = file.serverData.uploadedBy;
            const url = file.url;
            return addPhoto(albumId, userId, url);
          });

          Promise.all(uploads)
            .then(console.log)
            .catch(console.log)
            .finally(() => isRedirect && router.push(`/albums/${albumId}`));
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
        onUploadBegin={(name) => {
          // Do something once upload begins
          console.log("Uploading: ", name);
        }}
      />
    </div>
  );
}
