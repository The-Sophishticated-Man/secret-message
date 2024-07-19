import style from "./SendMessage.module.css";
import Button from "../../components/Button";
import MessageSuccessful from "../../components/MessageSuccessful/MessageSuccessful";
import useSendSecretMessage from "../../hooks/useSendSecretMessage";
const SendMessage = () => {
  const { success, username, setMessage, submitMessage, error, message } =
    useSendSecretMessage();
  return (
    <section className={style.sendMessageSection}>
      {!success ? (
        <>
          <form className={style.sendMessageForm} onSubmit={submitMessage}>
            <h1 className={style.sendMessageHeader}>
              Send a secret message to {username} !
            </h1>
            <div className={style.sendMessageBox}>
              <textarea
                name="secretMessage"
                className={style.sendMessageInput}
                maxLength={1000}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <p className={style.characterCounter}>{message.length}/1000</p>
            </div>
          </form>
          <Button
            OnClick={submitMessage}
            btnType="btnPrimary"
            className={style.sendMessageBtn}
          >
            Send Message
          </Button>
          <p className="text-danger">{error}</p>
        </>
      ) : (
        <MessageSuccessful />
      )}
    </section>
  );
};

export default SendMessage;
