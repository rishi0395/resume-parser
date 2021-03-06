import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { data, statuses } from "../../constants";
import Col from "./Col";
import DropWrapper from "./DropWrapper";
import Item from "./Item";
import "./Kanban.css";

const Kanban = (props) => {
  const { data } = props;
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    console.log(item);
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <DndProvider backend={Backend}>
      <div className={"row"}>
        {statuses.map((s) => {
          return (
            <div key={"status"} className={"col-wrapper"}>
              <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
              <DropWrapper onDrop={onDrop} status={s.status}>
                <Col>
                  {items
                    .filter((i) => i.status === s.status)
                    .map((i, idx) => (
                      <Item
                        key={i.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        status={s}
                      />
                    ))}
                </Col>
              </DropWrapper>
            </div>
          );
        })}
      </div>
    </DndProvider>
  );
};

export default Kanban;
