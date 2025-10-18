import {useState} from 'react'

// useState = hooks
const UseStateComponent = () => {

    // Uma variável de consulta e uma variável de alteração
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
        // setCount(count + 1)
        console.log(count)
    }

    const [user, setUser] = useState(
        {  
            name: 'André', 
            age: 23,
            hobbies: ['Cozinhar', 'Programação']
        }
    )

    // Sempre que vamos alterar o valor de algo => useState
    // Se é somente leitura => var, state
    const updateUserAge = () => {
        setUser((prevUser) => (
            {
                ...prevUser,
                age: prevUser.age + 1,
            }
        ))
    }

  return (
    <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>

        <p>Nome: {user.name}</p>
        <p>Idade: {user.age}</p>
        <button onClick={updateUserAge}>Incrementar idade</button>
    </div>
  )
}

export default UseStateComponent