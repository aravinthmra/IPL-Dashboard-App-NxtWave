import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.fetchTeamList()
  }

  fetchTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))

    this.setState({teamsList: formattedData, isLoading: false})
  }

  renderTeamCard = () => {
    const {teamsList} = this.state
    return (
      <>
        <div className="header-container1">
          <img
            className="ipl-logo-image1"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-heading1">IPL Dashboard</h1>
        </div>
        <ul className="teams-list-container1">
          {teamsList.map(item => (
            <TeamCard key={item.id} teamData={item} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container1">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamCard()
        )}
      </div>
    )
  }
}

export default Home
