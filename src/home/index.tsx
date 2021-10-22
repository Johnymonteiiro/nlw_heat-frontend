import Logo from "../assets/logo.svg";
import Logo2 from "../assets/rocketLog.png";
import styles from "./style.module.scss";

export function Home() {
  

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.Logo}>
          <img src={Logo} alt="" />
      </div>
      <p className={styles.homeContent}>
          Venha fazer parte do maior evento da comunidade de Dev´s
          e juntos vamos construir o futuro!!
      </p>
      <div className={styles.rocketSeatLogo}>
          <img src={Logo2} alt="" />
      </div>
    </div>
  );
}