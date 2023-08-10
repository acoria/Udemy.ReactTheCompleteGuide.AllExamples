import { Animal } from "./model/Animal";

export const AnimalList: React.FC<{ animals: Animal[] }> = (props) => {
    return (
        <>
            <h3>The following animals live on our farm</h3>
            <ul>
                {props.animals.map((animal) => {
                    return (
                        <li key={animal.id}>{`${animal.name} lives in ${animal.habitat}`}</li>
                    );
                })}
            </ul>
        </>
    );
};
