// Write your code here
import Footer from '../Footer'
import './index.css'

const Body = props => {
  const {name, nickname, age, gender, phone, email}
  const onClickPerson = () => {
    return <Footer />
  }
  return (
    <button type="button" onClick={onClickPerseon}>
      <img src="" alt="avatar" />
      <p></p>
    </button>
  )
}

export default Body
