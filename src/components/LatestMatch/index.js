// Write your code here
import {Component} from 'react'
import './index.css'
class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="card-container">
        <div className="heading">Latest Match</div>
        <div className="card">
          <div className="logo-container">
            <div className="match-details">
              <p className="name">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="status">{result}</p>
            </div>
            <img
              className="img"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="details-info">
            <div className="info-item">
              <p className="label">First Innings</p>
              <p className="value">{firstInnings}</p>
            </div>
            <div className="info-item">
              <p className="label">Second Innings</p>
              <p className="value">{secondInnings}</p>
            </div>
            <div className="info-item">
              <p className="label">Man Of The Match</p>
              <p className="value">{manOfMatch}</p>
            </div>
            <div className="info-item">
              <p className="label">Umpires</p>
              <p className="value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
