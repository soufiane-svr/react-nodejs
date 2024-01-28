import Axios from 'axios'



function App() {

      Axios.get('http://localhost:3001/users').then(res =>{
        console.log(res)
      })


    const users = [
      {id : 1, name : 'soufiane',age :25 , email : "hakim@gmail.com"},
      {id : 2, name : 'hamid',age :21 , email : "said@gmail.com"},
      {id : 3, name : 'walid',age :53 , email : "raniea@gmail.com"},
    ]
   
  return (
    <div>
      {users.map(user => {
        return(
          <div>
            <ul>
              <li>
                {user.name}
              </li>
              <li>
                {user.age}
              </li>
              <li>
                {user.email}
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default App;
