import useCounter from "./hooks/useCounter.js";
import useFetch from "./hooks/useFetch.js";

function User({ name, setName }) {
  const [count, increment, decrement] = useCounter();
  const { data, loading } = useFetch("https://dummyjson.com/users");

  function handleChange(e) {
    setName(e.target.value);
  }

  const usersList = data?.users || [];

  return (
    <div className="card user-card">
      <h1>User Data</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter user name..."
      />
      <h2>User Name is : {name}</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      {loading ? (
        <h3>Loading users...</h3>
      ) : (
        <ul>
          {usersList.slice(0, 5).map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} (ID: {user.id})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default User;