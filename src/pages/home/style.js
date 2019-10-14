import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(153,170,255,1);
  background-image: radial-gradient(circle, rgba(164,255,153,0.4), rgba(153,170,255,1));
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: white;
  border-radius: .6rem .6rem 0.25rem 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.section`
  width: 100%;
  padding: 1rem;
  border-radius: .6rem .6rem 0 0;
  background-color: hsl(0,0%,94%);
  display: flex;
  align-items: center;
`;

export const Dot = styled.div`
  display: block;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 1rem;
  background-color: #ff544d;
  border: 1px solid #dc3f3a;
  margin: 0 0.3rem;
`;

export const Dot2 = styled(Dot)`
  background-color: #ffb92a;
  border: 1px solid #dc9619;
`;

export const Dot3 = styled(Dot)`
  background-color: #1cbc30;
  border: 1px solid #14a328;
`;

export const Title = styled.h1`
  padding: 5rem 0 2rem 0;
`;
