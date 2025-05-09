import React from "react";
import { Card, CardHeader, CardContent, CardActions, Typography, Stack } from "@mui/material";
import { Favorite, ChatBubbleOutlineOutlined, RepeatOutlined, IosShareOutlined } from "@mui/icons-material";

const CustomerCard = (props) => {
  return (
    <Card sx={{ margin: 3, width: "80%", padding: "1em", borderRadius: "30px" }}>
      <CardHeader
        sx={{fontSize: "1em"}}
        title={props.item.fullname}
        subheader={props.item.user}
      />
      <CardContent>
        <Typography variant="h5">
          {props.item.opinion}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={"row"} spacing={2}>
          <ChatBubbleOutlineOutlined />
          <RepeatOutlined />
          <Favorite sx={{ color: "red" }} />
          <IosShareOutlined />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CustomerCard;