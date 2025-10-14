import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import Button from "react-bootstrap/Button";

function Login() {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/");
  };

  const onLoginClick = (i) => {
    i.preventDefault(); // stops page reload
    navigate("/home");  // redirect after login
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Welcome Back !</h1>
        <p className={styles.subtitle}>Please login to continue</p>

        <form className={styles.form} onSubmit={onLoginClick}>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input type="text" required placeholder="Enter your username" />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" required placeholder="Enter your password" />
          </div>

          <div className={styles.buttonGroup}>
            <Button
              className={styles.loginBtn}
              variant="primary"
              type="submit"
            >
              Login
            </Button>
            <Button
              type="button"
              className={styles.backBtn}
              variant="outline-secondary"
              onClick={onBackClick}
            >
              Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
