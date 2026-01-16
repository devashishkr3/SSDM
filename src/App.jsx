import PublicRoutes from "./routes/PublicRoutes";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

function App() {
  return (
    <>
      {/* All Public Pages */}
      <PublicRoutes />

      {/* Global UI */}
      <ScrollToTopButton />
    </>
  );
}

export default App;
