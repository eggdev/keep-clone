import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Item from "../../components/Item/Item";
import EditableList from "../EditableList/EditableList";

const ListLibrary = () => {
  const history = useHistory();
  const routeMatch = useRouteMatch("/list/:id");
  const isExact = routeMatch && routeMatch.isExact;
  const { activeLists } = useSelector((state) => state.lists);

  const openEditableList = (id) => {
    history.push(`/list/${id}`);
  };

  const clearRoute = () => {
    history.push(`/`);
  };

  const updateListItem = () => {
    console.log("here");
  };

  return (
    <Grid container spacing={1}>
      {activeLists.map((individualList) => (
        <Item
          key={individualList.id}
          listDetails={individualList}
          openEditableList={openEditableList}
          updateListItem={updateListItem}
        />
      ))}
      {isExact && (
        <EditableList
          showDialog={isExact}
          setShowDialog={clearRoute}
          updateListItem={updateListItem}
        />
      )}
    </Grid>
  );
};

export default ListLibrary;
