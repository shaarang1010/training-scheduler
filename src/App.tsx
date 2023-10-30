import "./App.css";
import "flowbite";
import { AppRoutes } from "./routes/Routes";
import { CalendarProvider } from "./context/calendar/CalendarContex";
// import { AnnotationProvider } from "./context/annotation/AnnotationContext";

function App() {
  return (
    <div class="container lg:max-w-full mx-auto">
      <CalendarProvider>
        {/* <AnnotationProvider> */}
        <AppRoutes />
        {/* </AnnotationProvider> */}
      </CalendarProvider>
    </div>
  );
}

export default App;
