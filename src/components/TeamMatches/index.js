import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    return (
      <>
        <img
          className="team-banner-image1"
          src={teamMatchesData.teamBannerUrl}
          alt="team banner"
        />
        <LatestMatch latestMatchDetails={teamMatchesData.latestMatchDetails} />
        {teamMatchesData.recentMatches.map(item => (
          <MatchCard key={item.id} matchCardData={item} />
        ))}
      </>
    )
    // render
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="team-matches-container1">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
