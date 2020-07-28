import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

const ListLibrary = lazy(() => import("./ListLibrary/ListLibrary"));

const useStyles = makeStyles((theme) => ({
  routeContainer: {
    minHeight: "100%",
    minWidth: "100%",
    padding: theme.spacing(2),
  },
}));
const AppRoutes = () => {
  const { routeContainer } = useStyles();
  return (
    <Box className={routeContainer}>
      <Suspense fallback={<div>...Loading</div>}>
        <Switch>
          <Route path="/" component={ListLibrary} />
        </Switch>
      </Suspense>
    </Box>
  );
};

export default AppRoutes;
