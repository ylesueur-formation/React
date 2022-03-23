import styled from "styled-components";

const Wrapper = styled.body`
    border: 1px solid black;
    padding: 10px;
    margin-top: 20px;
`;

export function Body(props) {
    return (
        <Wrapper>
            <p>Composant Body.jsx</p>
            <h2>Body</h2>
            <p>Titre Recherché: {props.titreRecherche}</p>
        </Wrapper>
    );
}