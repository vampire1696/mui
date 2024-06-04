import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friend
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Cindy Baker" src="" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://scontent.ftxl3-1.fna.fbcdn.net/v/t1.18169-9/22688079_1717629638255748_2016091250422406940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=yUwznvMkelYAX-k70kf&_nc_ht=scontent.ftxl3-1.fna&oh=00_AfD_rUUWc0PwdUicwsQ2ny5vaSMxuXt1QuTux5hldROFug&oe=64313CAF"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://scontent.ftxl3-1.fna.fbcdn.net/v/t1.18169-9/22688079_1717629638255748_2016091250422406940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=yUwznvMkelYAX-k70kf&_nc_ht=scontent.ftxl3-1.fna&oh=00_AfD_rUUWc0PwdUicwsQ2ny5vaSMxuXt1QuTux5hldROFug&oe=64313CAF"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://scontent.ftxl3-1.fna.fbcdn.net/v/t1.18169-9/22688079_1717629638255748_2016091250422406940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=yUwznvMkelYAX-k70kf&_nc_ht=scontent.ftxl3-1.fna&oh=00_AfD_rUUWc0PwdUicwsQ2ny5vaSMxuXt1QuTux5hldROFug&oe=64313CAF"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversiations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.ftxl3-2.fna.fbcdn.net/v/t1.6435-9/74529548_2785090951509606_4344335338022371328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4RsDeeXWJoMAX-_m7Hr&_nc_ht=scontent.ftxl3-2.fna&oh=00_AfDrpZKdqdceaKoNR4xaSqlL2gA1MIdcCfnTN-Po6x6xIw&oe=64315786"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
