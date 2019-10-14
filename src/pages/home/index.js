import React from 'react';
import { DatePicker } from '../../components/datePicker';
import { Container, Card, Title, Header, Dot, Dot2, Dot3 } from './style';
import moment from 'moment';

const Home = () => (
  <Container>
    <Card>
      <Header>
        <Dot />
        <Dot2 />
        <Dot3 />
      </Header>
      <Title>Choose your date</Title>
      <DatePicker value={ moment().add('2', 'days') } />
    </Card>
  </Container>
);

export default Home;
