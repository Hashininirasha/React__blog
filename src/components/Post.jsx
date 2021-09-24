import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop :theme.spacing(2),
  },
  media: {
      height: 250,
      [theme.breakpoints.down('sm')]: {
        height: 150
      },

  },
  card: {
      marginBottom: theme.spacing(5)

  }
  
}));




function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media}
            image="https://th.bing.com/th/id/OIP.GBwbOPbKXUHaEtoPsEFCIgHaE8?pid=ImgDet&rs=1"
            title = "My post"


            />
            <CardContent>
                <Typography gutterBottom variant="h4">
                    My First Post
                </Typography>
                <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button  size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
  );
}

export default Post;