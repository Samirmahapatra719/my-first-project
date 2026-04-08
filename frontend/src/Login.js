export default function Login({setUser}){

  const joinChat=(e)=>{
    e.preventDefault();
    setUser(e.target.username.value);
  };

  return(
    <form onSubmit={joinChat}>
      <h2>Join Chat</h2>
      <input name="username" placeholder="Enter Name"/>
      <button>Enter</button>
    </form>
  );
}