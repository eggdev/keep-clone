import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import ListLibraryItem from "../../components/ListLibraryItem/ListLibraryItem";
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

  return (
    <Grid container spacing={1}>
      {activeLists.map((individualList) => (
        <ListLibraryItem
          key={individualList.id}
          listDetails={individualList}
          openEditableList={openEditableList}
        />
      ))}
      {isExact && (
        <EditableList showDialog={isExact} setShowDialog={clearRoute} />
      )}
    </Grid>
  );
};

export default ListLibrary;
