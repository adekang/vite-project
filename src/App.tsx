import { useState } from "react";
import styles from "./App.module.scss";
import logoSrc from "@/assets/imgs/vite.png";
import SvgIcon from "@/components/SvgIcon";

function App() {
  const [count, setCount] = useState(0);

  const ok = () => {
    console.log("ok");
  };

  return (
    <div className={styles.app}>
      <h1 border="2 rounded blue-200">12</h1>
      <div className="flex-c">center</div>
      <img className="m-auto mb-4" src={logoSrc} alt="" />
      <p>
        我是react
        <SvgIcon onClick={ok} iconName="react" className={styles.icon_font} />
        你是
      </p>
    </div>
  );
}

export default App;
