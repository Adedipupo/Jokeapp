import React from 'react';

const Joke = ({question,punchline}) => {
return(
  <div className="joke">
        <p><strong>Question</strong> : <b>{question}</b></p>
        <p><strong>Punchline</strong> : {punchline}</p>
  </div>
)
}

export default Joke; 