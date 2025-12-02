import React from 'react'

const App = () => {
let relatives =["kaka","mama","kaku","mami","nani","nana"]

  return (
    <div id="main">
               {/* Do not remove the main div */}
      <ol>
        {relatives.map((name,index)=>(
          <li key={"relativeList"+index.toString()}>
            {name}
        </li>))}
      </ol>
    </div>
  )
}

export default App
