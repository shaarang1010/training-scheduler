import "./App.css";
import "flowbite";
import { AppRoutes } from "./routes/Routes";
import { CalendarProvider } from "./context/calendar/CalendarContex";

function App() {
  return (
    <div class="container lg:max-w-full mx-auto">
      <CalendarProvider>
        <AppRoutes />
      </CalendarProvider>
    </div>
  );
}

export default App;
