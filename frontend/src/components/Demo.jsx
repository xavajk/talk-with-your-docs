import { useState, useEffect } from "react";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Demo = () => {
  const [usr, setUsr] = useState("");
  const [key, setKey] = useState("");
  return (
    <div className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <FileUpload
          name="card"
          url={"/api/upload"}
          multiple
          maxFileSize={1000000}
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
          className="m-10 bg-slate-800 w-32 h-10 text-sm text-white"
          label="Submit"
          size="large"
          onC
        />
      </div>
    </div>
  );
};
// pi-key
export default Demo;
// sk - pkmJkS9xt2D2H1hVWt9NT3BlbkFJfm6q2uo9y5J9Xh5gCNDU;
