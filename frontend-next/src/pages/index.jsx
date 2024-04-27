import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./styles/index.css"; 

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <App />;
    </div>
  )
};

export default IndexPage;