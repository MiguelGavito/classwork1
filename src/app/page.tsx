"use client";
import { useFetchUser } from "./lib/useFetchUser";
import UserCard from "./components/UserCard";
import UserHistory from "./components/UserHistory";


const Page: React.FC = () => {
  const { user, history, fetchUser } = useFetchUser();

  return (
    <div className="flex gap-4 p-8">
      {/* Historial de usuarios */}
      <UserHistory history={history} onSelectUser={() => {}} />
      
      {/* Tarjeta de usuario y botón de recarga */}
      <div className="flex flex-col items-center">
        {user && <UserCard user={user} />}
        <button
          onClick={fetchUser}
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
        >
          🔄 Obtener Nuevo Usuario
        </button>
      </div>
    </div>
  );
};

export default Page;
