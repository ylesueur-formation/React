import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px;
    border: 1px solid black;
    background-color: aquamarine;
`;

export function Clock() {
    const [date, setDate] = useState(new Date());
    let timerId = null;

    const updateDate = () => {
        const date = new Date();
        console.log("Date: ", date);
        setDate(date);
    }

    useEffect( () => {
        timerId = setInterval(updateDate ,1000)
        // Appelé lorsque le composant sera démonté.
        return function cleaner() {
            clearInterval(timerId);
        }
    }, []);

    return (
        <Wrapper>
            <h2>Horloge: {date.toLocaleTimeString()}</h2>
        </Wrapper>
    );
}