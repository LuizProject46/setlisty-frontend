import { Link, redirect } from "react-router-dom";
import { Aside, Avatar, AvatarContainer, Nav, SignOutButton } from "./styles";
import {FaSignOutAlt} from 'react-icons/fa'
import {BiHomeAlt} from 'react-icons/bi'

export default function Sidebar(){

    function handleLogout(){
        //LOGOUT
        return redirect("login")
    }

    return(
        <Aside>
            <AvatarContainer>
                <Avatar src="https://github.com/LuizProject46.png" alt="Foto de perfil"/>
            </AvatarContainer>
            <Nav>
                <ul>
                    <li>
                        <Link to="/"><BiHomeAlt size={25}/></Link>
                    </li>
                </ul>
                <SignOutButton onClick={handleLogout}>
                    <FaSignOutAlt size={25}/>
                </SignOutButton>
            </Nav>
        </Aside>
    )
}