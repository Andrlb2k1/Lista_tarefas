import {useState, useEffect} from 'react'

const UseEffectExamples = () => {

    // Sem dependências
    useEffect(() => {
        console.log('Rodou UE1')
    })

    // Com dependências vazias / array dep. vazio
    useEffect(() => {
        console.log('Rodou UE2')
    }, [])

    // useState ativa a re-renderização
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    // Com dependências
    useEffect(() => {
        console.log('Rodou UE3')
    }, [count, count2])

  return (
    <div>
        <p>{count}</p>
        <p>{count2}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
        <button onClick={() => setCount2(count2 + 1)}>Aumentar contagem</button>
    </div>
  )
}

export default UseEffectExamples