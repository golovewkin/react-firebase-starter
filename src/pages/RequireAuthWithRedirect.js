import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { BrowserStorageService } from "../services/BrowserStorageService";
import { commonConst } from "../constants/commonConst";

const RequireAuthWithRedirect = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Redirect user to a page they were trying to access
    const from = BrowserStorageService.getData(commonConst.noAuthUrl);
    if (from && auth.user?.id) {
      BrowserStorageService.removeData(commonConst.noAuthUrl);
      return navigate(from);
    }
  }, [navigate, auth.user?.id]);

  if (auth.user) {
    return children;
  } else {
    return null;
  }
};

export default RequireAuthWithRedirect;