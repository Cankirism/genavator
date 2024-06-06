import { Children } from "react"
import Header from "./Header"
const Content =({children})=>{
    return(
        <div>
            <Header/>
            {children}
        </div>


    )
}
export default Content;