"use client";

type LoginBtnProps = {
  action: () => void;
};
const LoginBtn: React.FC<LoginBtnProps> = ({ action }) => {
  return <button onClick={action}>Login</button>;
};
export default LoginBtn;
