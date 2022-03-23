import { NavBar } from "./NavBar";
import styled from "styled-components";

const Wrapper = styled.header`
    border: 1px solid black;
    padding: 10px;
`;
 
export function Header() {
    return (
        <Wrapper>
            <p>Composant Header.jsx</p>
            <h1>Mon super site</h1>
            <NavBar/>
        </Wrapper>
    );
}