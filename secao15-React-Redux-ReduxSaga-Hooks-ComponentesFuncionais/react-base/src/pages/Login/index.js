import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

export default function Login() {
  // substitui os estados de componentes usados em componentes de classe
  // primeiro parâmetro é a função, o segundo é um array de dependências para executar mais de uma vez a função caso necessário
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
