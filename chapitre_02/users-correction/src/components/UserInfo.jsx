export function UserInfo(props) {
    return (
        <div>
            <h2>{props.name}</h2> 
            <p>
                {props.email} - {props.website}
            </p>
        </div>
    );
}