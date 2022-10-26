import { LoginAppWithAuthOverview } from "./LoginAppWithAuthOverview";
import { AuthContextProvider } from "./store/AuthContextProvider";

export const LoginAppWithAuth: React.FC = () => {
  return (
    <AuthContextProvider>
      <LoginAppWithAuthOverview />
    </AuthContextProvider>
  );
};
