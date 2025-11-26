import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Main from "./Main";
import scss from "./LayoutSite.module.scss";

const LayoutSite = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={scss.wrapper}>
      <SideBar />
      <div className={scss.content}>
        <TopBar />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default LayoutSite;
