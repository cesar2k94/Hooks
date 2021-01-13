import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0, y :0})

    const{x,y}=coords;

    const Mousemove =(e)=>{

        const coors ={x: e.x, y: e.y};
        setcoords(coords);

    }

    useEffect(() => {
    
        window.addEventListener('mousemove',Mousemove)
        
        return () => {
            window.removeEventListener('mousemove',Mousemove)
        }
}, [])

    return (
        <div>
            <h3>Prueba</h3>
            <p>
                x:{x}
                y:{y}
            </p>
        </div>
    )
}
