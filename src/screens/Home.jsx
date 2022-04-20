import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FileUploadButton, Kanban, Table } from "../components";
import { handleResumeUpload } from "../redux/actions/stateActions";
import { getState } from "../redux/selectors";

function Home() {
  const state = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, []);

  const clickHandler = (e) => {
    const fileList = e?.target?.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const formData = new FormData();
      formData.append("resume", file);
      dispatch(handleResumeUpload(formData));
    }
  };

  return (
    <div
      // style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>Resume checker</h1>
      <FileUploadButton multiple onClick={clickHandler} />
      {/* <Table /> */}
      <Kanban />
    </div>
  );
}

export default memo(Home);
