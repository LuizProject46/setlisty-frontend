import styled from 'styled-components'
import {keyframes} from 'styled-components'

const rotationAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`

export const LoaderContainer = styled.div`
    display: flex;
    width: calc(100% - 99px);
    height: 100vh;
    position: absolute;
    background: var(--dark-opacity);
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
export const LoaderBar = styled.div`
    width: 10rem;
    height: 10em;
    border-radius: 50%;
    border 0.5rem solid var(--light-gray);
    margin-bottom: 4rem;
    border-top-color: var(--primary);
    transition: all 200ms ease-in-out;
    animation-name: ${rotationAnimation};
    animation-duration: 0.9s;
    animation-duration: infinite;
    animation-iteration-count: infinite;
`
export const LoaderMessage = styled.p`
    font-size: 3rem;
    color: var(--ghost-white);
`


