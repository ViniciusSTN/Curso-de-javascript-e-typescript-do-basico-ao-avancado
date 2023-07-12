import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam
        saepe molestias veritatis corporis, dolorum ea ipsa deleniti nobis! Fuga
        laudantium consequuntur ipsa quo qui quibusdam voluptate exercitationem
        beatae eos.
      </Paragrafo>
    </Container>
  );
}
