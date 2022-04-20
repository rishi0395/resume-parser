import MaterialTable from "material-table";
import React from "react";
import './Table.css'

export default function Table(props) {
  const {
    title = "",
    columns = [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ],
    data = [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
      },
    ],
    actions = [
      {
        icon: "save",
        tooltip: "Save User",
        onClick: (event, rowData) => alert("You saved " + rowData.name),
      },
    ],
  } = props;
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      actions={actions}
    />
  );
}
