

export default function listaNumeros(props) {
    const numeros = props.numeros;
    const listItems = numeros.map((numero) =>
    <li>{numero}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}