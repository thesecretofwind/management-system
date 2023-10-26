import { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { login } from '@/request/api';
import initLoginBackground from './init';
import styles from './login.module.scss';
// 直接引入变成全局样式，用于覆盖UI组件样式(注：覆盖的样式一般需要在本组件的某个类名下，即使得覆盖样式只在该组件生效)
import './login.scss';

export interface UserForm {
  username: string;
  password: string;
  capthcha: string;
}

const CAPTHCHA_URL = 'https://www.php.cn/captcha.html';

const Login = () => {
  // 组件加载完毕后，执行函数生成背景
  useEffect(() => {
    initLoginBackground();
    changeCaptchaImg();
    // 窗口变动时重新渲染canvas
    window.onresize = initLoginBackground;
  }, []);
  const [captchaUrl, setCaptchaUrl] = useState(`${CAPTHCHA_URL}?t=${new Date().getTime()}`)

  const [form] = Form.useForm<UserForm>();

  const changeCaptchaImg = () => {
    setCaptchaUrl(`${CAPTHCHA_URL}?t=${new Date().getTime()}`);
  };

  const onFinish = (value: UserForm) => {
    console.log(value);
    login(value);
  };

  // const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  // }
  return (
    <div className={styles.loginPage}>
      {/* 背景 */}
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      {/* 登录内容 */}
      <div className={styles.loginBox}>
        {/* 标题 */}
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单 */}

        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          className="loginForm"
          onFinish={onFinish}
        >
          <Form.Item name="username">
            <Input size="large" placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password size="large" placeholder="密码" />
          </Form.Item>
          <Form.Item name="capthcha">
            <div className={styles.capthchaBox}>
              <Input size="large" placeholder="验证码" />
              <div className={styles.captchaImg} onClick={changeCaptchaImg}>
                <img
                  height="38"
                  src={captchaUrl}
                  alt=""
                />
              </div>
            </div>
          </Form.Item>
          <Form.Item>
          <Button type="primary" size="large" htmlType="submit" block >
              登陆
            </Button>
          </Form.Item>
        </Form>
        {/* <div className="loginForm">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input  size="large" placeholder="用户名" onChange={usernameChange}/> 
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
        </div> */}
      </div>
    </div>
  );
};

export default Login;
