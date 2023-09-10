import "./App.css";
import "flowbite";
import LoginPage from "./pages/login/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div class="container w-full mx-auto">
      {/* <LoginPage /> */}
      <Dashboard />
    </div>
  );
}

export default App;
