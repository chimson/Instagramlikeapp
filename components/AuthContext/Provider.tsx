import { api } from "@api/index";
import { UserType } from "@models/User";
import * as React from "react";
import { useQuery } from "react-query";

interface ContextProps {
  user: UserType;
  loading: boolean;
}

const AuthContext = React.createContext<ContextProps | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const { data, isLoading } = useQuery("me", () => api.users.me());

  return (
    <AuthContext.Provider value={{ user: data, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };