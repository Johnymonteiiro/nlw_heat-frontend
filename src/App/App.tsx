import { useContext } from "react";
import { LoginBox } from "../components/LoginBox";
import { MessageList } from "../components/MessagesList";
import { SendMessageForm } from "../components/SendMessageForm";
import { AuthContext } from "../context/auth";
import { Home } from "../home";
import styles from "./App.module.scss";

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <main
      className={`${styles.contentWrapper} ${ !!user ? styles.contentSigned : "" }`}>
      {!user ? <Home/> :<MessageList />}
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
