import { useState, useEffect } from "react";
import { User } from "./types";

//const API_KEY = "D6KN-XIY6-KN7I-BAMY";
const API_URL = `https://randomuser.me/api/`;

export function useFetchUser() {
  const [user, setUser] = useState<User | null>(null);
  const [history, setHistory] = useState<User[]>([]);

  const fetchUser = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!data || !data.results || data.results.length === 0) {
        throw new Error("No se encontraron resultados en la API");
      }

      const newUser = data.results[0];

      setUser(newUser);
      setHistory((prevHistory) => [newUser, ...prevHistory]);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, history, fetchUser };
};