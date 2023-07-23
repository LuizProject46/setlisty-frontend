import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const FormContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        width: 100%;
        max-width: 500px;
        height: auto;
    }
`

export const ImageContainer = styled.div`
    width: 50%;
    height: 100vh;
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 400;
    color: var(--dark);
    margin-bottom: 2rem;
`

export const SubTitle = styled.h2`
    font-size: 2rem;
    font-weight: 300;
    color: var(--gray);
    margin-bottom: 2.5rem;
`

export const Form = styled.form``

export const InputArea = styled.div`
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    max-width: 300px;
    height: 5rem;
    border-radius: 1rem;
    margin-top: 1.5rem;
    padding: 1rem;
    font-size: 1.4rem;
    transition: all 200ms ease-in-out;
    outline: none;
    background: var(--ghost-white);
    border: 1px solid var(--gray);
    &:focus{
        border-color : var(--primary);
    }
`

export const ButtonSignIn = styled.button`
    width: 100%;
    max-width: 300px;
    height: 4rem;
    margin-top: 1.5rem;
    cursor: pointer;
    font-size: 1.6rem;
    background: var(--primary);
    color: var(--ghost-white);
    border: none;
    border-radius: 0.5rem;
    transition: all 200ms ease-in-out;
    &:hover{
        background: var(--dark-primary);
    }

`

export const ButtonGoogleSignIn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    max-width: 300px;
    height: 6rem;
    margin-top: 1.5rem;
    cursor: pointer;
    font-size: 2rem;
    background: var(--light-gray);
    color: var(--dark);
    border: none;
    border-radius: 0.5rem;
    transition: all 200ms ease-in-out;
    &:hover{
        background: var(--light-gray-secondary);
    }

`