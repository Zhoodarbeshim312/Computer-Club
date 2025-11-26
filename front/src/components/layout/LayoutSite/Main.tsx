import scss from "./Main.module.scss";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className={scss.main}>{children}</main>;
};

export default Main;
