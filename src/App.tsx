import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <h1 border="2 rounded blue-200">12</h1>
      <div className="flex-c">center</div>
    </div>
  );
}

export default App;
