import { Grid } from "@material-ui/core";
import React from "react";
import Cardcomponent from "./Cardcomponent";
import img from "./../assets/images/product1.jpg";

function Content() {
  return (
    <div>
      <Grid container spacing="2">
        <Grid item xs={12} sm={4}>
          <Cardcomponent
            title="Product Title Here"
            subTitle="Subtitle here"
            imgSrc={img}
            description="Description Here. "
            avatarSrc="img"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
