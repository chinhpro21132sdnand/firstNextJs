import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";
type DataType = {
  id: string;
  name: string;
};
function FilterData(value: { users: DataType[] }) {
  const [loggedInUser] = useAuthState(auth);
  const [user, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (loggedInUser) {
      const foundUser = value.data.users.find(
        (email) => email !== loggedInUser?.email
      );
      setUser(foundUser);
    }
  }, [loggedInUser, value.users]);

  return user;
}

export default FilterData;
