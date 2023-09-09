import { createSignal } from "solid-js";
import "./App.css";
import { LoginForm } from "./components/forms/login/Login";
import "flowbite";
function App() {
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  return (
    <div class="container mx-auto">
      <LoginForm
        username={username()}
        setUserName={setUsername}
        password={password()}
        setPassword={setPassword}
        onLoginFormSubmitHandler={() => {
          console.log(username());
        }}
      />
    </div>
  );
}

export default App;
