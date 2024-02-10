// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'
import selectAll from 'css-select'

const ConfigurationController = () => (
  <div className="popup-container">
    <Popup
      model
      trigger={
        <button className="trigger-button" type="button">
          Create
        </button>
      }
    >
      <>
        <h1>Create User</h1>
        <div>
          <label htmlFor="name"> *Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="nick"> *NickName</label>
          <input type="text" id="nick" />
        </div>
        <div>
          <label htmlFor="name"> *Gender</label>
          <input type="Checkbox" value="male" />
          <input type="checkbox" value="Female" />
        </div>
        <div>
          <label htmlFor="name"> *Age</label>
          <input type="text" id="age" />
        </div>
        <div>
          <label htmlFor="phone"> *Phone</label>
          <input type="text" id="phone" />
        </div>
        <div>
          <label htmlFor="email"> *Email</label>
          <input type="text" id="email" />
        </div>
        <select>
          <option key="ap" value="AP">
            Ap
          </option>
          <option key="ts" value="TS">
            TS
          </option>
          <option key="goa" value="goa">
            Goa
          </option>
        </select>
        <button type="button" onClick={() => close()}>
          Close
        </button>
      </>
    </Popup>
  </div>
)
export default ConfigurationController
