import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, CardMedia, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  media: {
    height: 150,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cardcomponent = (props) => {
  const classes = useStyles();
  const { avatarSrc, title, imgSrc, subTitle, description } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia className={classes.media} image={imgSrc} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default Cardcomponent;
