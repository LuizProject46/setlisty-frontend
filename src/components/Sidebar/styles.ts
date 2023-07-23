import styled from 'styled-components'

export const Aside = styled.aside`
    width: 14rem;
    height: 100vh;
    background: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AvatarContainer = styled.div`
    width: 7rem;
    height: 7rem;
    margin: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Avatar = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    object-fit: cover;
    border: 0.4rem solid var(--gray);
`

export const Nav = styled.nav`
    width: 100%;
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > ul > li {
        list-style: none;
        display: flex;
        justify-content:center;
        padding: 1rem 1.2rem;
        transition: all 200ms ease-in-out;
        border-radius: 0.5rem;
    }

    & > ul > li:hover{
        background: var(--gray);
    }

    & > ul > li > a {
        color: var(--ghost-white);
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const SignOutButton = styled.button`
    border:none;
    outline: none;
    background: transparent;
    color: var(--ghost-white);
    padding: 2rem;
    cursor: pointer;
`