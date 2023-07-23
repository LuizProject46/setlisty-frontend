import { useState } from "react"
import { LoaderContainer, LoaderBar, LoaderMessage } from "./styles"

type Props = {
    isLoading: boolean,
    message: string
}

export default function Loader(props: Props){
    const {isLoading, message} = props
    return(
        <LoaderContainer style={{opacity: isLoading ? 1 : 0}}>
            <LoaderBar></LoaderBar>
            <LoaderMessage>{message}</LoaderMessage>
        </LoaderContainer>
    )
}