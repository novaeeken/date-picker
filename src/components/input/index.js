import styled from 'styled-components'

const Input = styled.input`
    background-color: white;
    border: 1px solid #e2e5ec;
    border-radius: 0.25em;
    box-sizing: border-box;
    color: #282A3C;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.65em 1em;
    text-align: center;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    width: 20rem;

    &:focus {
        border-color: #5867DD;
        outline: 0;
    }

    &:disabled {
        background-color: #F0F3FF;
    }
`;

export default Input;
