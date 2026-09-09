import { useNavigate } from "react-router-dom";
function Login() {

  const navigate = useNavigate();

  function handleClick(){
    navigate("/");
  }

  return (
    <div>
      <h2>Login Component</h2>

      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;