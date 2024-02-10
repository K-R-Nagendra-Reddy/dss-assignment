// Write your code here
import './index.css'
const Footer = props => {
  const {details} = props
  const {name, nickname, phone, age, gender, email} = details
  return (
    <div>
      <h1>User Details</h1>
      <p>On Right Click, show below page</p>
      <p>name : {name}</p>
      <p>nickname: {nickname}</p>
      <p>phone: {phone}</p>
      <p>age: {age}</p>
      <h1>GEnder :{gender}</h1>
      <p>email: {email}</p>
    </div>
  )
}
export default Footer
