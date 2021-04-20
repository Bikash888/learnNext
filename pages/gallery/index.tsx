import React from 'react'
import Image from 'next/image'
 const Gallery = () => {
    const image=[1,2,3 ,4,5,6,7,8,9,10]
    return (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"50px",marginLeft:60}}>
               {
          image.map((item,index)=>
          <img alt="nature" 
        //   layout="fill" 
        
          key={index} src={`/high/${index+1}.jpg`}
           height={500} width={500}
           />
          )
        }
            
        </div>
    )
}
export default Gallery;