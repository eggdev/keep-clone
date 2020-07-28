import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import ListLibraryItem from "../../components/ListLibraryItem/ListLibraryItem";
import EditableList from "../../components/EditableList/EditableList";

const ListLibrary = () => {
  const history = useHistory();
  const routeMatch = useRouteMatch("/list/:id");
  const isExact = routeMatch && routeMatch.isExact;

  const { lists } = useSelector((state) => state);

  const openEditableList = (id) => {
    history.push(`/list/${id}`);
  };

  return (
    <Grid container spacing={1}>
      {lists.activeLists.map((individualList) => (
        <ListLibraryItem
          key={individualList.title}
          listDetails={individualList}
          openEditableList={openEditableList}
        />
      ))}
      {isExact && <EditableList />}
    </Grid>
  );
};

export default ListLibrary;
