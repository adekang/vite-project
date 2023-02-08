import { useState } from "react";
import styles from "./App.module.scss";
import logoSrc from "@assets/imgs/vite.png";
import { ReactComponent as ReactLogo } from "@assets/icons/react.svg";
import SvgIcon from "./components/SvgIcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <h1 border="2 rounded blue-200">12</h1>
      <div className="flex-c">center</div>
      <img className="m-auto mb-4" src={logoSrc} alt="" />
      <ReactLogo />
      <SvgIcon iconName="react" color="red" />
    </div>
  );
}

export default App;
