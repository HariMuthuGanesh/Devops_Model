import { useState } from "react";
import "./App.css";
 function App(){


      const data = ["chicken65", "butterChicken", "chickenBiryani", "chickenTikka", "chickenFry"];
      const [recipe, setrecipe] = useState("");

      function finder(){   
        if(data.includes(recipe)){
          return <p>Recipe Found</p>;
        }
        else{
          return <p>Recipe Not Found</p>;
        }
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
          <p>{finder()}</p>
          
        </div>

      )

 }

 export default App;