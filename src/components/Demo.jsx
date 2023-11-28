import { useState, useEffect } from "react";
import { FileUpload } from "primereact/fileupload";
// import "primereact/resources/themes/mira/theme.css";
// import "primereact/resources/themes/viva-light/theme.css";
// import "primereact/resources/themes/soho-light/theme.css";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        {/* <form
          className="relative flex justify-center items-center"
          onSubmit={() => {}}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="file"
            placeholder="Upload your documents here!"
            value=""
            onChange={() => {}}
            required
            className="url_input peer"
          />
        </form> */}
        <FileUpload
          name="card"
          url={"/api/upload"}
          multiple
          maxFileSize={1000000}
          pt={{
            content: { className: "surface-ground" },
            message: {
              root: {
                className: "w-1rem",
              },
            },
          }}
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />
      </div>
    </section>
  );
};

export default Demo;
