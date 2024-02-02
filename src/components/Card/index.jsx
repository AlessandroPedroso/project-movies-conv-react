import { Container } from "./style";
import movieIcon from "../../assets/movie-icon.svg";
import awardIcon from "../../assets/award-icon.svg";

const Card = ({ movieData }) => {

  return (
    <Container>
      <div className="wrapper-image-logo">
        <img src={movieIcon} alt="movie-icon" />
      </div>

      <div className="container-items">
        <div className="wrapper-items">
          <h3>{movieData.name}</h3>
          <p>{movieData.runtimeInMinutes} min</p>
        </div>

        <div className="wrapper-award">
          <img src={awardIcon} alt="award-icon" />
          <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
        </div>

        <div className="wrapper-budget-revenue">
          <div className="budget">
            <h4>Budget</h4>
            <p>${movieData.budgetInMillions}M</p>
          </div>
          <div className="revenue">
            <h4>Revenue</h4>
            <p>${movieData.boxOfficeRevenueInMillions}M</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
