import Chihuahua from "../assets/images/Chihuahua.webp"
import Dachshund from "../assets/images/Dachshund.webp"
import Greyhounds from "../assets/images/Greyhounds.webp"
import Maltese from "../assets/images/Maltese.webp"
import Pomeranian from "../assets/images/Pomeranian.webp"
import Pug from "../assets/images/Pug.webp"
import Yorkies from "../assets/images/Yorkies.webp"
import ToyFoxTerrier from "../assets/images/Toy fox terrier.webp"



var images=[
    {
        name:"Chihuahua",
        img:   Chihuahua,
    },
    {
        name:"Dachshund",
        img:   Dachshund,
    },
    {
        name:"Greyhounds",
        img:   Greyhounds,
    },
    {
        name:"Maltese",
        img:   Maltese,
    },
    {
        name:"Toy Fox Terrier",
        img:   ToyFoxTerrier,
    },
    {
        name:"Pomeranian",
        img:   Pomeranian,
    },
    {
        name:"Pug",
        img:   Pug,
    },
    {
        name:"Yorkies",
        img:   Yorkies,
    }
]

function Layout(){
    return(
         <div className="layout">
            {
                images.map((x)=>
                    (
                    <div className="image-container">
                        <img src={x.img} alt="Chihuahua" className="image"></img>
                        <h1>{x.name}</h1>
                    </div>
                    )
                )
            

            }

            
        </div>
    )
}

export default Layout