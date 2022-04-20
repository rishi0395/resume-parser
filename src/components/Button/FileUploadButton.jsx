import React from "react";

export default function FileUploadButton(props) {
  const { onClick, title } = props;
  return (
    <button>
      <label>
        {title}
        <input
          name="fileUploadButton"
          type="file"
          onChange={onClick}
          {...props}
        />
      </label>
    </button>
  );
}
