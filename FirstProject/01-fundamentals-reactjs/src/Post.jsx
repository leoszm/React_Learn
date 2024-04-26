/* eslint-disable react/prop-types */
//Named Export - props: { author: "", content: "" }

export function NamedPost(props) {
    return (
        <div>
            <p>
                <strong>{props.author}</strong>
            </p>
            <p>
                {props.content}
            </p>
        </div>
    );
}

/*
    Default Exports -             
        . Você dá o nome do componente na importação e não na exportação 
        . Na exportação continua Post, mas na importação você pode alterar o nome, 
          ja que está apontando para a função.
    Named Exports -
    . Voce atrela a aquela açao em específico
    . Ter que colocar a função entre chaves("{ funcao_nome }") no import
    . Ter que colocar no cabecalho da função "export" antes de function
*/