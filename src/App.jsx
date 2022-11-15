import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    /**
        * Challenge: use setSquares to update the
        * correct square in the array.
        * 
        * Make sure not to directly modify state!
        * 
        * Hint: look back at the lesson on updating arrays
        * in state if you need a reminder on how to do this
    */

    const [squares, setSquares] = React.useState(boxes)
    
    const toggle = (id) => {
        const boxClicked = squares.find(square => square.id === id);
        setSquares(prevState => prevState.map((square) => {
            if (square.id === boxClicked.id) {
                return {
                    ...square,
                    on: !square.on
                }
            }
            return square
        }))
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
