import styled from "styled-components";

const Wrapper = styled.nav`
    border: 1px solid black;
    padding: 10px;
`;

export function NavBar(props) {
    return (
        <Wrapper>
            <p>Composant NavBar.jsx</p>
            <input type="text" onChange={props.onTitleChange}/>
        </Wrapper>
    );
}