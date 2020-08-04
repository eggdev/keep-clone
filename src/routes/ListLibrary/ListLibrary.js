import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import LibraryItem from "../../components/LibraryItem/LibraryItem";
import ListPage from "../ListPage/ListPage";

const ListLibrary = () => {
  const [openedList, setOpenedList] = useState();
  const history = useHistory();
  const routeMatch = useRouteMatch("/list/:id");
  const isExact = routeMatch && routeMatch.isExact;
  const { activeLists } = useSelector((state) => state.lists);

  const openEditableList = (listDetails) => {
    setOpenedList(listDetails);
    history.push(`/list/${listDetails.id}`);
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
        <LibraryItem
          key={individualList.id}
          listDetails={individualList}
          openEditableList={openEditableList}
          updateListItem={updateListItem}
        />
      ))}
      {isExact && (
        <ListPage
          showDialog={isExact}
          setShowDialog={clearRoute}
          updateListItem={updateListItem}
          listDetails={openedList}
        />
      )}
    </Grid>
  );
};

export default ListLibrary;
