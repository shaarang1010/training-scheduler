import { createSignal } from "solid-js";
import "./App.css";
import { Button, Container } from "@suid/material";
import { LoginForm } from "./components/forms/login/Login";
function App() {
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  return (
    <Container>
      <LoginForm
        username={username()}
        setUserName={setUsername}
        password={password()}
        setPassword={setPassword}
        onLoginFormSubmitHandler={() => {}}
      />
      <Button variant="contained" color="success">
        hello
      </Button>
    </Container>
  );
}

export default App;
