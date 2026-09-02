import { useState } from "react";
import "./App.css";
 function App(){


      const data = ["chicken65", "butterChicken", "chickenBiryani", "chickenTikka", "chickenFry"];
      const [recipe, setrecipe] = useState("");

      function finder(){   
         return (
            <div>
              {data.includes(recipe) ? (
                <p>Recipe Found</p>
              ) : (
                <p>Recipe Not Found</p>
              )}
            </div>
         )
      }



      return (
        <div>
          <h1>Recipe Finder</h1>
          <input
            type="text"
            placeholder="Enter a Search Product"
            value={recipe}
            onChange={(e) => setrecipe(e.target.value)}
          />

          <button onClick={finder}> Search </button>
        </div>

      )

 }

 export default App;