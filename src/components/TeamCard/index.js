// Write your code here
import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, imageUrl, id} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="card">
          <img className="img" src={imageUrl} alt={`${name}`} />
          <p className="desc">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
