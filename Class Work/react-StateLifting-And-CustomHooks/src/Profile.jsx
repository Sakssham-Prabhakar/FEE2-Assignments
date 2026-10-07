import useCounter from "./hooks/useCounter.js";

function Profile({ name }) {
  const [count, increment, decrement] = useCounter();

  return (
    <div className="card profile-card">
      <h1>User Profile</h1>
      <h2>Profile name is : {name}</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Profile;