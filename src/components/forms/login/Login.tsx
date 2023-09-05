import { TextField, Card, CardContent, Typography, Box } from "@suid/material";
import { Component, Setter } from "solid-js";

type LoginFormProps = {
  username: string;
  setUserName: Setter<string>;
  password: string;
  setPassword: Setter<string>;
  onLoginFormSubmitHandler: () => void;
};

export const LoginForm: Component<LoginFormProps> = (props) => {
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24, fontWeight: 600, textAlign: "center" }}>
          Login into App
        </Typography>
        <Typography variant="h3">Login into the scheduler</Typography>
        <Box component="form" width={400} noValidate autocomplete="off">
          <TextField
            id="username"
            label="Username/Email Address"
            required
            variant="outlined"
            fullWidth
            value={props.username}
            onChange={props.setUserName}
          />
          <TextField
            id="password"
            variant="outlined"
            type="password"
            label="Password"
            fullWidth
            value={props.password}
            onChange={props.setPassword}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
