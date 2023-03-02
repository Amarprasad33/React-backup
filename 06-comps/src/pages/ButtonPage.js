// It is a backup of the App component of the buttons page

import Button from "../components/Button";
import { GoBell, GoCloudUpload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick = () =>{
        console.log('Click!!');
    }
    
    return (
       <div>
            <div>
                <Button success rounded outline onClick={handleClick} className="mb-5" ><GoBell />Click me!!</Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}><GoCloudUpload />Buy Now!</Button>
            </div>
            <div>
                <Button warning>See Deal!</Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded outline> <GoDatabase/> Something!</Button>
            </div>
            <div>
                <Button danger rounded outline>Something!</Button>
            </div>
       </div>

    );
}

export default ButtonPage;