import { User } from "../lib/types";
import Image from "next/image";

interface Props {
  history: User[];
  onSelectUser: (user: User) => void;
}

const UserHistory: React.FC<Props> = ({ history, onSelectUser }) => {
  return (
    <div className="bg-gray-100 p-4 w-64 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Historial</h3>
      <ul>
        {history.map((user, index) => (
          <li
            key={index}
            className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelectUser(user)}
          >
            <Image src={user.picture.thumbnail} alt="User" className="w-8 h-8 rounded-full" />
            <span>{user.name.first} {user.name.last}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHistory;
