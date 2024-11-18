import { useAuthStore } from "../../store/authUser";

const HomeScreen = () => {
  const { logout } = useAuthStore();
  return <button onClick={logout}>Log Out</button>;
};

export default HomeScreen;
