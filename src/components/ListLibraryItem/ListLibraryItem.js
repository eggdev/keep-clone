import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiCardContent from "@material-ui/core/CardContent";

import CustomListItems from "../CustomListItems/CustomListItems";

const CardHeader = withStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
}))(MuiCardHeader);

const CardContent = withStyles((theme) => ({
  root: {
    padding: `0 ${theme.spacing(2)}px`,
  },
}))(MuiCardContent);

const ListLibraryItem = ({ listDetails }) => {
  const [listItems, setListItems] = useState(listDetails.listItems);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(listItems);
  }, [listItems]);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="elevation">
        <CardHeader title={listDetails.title} />
        <CardContent>
          <CustomListItems
            listItems={listItems}
            setListItems={setListItems}
            inputsDisabled
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ListLibraryItem;
