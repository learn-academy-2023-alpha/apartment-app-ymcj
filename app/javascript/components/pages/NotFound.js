import React from "react"
import {NavLink} from "react-router-dom"
import {Button} from "reactstrap"

const NotFound = () => {
  return (
    <>
    <div className="not-found-bg">
      <div className="not-found-txt">
        ⌿⏃☌⟒ ⋏⍜⏁ ⎎⍜⎍⋏⎅
        <br/>
        <br/>
        ...translating...
        <br/>
        <br/>
        Page Not Found
      </div>
      <Button>
        <NavLink to={`/`}>Beam back to Home</NavLink>
      </Button>
    </div>
      </>
  )
} 

export default NotFound