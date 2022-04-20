import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FileUploadButton, Kanban, Table } from "../components";
import { handleResumeUpload } from "../redux/actions/resumeUploadActions";
import { handleFetchResumes } from "../redux/actions/fetchResumesActions";
import { getResumes, getState } from "../redux/selectors";

function Home() {
  const resumes = useSelector(getResumes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchResumes());
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
    <div>
      <h1>Resume checker</h1>
      <FileUploadButton multiple onClick={clickHandler} />
      {/* <Table /> */}
      {resumes.length && <Kanban data={resumes} />}
    </div>
  );
}

export default memo(Home);
