import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`


export const Main = styled.main`
    margin: 2rem 4rem;
    width: 100%;
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-size: 4rem;
    color: var(--dark);
`

export const CreateNewButton = styled.button`
    width: 100%;
    max-width: 120px;
    height: 5rem;
    font-size: 2rem;
    background: transparent;
    outline: none;
    border: 0.2rem solid var(--primary); 
    color: var(--primary);
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        background: var(--primary);
        color: var(--ghost-white);
    }
`