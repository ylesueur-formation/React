export function FonctionComposant(props) {
    const a = "Salut";
    const hello = () => {
        console.log("Hello !");
    }
    return(
        <>
            <h1>Variable: {a}</h1>
            <p>{ hello() }</p>
        </>
    )
}