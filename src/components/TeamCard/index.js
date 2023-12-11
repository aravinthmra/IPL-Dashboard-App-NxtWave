import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <li className="team-card-item1">
      <Link to={`/team-matches/${id}`}>
        <img className="team-logo-image1" src={teamImageUrl} alt={name} />
        <p className="team-name-para1">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
