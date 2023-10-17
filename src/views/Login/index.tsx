import { useEffect } from "react";
import { Button, Input, Space } from "antd";
import initLoginBackground from "./init";
import styles from "./login.module.scss";
// 直接引入变成全局样式，用于覆盖UI组件样式(注：覆盖的样式一般需要在本组件的某个类名下，即使得覆盖样式只在该组件生效)
import './login.scss';

const Login = () => {
  // 组件加载完毕后，执行函数生成背景
  useEffect(() => {
    initLoginBackground();
    // 窗口变动时重新渲染canvas
    window.onresize = initLoginBackground;
  }, []);

  const changeCaptchaImg = () => {

  }
  return (
    <div className={styles.loginPage}>
      {/* 背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登录内容 */}
      <div className={styles.loginBox}>
        {/* 标题 */}
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单 */}
        <div className="loginForm">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input  size="large" placeholder="用户名" /> 
            <Input.Password size="large" placeholder="密码" />
            <div className={styles.capthchaBox}>
              <Input size="large" placeholder="验证码" /> 
              <div className={styles.captchaImg} onClick={changeCaptchaImg}>
                <img height="38" src="https://www.php.cn/captcha.html?t=1697544357914" alt="" />
              </div>
            </div>
            <Button type="primary" size="large" block>
              登陆
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Login;