import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";

function FilterData(value: Array): any {
  const [loggedInUser] = useAuthState(auth);
  const user = value.users.find((email) => email !== loggedInUser?.email);

  return user;
}
export default FilterData;
