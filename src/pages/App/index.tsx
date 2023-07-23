import { FaPlus } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { Container, CreateNewButton, Header, Main, Title } from "./styles";
import ListSetLists from "../../components/ListSetlists";
import { useState } from "react";

export type ListData = {
    id: string,
    title: string,
    totalMusics: number
}[]

export default function App(){
    const [data, setData] = useState<ListData>([])
    return (
        <Container>
            <Sidebar/>
            <Main>
                <Header>
                    <Title>
                        Meus setlists
                    </Title>
                    <CreateNewButton>
                        <FaPlus size={14}/>
                        Criar setlist
                    </CreateNewButton>
                </Header>
                <ListSetLists data={data}/>
            </Main>
        </Container>
    )
}