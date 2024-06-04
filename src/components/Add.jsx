import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Add as AddIcon, EmojiEmotions, Send } from "@mui/icons-material";
import styled from "@emotion/styled";
const Add = () => {
  const [open, setOpen] = React.useState(false);
  const UserBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  }));
  return (
    <div>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: "30px", height: "30px" }}
              src="https://scontent.ftxl3-2.fna.fbcdn.net/v/t1.6435-9/74529548_2785090951509606_4344335338022371328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4RsDeeXWJoMAX-_m7Hr&_nc_ht=scontent.ftxl3-2.fna&oh=00_AfDrpZKdqdceaKoNR4xaSqlL2gA1MIdcCfnTN-Po6x6xIw&oe=64315786 "
            />
            <Typography variant="span">VI</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="Whats on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <EmojiEmotions />
            <EmojiEmotions />
            <EmojiEmotions />
          </Stack>
          <Button fullWidth variant="contained" endIcon={<Send />}>
            Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Add;
