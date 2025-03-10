import { useState } from "react";
import { User } from "../lib/types";
import Image from "next/image";

interface Props {
  user: User;
}

type infoType = "name" | "email" | "location" | "dob" | "password";

const UserCard: React.FC<Props> = ({ user }) => {
  const [infoType, setInfoType] = useState<infoType>("name");

  const infoMap = {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    location: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
    dob: new Date(user.dob.date).toLocaleDateString(),
    password: user.login.password,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <Image
      src={user.picture.large}
      alt="User"
      width={100}
      height={100}
      className="mx-auto rounded-full mb-4"
      priority
      />
      <h2 className="text-xl font-bold">{infoMap[infoType]}</h2>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={() => setInfoType("name")}>👤</button>
        <button onClick={() => setInfoType("email")}>📧</button>
        <button onClick={() => setInfoType("location")}>📍</button>
        <button onClick={() => setInfoType("dob")}>🎂</button>
        <button onClick={() => setInfoType("password")}>🔑</button>
      </div>
    </div>
  );
};

export default UserCard;