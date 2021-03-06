import MaterialTable from "material-table";
import React, { forwardRef } from "react";
import "./Table.css";

import AddBox from "@material-ui/icons/AddBox";
import Save from "@material-ui/icons/Save";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

export default function Table(props) {
  const {
    title = "Resumes",
    columns = [
      { title: "File Name", field: "fileName" },
      { title: "Phone", field: "phone", type: "numeric" },
      { title: "Email", field: "email" },
      {
        title: "Grade",
        field: "email",
      },
      { title: "Skill Match", field: "skillMatch" },
      { title: "Status", field: "status" },
    ],
    data = [
      {
        fileName: "Mehmet",
        phone: "888-888-8888",
        email: "abc@abc.com",
        skillMatch: 63,
        status: "New",
      },
      {
        fileName: "Zerya Betül",
        phone: "888-888-9999",
        email: "abc@abc.com",
        skillMatch: 63,
        status: "Shortlisted",
      },
      {
        fileName: "Mehmet",
        phone: "888-888-8888",
        email: "abc@abc.com",
        skillMatch: 63,
        status: "New",
      },
      {
        fileName: "Zerya Betül",
        phone: "888-888-9999",
        email: "abc@abc.com",
        skillMatch: 63,
        status: "Shortlisted",
      },
      {
        fileName: "Mehmet",
        phone: "888-888-8888",
        email: "abc@abc.com",
        skillMatch: 63,
        status: "New",
      },
      {
        fileName: "Zerya Betül",
        phone: "888-888-9999",
        email: "abc@abc.com",
        skillMatch: 63,
        status: "Shortlisted",
      },
    ],
    actions = [
      {
        icon: Save,
        tooltip: "Save User",
        onClick: (event, rowData) => alert("You saved " + rowData.name),
      },
      (rowData) => ({
        icon: DeleteOutline,
        tooltip: "Delete User",
        onClick: (event, rowData) =>
          alert("You want to delete " + rowData.name),
        disabled: rowData.birthYear < 2000,
      }),
    ],
  } = props;

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  return (
    <MaterialTable
      icons={tableIcons}
      title={title}
      columns={columns}
      data={data}
      actions={actions}
      options={{
        selection: true,
      }}
    />
  );
}
