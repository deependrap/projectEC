import { Grid } from "@material-ui/core";
import React from "react";
import Content from "../../components/Content";

function Product() {
  return (
    <Grid container direction="column" spacing="2">
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default Product;
