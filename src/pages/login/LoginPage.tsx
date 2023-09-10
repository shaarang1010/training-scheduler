import { createSignal } from "solid-js";
import { GridContainer } from "../../components/layout/grid/GridContainer";
import { GridCol } from "../../components/layout/grid/Columns";
import { LoginForm } from "../../components/forms/login/Login";

const LoginPage = () => {
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  return (
    <GridContainer columns={12} justify="center" classes="place-items-center">
      <GridCol span={12}>
        <div class="mt-24">
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
      </GridCol>
    </GridContainer>
  );
};

export default LoginPage;
