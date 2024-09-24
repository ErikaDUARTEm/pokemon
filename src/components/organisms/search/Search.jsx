import { Button } from "../../atoms/Button";
import "./Search.css";
import { InputSearch } from "../../molecules/input/InputSearch";

export function Search() {
    return(
        <>
            <div className="input-container">
                <InputSearch />
                <Button/>
            </div>
            
        </>
    )
}