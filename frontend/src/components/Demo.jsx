import { useState, useEffect } from "react";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Demo = () => {
  const [usr, setUsr] = useState("");
  const [key, setKey] = useState("");

  const handleUserData = async (e) => {
    const formData = new FormData();
    formData.append("user", usr);
    formData.append("api-key", key);
    await fetch("http://127.0.0.1:5000/api/verify-user", {
      method: "POST",
      body: formData,
    }).then((res) => {
      console.log(res.json());
    });
  };

  const fileUploadHandler = async (e) => {
    Object.values(e.files).forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      await fetch("http://127.0.0.1:5000/api/upload", {
        method: "POST",
        body: formData,
      }).then((res) => {
        console.log("File sent successfully.");
        return res.json();
      });
    });
  };

  return (
    <div className="mt-16 w-full max-w-xl">
      <div className="flex flex-col gap-2">
        <FileUpload
          name="card"
          multiple
          accept="application/pdf"
          maxFileSize={1000000}
          customUpload
          uploadHandler={fileUploadHandler}
          onUpload={(e) => {}}
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-10">
          <div className="pt-24">
            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-user" />
              <InputText
                id="username"
                className="h-10 p-2"
                value={usr}
                size={24}
                onChange={(e) => setUsr(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </span>
          </div>
          <div className="pt-24">
            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-key" />
              <InputText
                id="api_key"
                className="h-10 p-2"
                value={key}
                size={24}
                onChange={(e) => setKey(e.target.value)}
              />
              <label htmlFor="api_key">OpenAI API Key</label>
            </span>
          </div>
        </div>
        <Button
          className="m-10 bg-slate-800 w-40 h-10 text-sm text-zinc-100"
          label="Start chatting..."
          size="large"
          onClick={handleUserData}
        />
      </div>
    </div>
  );
};
// pi-key
export default Demo;
// sk - pkmJkS9xt2D2H1hVWt9NT3BlbkFJfm6q2uo9y5J9Xh5gCNDU;
