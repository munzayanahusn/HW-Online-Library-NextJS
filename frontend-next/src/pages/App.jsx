import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import BookDetails from "./BooksDetail";
import EditBookPage from "./Editbook";
import Homepage from "./Homepage";
import NewBookPage from "./NewBooks";
import Register from "./Register";
import styles from "./styles/App.css"; 

export default function App() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      {router.pathname === "/Homepage" && <Homepage />}
      {router.pathname === "/Register" && <Register />}
      {router.pathname === "/NewBooks" && <NewBookPage />}
      {router.pathname.startsWith("/BooksDetail/") && <BookDetails />}
      {router.pathname.startsWith("/Editbook/") && <EditBookPage />}
    </div>
  );
}
