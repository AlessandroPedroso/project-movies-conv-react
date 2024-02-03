import { useEffect, useState } from "react";
import api from "../../services/api";

import { Container, ContainerItems } from "./styles";
import { Header } from "../../components/Header/index.jsx";
import Card from "../../components/Card/index.jsx";
import { getMovies } from "../../utils/getData";

const Home = () => {
  const [movie, setMovies] = useState();
  const [filteredMovies,setFilteredMovies] = useState()

  useEffect(() => {
    async function loadData() {
      // const {data: { docs }} = await api.get("movie");
      Promise.all([
        getMovies()
      ]).then(([movies])=>{

        setMovies(movies);
        setFilteredMovies(movies);

      }).catch(error=> console.log(error))
    }

    loadData();
  }, []);

  return (
    <Container>
      <Header movies={movie} setFilteredMovies={setFilteredMovies} />
      <ContainerItems>
        {/* {movie && movie.map(movie => <Card key={movie._id} movieData={movie} />)} */}
        {filteredMovies &&
          filteredMovies.map((movie, index) => <Card key={index} movieData={movie} />)}
      </ContainerItems>
    </Container>
  );
};

export default Home;
