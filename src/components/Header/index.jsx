import { useEffect, useRef, useState } from "react";
import convIcon from "../../assets/conv-icon.svg";
import { TopHeader,Container } from "./styles";

export function Header({movies,setFilteredMovies}) {

  const [aveValues,setAveValues] = useState({
    runtime:0,
    budget:0,
  });
  const inputValue = useRef()


  function aveMovies(movies){
    
    const runtimeValue = movies.reduce((acc,cur)=>cur.runtimeInMinutes + acc,0)/movies.length
    const budgetValue = movies.reduce((acc,cur)=>cur.budgetInMillions + acc,0)/movies.length

    setAveValues({
      runtime:runtimeValue,
      budget:budgetValue,
    })

  }

  useEffect(()=>{
    if(movies && movies.length > 0 ){

        aveMovies(movies)
    }
  },[movies])

  function inputChange(){
    const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(inputValue.current.value.toLowerCase()))
    aveMovies(newMovies)
    setFilteredMovies(newMovies)
    //console.log(inputValue.current.value)
  }

  return (
    <>
      <TopHeader>
        <img src={convIcon} alt="conv icon" />
        <p>Senior Frontend Test</p>
      </TopHeader>
      <Container>
        <h1>Lord of the Rings Movies</h1>
        <div className="av-values">
          <div>
            <p>Ave. movie runtime: {aveValues.runtime} min</p>
            <p>Ave. movie budget: ${aveValues.budget}M</p>
          </div>
          <input placeholder="Finter movies by name" ref={inputValue} onChange={inputChange} />
        </div>
      </Container>
    </>
  );
}
