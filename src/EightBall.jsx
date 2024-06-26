import { useState } from 'react'

/**
 * Component to render eight-ball simulation.
 * @param {*} props Properties to return. Only recognizes props.results, an array of Objects {msg, color}.
 * @returns Div to render eight-ball.
 */
function EightBall(props){

    // Get message
    const message = Math.floor(Math.random() * props.results.length)

    // Based on message, get prop resutls color
    const style = {
        backgroundColor: props.results[message].color,
      };

    // Default 
    const [result, setResult ] = useState("Think of a question.")
    return(
        <div
        className="eight_ball"
        style={style}
        >
            <p>{result}</p>
            <button
            onClick={() => setResult(
                props.results[message].msg
            )}> Click </button>
        </div>
    )
}

EightBall.defaultProps = {
    results: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}

export default EightBall