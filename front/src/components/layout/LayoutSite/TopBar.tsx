import Image from "next/image";
import scss from "./TopBar.module.scss";
import logo from "../../../../public/logo.svg";

const TopBar = () => {
  return (
    <header className={scss.topbar}>
      <div className="container">
        <div className={scss.logo}>
          <Image width={35} height={35} src={logo} alt="img" />
          <h2>CM.Club</h2>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
