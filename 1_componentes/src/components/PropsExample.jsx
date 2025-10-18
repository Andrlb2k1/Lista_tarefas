import React from 'react';

const PropsExample = ({name, age}) => {
  return (
    <div>
      <h3>Olá {name}</h3>
      <p>Eu tenho {age} anos.</p>
    </div>
  )
}

export default PropsExample;