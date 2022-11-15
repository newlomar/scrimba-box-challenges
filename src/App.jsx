import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const toggle = (id) => {
        const boxClicked = squares.find(square => square.id === id);
        setSquares(prevState => prevState.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        }))
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id}
            on={square.on}
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
