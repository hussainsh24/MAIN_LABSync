function Login({ onLogin }) {
  return (
    <div className="login-page">

      <div className="login-left">
        <h1>LABSYNC</h1>
        <h2>Research Laboratory<br />Management System</h2>
        <p>
          Manage researchers, equipment, inventory,
          projects and experiments in one place.
        </p>
      </div>

      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Sign in to your laboratory account</p>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        />

        <button onClick={onLogin}>
          Sign In
        </button>

        <p className="login-footer">
          Secure Research Lab Access
        </p>
      </div>

    </div>
  );
}

export default Login;
