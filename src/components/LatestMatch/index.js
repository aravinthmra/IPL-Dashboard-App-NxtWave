import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const data = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  return (
    <div>
      <h1>Latest Matches</h1>
      <div className="latest-matches-card-container1">
        <div>
          <div>
            <p>{data.competingTeam}</p>
            <p>{data.date}</p>
            <p>{data.venue}</p>
            <p>{data.result}</p>
          </div>
          <img
            className="competing-team-image1"
            src={data.competingTeamLogo}
            alt={`latest match  ${data.competingTeam}`}
          />
        </div>
        <hr />
        <h2>First Innings</h2>
        <p>{data.firstInnings}</p>
        <h2>Second Innings</h2>
        <p>{data.secondInnings}</p>
        <h2>Man Of The Match</h2>
        <p>{data.manOfTheMatch}</p>
        <h2>Umpires</h2>
        <p>{data.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
