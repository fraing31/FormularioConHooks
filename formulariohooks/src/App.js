import {useState} from 'react'; //import useState
import './App.css';

function App() {
  const [dataUser, setDataUser] = useState( '' );
  const [nombre, setNombre] = useState( '' );
  const [apellido, setApellido] = useState( '' );
  const [email, setEmail] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [confirm, setConfirm] = useState( '');
  const [user, setUser] = useState( [] ); 

  const agregarUser = (event) => {
    event.preventDefault();
    let nuevoUser = { //captura informacion
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password,
      confirm: confirm,
    }

    setUser( (userPrev) => [...userPrev, nuevoUser]); // añade a la varibale user
    setNombre('');//limpia nombre 
    setApellido( '');
    setEmail('');
    setPassword('');
    setConfirm('');
  }
  return (
    
    <div>
      <h1>
        Registro
      </h1>
        <form onSubmit={agregarUser}>
          <div>
            <label htmlFor='nombreUser'>
              Nombre:
            </label>
            <input type="text" id="nombreUser" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
            {(nombre.length < 2 )? (<small>El nombre debe ser mayor a dos caracteres</small>):" " }
          </div>
          <div>
            <label htmlFor='apellidoUser'>
              Apellido:
            </label>
            <input type="text" id="apellidoUser" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
            {(apellido.length < 2 )? (<small>El apellido debe ser mayor a dos caracteres</small>):" " }
          </div>
          <div>
            <label htmlFor='emailUser'>
              Email:
            </label>
            <input type="email" id="emailUser" value={email} onChange={(event) => setEmail(event.target.value)}/>
            {(email.length < 2 )? (<small>El email debe ser mayor a dos caracteres</small>):" " }
          </div>
          <div>
            <label htmlFor='passwordUser'>
              Password:
            </label>
            <input type="password" id="passwordUser" value={password} onChange={(event) => setPassword(event.target.value)}/>
            {(password.length < 2 )? (<small>El password debe ser mayor a dos caracteres</small>):" " }
          </div>
          <div>
            <label htmlFor='confirmUser'>
              Confirmar Password :
            </label>
            <input type="password" id="confirmUser"  value={confirm} onChange={(event) => setConfirm(event.target.value)}/>
            {(password.length < 2 &&
              password !== confirm )? (<small>El password debe ser mayor a dos caracteres y debe ser el mismo colocado en la parte superior</small>)
            :(password !== confirm )? (<small>El password debe ser el mismo colocado en la parte superior</small>)
            :(password.length < 2 )? (<small>El password debe ser mayor a dos caracteres</small>): ""}
          </div>
          
        </form>

            <h3>
              Datos de Usuario
            </h3>
            <div>
              <ul>
                   <li>
                      Nombre: {nombre}
                   </li>
                   <li>
                      Apellido: {apellido}
                   </li>
                   <li>
                      Email: {email}
                   </li>
                   <li>
                      Password: {password}
                   </li>
                   <li>
                      Confirm Password: {confirm}
                   </li>
              </ul>
              
            </div>
    </div>
  );
}

export default App;
