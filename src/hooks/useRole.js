// hooks/useRole.js
import { useState, useEffect } from "react";

export const useRole = () => {
  const [role, setRole] = useState("student"); // Varsayılan olarak öğrenci

  useEffect(() => {
    const savedRole = localStorage.getItem("app_user_role");
    if (savedRole) setRole(savedRole);
  }, []);

  return role;
};
