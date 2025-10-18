import React from 'react'

const JsxExamples = () => {

    const userName = 'André'

    const user = {
        name: 'André',
        lastName: 'Bristot',
    }

    const userIsLoggedIn = false

    const userRole = 'admin'

    const users = [{
        id: 1,
        name: 'André'
    }, {
        id: 2,
        name: 'João'
    }, {
        id: 3,
        name: 'Marcos'
    }]

    function getGreeting(name) {
        return `Olá, ${name}`
    }

  return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        {/* Listando dados do usuário */}
        <p>O nome do usuário é {userName}</p>
        <p>
            Usuário: {user.name} {user.lastName}
        </p>
        <p>{getGreeting(userName)}</p>
        <p>{getGreeting("André")}</p>

        {/* Diferenças do HTML */}
        <div className="alguma-coisa">Este cara</div>

        <div className="teste">OK</div>

        <button onClick={() => alert("Teste")}>Clique em mim</button>

        <input type="text" placeholder="Digite algo" />

        {/* Renderização condicional */}
        {userIsLoggedIn ? (
            <p>Caso: está logado</p>
        ) : (
            <p>Caso: não está logado</p>
        )}

        <p>{userRole === "admin" && <p>Você é um admin</p>}</p>

        {/* Renderização de listas */}
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JsxExamples