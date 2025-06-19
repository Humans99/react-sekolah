import { Toaster } from "./components/ui/sonner";
import MainRoute from "./routes/route";
import "./styles/App.css";

function App() {
  // Path *'s
  return (
    <>
      <MainRoute />
      <Toaster duration={3000} expand />
    </>
  );
}

export default App;
