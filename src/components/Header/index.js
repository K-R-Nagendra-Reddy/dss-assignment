// Write your code here
import ConfigurationController from '../ConfigurationController'
import './index.css'

const Header = () => (
  <>
    <ConfigurationController />

    <nav className="table-heading">
      <p className="columns">Avatar</p>
      <p className="columns">Name</p>
      <p className="columns">Nick Name</p>
      <p className="columns">Age</p>
      <p className="columns">Gender</p>
      <p className="columns">Phone</p>
      <p className="columns">Email</p>
      <p className="columns">Operation</p>
    </nav>
  </>
)
export default header
