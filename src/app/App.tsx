import { ReactQueryProvider, AuthProvider } from "./providers";
import { Router } from "./router";

function App() {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default App;
