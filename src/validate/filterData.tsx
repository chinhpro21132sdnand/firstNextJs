import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";
type DataType = {
  id: string;
  data: {
    users: string[];
  };
};
function FilterData(value: { users: DataType }) {
  const [loggedInUser] = useAuthState(auth);
  const [user, setUser] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (loggedInUser) {
      // Tìm kiếm user phù hợp
      const foundUser = value.users.data.users
        .map((item) => item)
        .flat()
        .find((email) => email !== loggedInUser?.email);
      console.log(foundUser);
      setUser(foundUser);
    }
  }, [loggedInUser, value.users]);

  return user;
}

export default FilterData;
