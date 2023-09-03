import { Component, JSX } from "solid-js";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@suid/material";

type Props = {
  title?: string;
  onSubmitHandler: (e: JSX.EventHandler<HTMLInputElement, InputEvent>) => void;
  children: JSX.Element;
  buttonTitle: string;
};

const CardComponent: Component<Props> = (props) => {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant="h3" component={"div"}>
          {props.title}
        </Typography>
        {props.children}
      </CardContent>
      <CardActions>
        <Button size="medium" onclick={() => props.onSubmitHandler}>
          {props.buttonTitle}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
