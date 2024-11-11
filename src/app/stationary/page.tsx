import { resolve } from "path/posix"

export default async function Stationary(){
    await new Promise((resolve) => {
        setTimeout (resolve,4000)
    }

    )
    return(
        <div>
          <div className="text-2xl items-center justify-between text-center space-y-52 ">
          <h1>Stationery</h1> </div>
            <ul className="text-center justify-between ">
            <li>pencil </li>
            <li>eraser</li>
            <li>sharpner</li>
            <li>ruler</li>
            <li>pen</li>
            <li>ballpoint</li>
            <li>remover</li>
            <li>ink</li>
            <li>All types of marker</li>
            <li>All types of pointer</li>
            <li>computer paper</li>
            <li>glaze paper</li>
            <li>geometry box</li>
            </ul> 
        </div>
    )
}