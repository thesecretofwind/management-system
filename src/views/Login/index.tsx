import styles from "./login.module.scss";
import initLoginBackground from "./init";
import { useEffect } from "react";

const Login = () => {
  // 组件加载完毕后，执行函数生成背景
  useEffect(() => {
    initLoginBackground();
  }, []);
  return (
    <div className={styles.loginPage}>
      {/* 背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登录内容 */}
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
