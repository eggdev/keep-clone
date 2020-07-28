import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import ListLibraryItem from "../../components/ListLibraryItem/ListLibraryItem";

const ListLibrary = () => {
  const { lists } = useSelector((state) => state);

  return (
    <Grid container spacing={1}>
      {lists.activeLists.map((individualList) => (
        <ListLibraryItem
          key={individualList.title}
          listDetails={individualList}
        />
      ))}
    </Grid>
  );
};

export default ListLibrary;
