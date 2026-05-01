// hooks/useRole.js
import { useState, useEffect } from "react";

export const useRole = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const syncRole = () => {
      setRole(localStorage.getItem("app_user_role") || "student");
    };

    syncRole();
    window.addEventListener("storage", syncRole);

    return () => window.removeEventListener("storage", syncRole);
  }, []);

  return role;
};
