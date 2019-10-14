import styled from 'styled-components';

export const Calendar = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 4px 0 30px 0 rgba(82, 63, 105, 0.15);
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 20rem;
`;

export const Item = styled.td`
  background-color: transparent;
  border-radius: 0.25rem;
  color: #595d6e;
  cursor: pointer;
  font-weight: 400;
  height: 2.3rem;
  padding: 0.25rem;
  text-align: center;
  width: 2.3rem;

  &:hover {
    background-color: #f7f8fa;
  }
`;

export const ItemToday = styled(Item)`
  background-color: #99aaff;
  color: white;
  position: relative;

  &::after {
    border: solid transparent;
    border-bottom-color: white;
    border-top-color: white;
    border-width: 0 0 7px 7px;
    bottom: 4px;
    content: '';
    display: inline-block;
    position: absolute;
    right: 4px;
  }
`;

export const ItemSelected = styled(Item)`
  background-color: #5867DD;
  color: white;

  &:hover {
    background-color: #003399;
  }
`;

export const ItemOutside = styled(Item)`
  color: #989db5;
`;

export const ItemMonth = styled(Item)`
  height: 4.8rem;
  width: 4.8rem;
`;

export const CalendarHead = styled.th`
  color: #595d6e;
  font-weight: 500;
  height: 2.3rem;
`;
