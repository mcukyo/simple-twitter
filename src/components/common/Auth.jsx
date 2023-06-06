import styles from './Auth.module.scss'

const AuthContainer = ({ children }) => {
  return <div className={styles.authContainer}>{children}</div>;
};

const AuthInput = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  alertText,
  wordCount,
}) => {
  return (
    <>
      <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <input
          className={styles.input}
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
        />
      </div>
      <div className={styles.messageContainer}>
        <div className={styles.alertText}>{alertText}</div>
        <div className={styles.wordCount}>{wordCount}</div>
      </div>
    </>
  );
};

const AuthButton = ({children}) => {
  return(
    <button className={styles.button}>{children}</button>
  )
}

const LinkTextContainer = ({ children }) => {
  return <div className={styles.linkTextContainer}>{children}</div>;
};


const AuthLinkText = ({ children }) => {
  return <div className={styles.linkText}>{children}</div>;
};

const AuthTitle = ({ children }) => {
  return <div className={styles.authTitle}>{children}</div>;
};

// const MessageContainer = ({ children }) => {
//   return <div className={styles.messageContainer}>{children}</div>;
// };

// const AlertText = ({ children }) => {
//   return <div className={styles.alertText}>{children}</div>;
// };

// const WordCount = ({ children }) => {
//   return <div className={styles.wordCount}>{children}</div>;
// };


export default AuthInput;
export {AuthButton};
export { AuthLinkText };
export { LinkTextContainer };
export { AuthTitle };
export { AuthContainer }
// export { AlertText }
// export { WordCount };
// export { MessageContainer }

