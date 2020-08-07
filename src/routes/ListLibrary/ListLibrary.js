import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import LibraryItem from "../../components/LibraryItem/LibraryItem";
import ListPage from "../ListPage/ListPage";

import { findOneAndUpdate } from "../../utils/helpers.js";
import { updateListArray } from "../../store/lists.actions";

const ListLibrary = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const routeMatch = useRouteMatch("/list/:id");
  const isExact = routeMatch && routeMatch.isExact;
  const { activeLists } = useSelector((state) => state.lists);

  const openEditableList = (listDetails) => {
    history.push(`/list/${listDetails.id}`);
  };

  const clearRoute = () => {
    history.push(`/`);
  };

  const updateList = (listToUpdate) => {
    const updatedListArr = findOneAndUpdate(
      activeLists,
      "id",
      listToUpdate.id,
      listToUpdate
    );
    dispatch(updateListArray(updatedListArr));
  };

  return (
    <Grid container spacing={1}>
      {activeLists.map((individualList) => (
        <LibraryItem
          key={individualList.id}
          listDetails={individualList}
          openEditableList={openEditableList}
          updateList={updateList}
        />
      ))}
      {isExact && (
        <ListPage
          showDialog={isExact}
          setShowDialog={clearRoute}
          updateList={updateList}
        />
      )}
    </Grid>
  );
};

export default ListLibrary;
