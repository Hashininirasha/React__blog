import { Avatar, Container, Divider, ImageList, ImageListItem, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop :theme.spacing(2),
  }
  
}));




function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography>

        online Friends
      </Typography>
      <Avatar alt="Remy Sharp" src="https://anarkalidresses.co.in/wp-content/uploads/2016/11/Long-Frock-Anarkali-Suit.jpg"/>
      <Typography gutterBottom >
        Gallery
      </Typography>
      <ImageList rowHeight={120} className={classes.imageList} cols={2}>
  
    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt=" " />
    </ImageListItem>

    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt=" " />
    </ImageListItem>

    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt=" " />
    </ImageListItem>

    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt=" " />
    </ImageListItem>

    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt=" " />
    </ImageListItem>

    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/vegetables.jpg" alt=" " />
    </ImageListItem>
  
</ImageList>
<Typography gutterBottom >
        Catogeries
      </Typography>

      <ListItem button>
    <ListItemText primary="Inbox" />
  </ListItem>
  <Divider />
  
  <ListItem button divider>
    <ListItemText primary="Drafts" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
    </Container>
  );
}

export default Rightbar;