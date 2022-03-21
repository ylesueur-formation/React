import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px;
    border: 1px solid black;
    background-color: wheat;
`;

export function User() {
    const [user, setUser] = useState({});

    // Similaire à ComponentDidMount
    useEffect( () => {
        axios('https://jsonplaceholder.typicode.com/users').then((reponse) => {
            const utilisateurs = reponse.data;
            setUser(utilisateurs[0]);
        });
    }, []);

    return (
        <Wrapper>
            <h2>Utilisateur</h2>
            <p>Nom: {user.name}</p>
        </Wrapper>
    );
}