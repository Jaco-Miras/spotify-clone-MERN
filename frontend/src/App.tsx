import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/home.page";
import { AuthCallbackPage } from "./pages/auth-callback/auth.callback.page";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { MainLayout } from "./layout/main-layout";
import { ChatPage } from "./pages/chat/chat-page";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </>
  );
};

export default App;
