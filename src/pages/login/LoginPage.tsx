import { createSignal } from "solid-js";
import { GridContainer } from "../../components/layout/grid/GridContainer";
import { GridCol } from "../../components/layout/grid/Columns";
import { LoginForm } from "../../components/forms/login/Login";
import { useNavigate } from "@solidjs/router";

const LoginPage = () => {
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
  const navigate = useNavigate();

  return (
    <GridContainer columns={1} justify="center" classes="place-items-center">
      <GridCol span={12}>
        <LoginForm
          username={username()}
          setUserName={setUsername}
          password={password()}
          setPassword={setPassword}
          onLoginFormSubmitHandler={() => {
            sessionStorage.setItem("token", "sometoken");
            navigate("/dashboard");
          }}
        />
      </GridCol>
    </GridContainer>
  );
};

export default LoginPage;
