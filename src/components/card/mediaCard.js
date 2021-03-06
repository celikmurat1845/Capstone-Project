import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import placeholder from "../../assets/placeholder.png";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  module: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    overflow: "hidden",
  },
  image: {
    padding: 3,
  },
  avatar: {
    marginBottom: "0.35em",
  },
});

export default function MediaCard({ post }) {
  const {
    author,
    content,
    detail_url,
    get_comment_count,
    get_like_count,
    get_view_count,
    image,
    published_date,
    slug,
    status,
    title,
    hasUserLiked = false,
  } = post;
  const classes = useStyles();
  const history = useHistory();
  const openDetails = () => {
    history.push(`/detail/${slug}`);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openDetails}>
        <CardMedia
          className={classes.media}
          image={image || placeholder}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {published_date}
          </Typography>
          <p className={classes.module}>{content}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AccountCircle className={classes.avatar} />
        <Typography gutterBottom variant="h6" component="h2">
          {author}
        </Typography>
      </CardActions>
      <CardActions>
        <IconButton aria-label="add to favorites" className={classes.image}>
          <FavoriteIcon color={hasUserLiked ? "secondary" : "primary"} />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_like_count}
        </Typography>
        <IconButton aria-label="view count" className={classes.image}>
          <VisibilityIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_view_count}
        </Typography>
        <IconButton aria-label="comment count" className={classes.image}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_comment_count}
        </Typography>
      </CardActions>
    </Card>
  );
}
