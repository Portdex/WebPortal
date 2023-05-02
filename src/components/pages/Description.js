import React from "react";
import { useParams } from "react-router-dom";
import { productmarket } from "../components/constants/filters";
const Description = ()=>{
    const id = useParams();
    // const found = productmarket.find(obj => {
    //     return obj.id === id;
    //   });
    console.log(id)
    
   
    return(
        <section>
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <div className="m-5 px-5 align-items-center d-flex justify-content-center">
                       <img src="/img/items/static-4.jpg"/>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="price-border-solid m-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lN1pkYxj6dU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                </div>
                </div>

            </div>
        </section>
       
    )
}
export default Description