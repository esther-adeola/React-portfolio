import React from "react";


export default function Navigation(props) {
    const {page, setPage} = props

  return (
    <div>
      <ul className="navBar" onClick={e=> setPage(e.target.innerText)}>
        <button>Home</button>
        <button>About</button>
        <button>Portfolio</button>
        <button>Resume</button>
        <button>Contact</button>
      </ul>
    </div>
  );
}
