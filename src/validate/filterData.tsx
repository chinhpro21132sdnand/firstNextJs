import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";

function FilterData(value: { users: string[] }) {
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
