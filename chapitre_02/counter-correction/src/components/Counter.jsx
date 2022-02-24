export function Counter(props) {
    console.log(props);
    return (
        <>
            <h2>{props.count}</h2>
            <button onClick={props.incrementer} style={{ background: "green"}}>+</button>
            <button onClick={props.decrementCount} className="btn-red">-</button>
        </>
    );
}