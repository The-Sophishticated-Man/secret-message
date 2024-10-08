import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import style from "./UserHome.module.css";
import Cookies from "js-cookie";
import { FaCopy } from "react-icons/fa";
const UserHome = () => {
  const userCookies = JSON.parse(Cookies.get("SMUser")!);
  const link = `http://localhost:5173/send/${userCookies.id}`;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
  };
  return (
    <section className={style.userHomeSection}>
      <h1 className={style.userHeading}>Welcome {userCookies.user} !</h1>
      <div className={style.userLink}>
        <h3>Your link has been generated :</h3>
        <div className={style.userLinkContainer}>
          <input
            className={style.userLinkInput}
            type="text"
            readOnly
            value={link}
          />
          <FaCopy
            className={style.copyIcon}
            onClick={copyToClipboard}
            size={35}
          />
        </div>
        <p className={style.userLinkText}>
          share this link with your friends to receive secret messages !
        </p>
        <div className={style.userLinkShareOptions}>
          <FaSquareFacebook color="#1877F2" />
          <FaSquareXTwitter color="#1DA1F2" />
          <FaSquareInstagram color="#E1306C" />
          <FaSquareWhatsapp color="#25D366" />
        </div>
      </div>
    </section>
  );
};

export default UserHome;
