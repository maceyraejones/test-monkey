import React from 'react'
import { useState, useEffect} from 'react'
function AddCart() {
  const [text, setText] = useState("")

 
  const handleChange = e => {
    setText(e.target.value)
  }

  return (
    <div>

{/* like a phone  */}

{/* this where the client type the message */}
<textarea id="w3review" value={text} name="w3review" rows="4" cols="50">
type something....
</textarea>

        <input  type = "text"  />
        <button   onClick={handleChange}>Send</button>

    </div>
  )
}

export default AddCart