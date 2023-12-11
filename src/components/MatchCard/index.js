import './index.css'

const MatchCard = props => {
  const {matchCardData} = props
  const data = {
    competingTeamLogo: matchCardData.competing_team_logo,
    competingTeam: matchCardData.competing_team,
    result: matchCardData.result,
    matchStatus: matchCardData.match_status,
  }

  return (
    <li>
      <img
        className="match-card-image1"
        src={data.competingTeamLogo}
        alt={`competing team ${data.competingTeam}`}
      />
      <p>{data.competingTeam}</p>
      <p>{data.result}</p>
      <p>{data.matchStatus}</p>
    </li>
  )
}

export default MatchCard
