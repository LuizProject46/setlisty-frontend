import { ButtonGoogleSignIn, ButtonSignIn, Container, Form, FormContainer, ImageContainer, Input, InputArea, SubTitle, Title } from "./styles";
import loginIlustration from '../../assets/login-ilustration.svg'
import {FcGoogle} from 'react-icons/fc'
export default function Login(){
    return (
       <Container>
            <FormContainer>
                <div>
                    <Title>
                        Bem vindo
                    </Title>
                    <SubTitle>
                        Logue com sua conta do Google 
                    </SubTitle>
                    <Form>
                        {/* <InputArea>
                            <Input placeholder="E-mail" type="email" required/>
                        </InputArea>
                        <InputArea>
                            <Input placeholder="Senha" type="password" required/>
                        </InputArea>
                        <InputArea>
                            <ButtonSignIn>Login</ButtonSignIn>
                        </InputArea> */}
                        <InputArea>
                            <ButtonGoogleSignIn>
                                <FcGoogle size={24}/>
                                Login com o Google
                            </ButtonGoogleSignIn>
                        </InputArea>
                    </Form>
                </div>
            </FormContainer>
            <ImageContainer>
                <img src={loginIlustration} alt="Musicos" width={500} height={500}/>
            </ImageContainer>
       </Container>
    )
}