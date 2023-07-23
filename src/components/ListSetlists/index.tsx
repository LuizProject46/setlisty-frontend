import { useState } from "react"
import { ListData } from "../../pages/App"
import { Container, Text } from "./styles"
import Loader from "../Loader"

type Props = {
    data: ListData
}



export default function ListSetLists(props: Props){
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {data} = props
    return (
        <Container>
            {data.length == 0  && !isLoading &&  (
                <Text>
                    Nenhum setlist criado até o momento. Crie o primeiro em <b>"+ Criar setlist"</b>
                </Text>
            )}

            {isLoading && (
                <Loader 
                    isLoading={isLoading} 
                    message="Carregando setlists..."
                />
            )}

            {data.map( (item, index) => (
                <h3 key={index}>{item.title}</h3>
            ))}
        </Container>
    )
}