import React from 'react'
import './person-detail.css'
const PersonDetail = () => {
return (
    <div className="personal-detail">
    <div className="card">
      <img
        src="https://minskcena.com/files/products/c6c4ad18036559b409512eefe7f0fd9a.jpg"
        className="card-img-top personal-image"
      ></img>

      <div className="card-body">
        <h5 className="card-title"> name </h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Gender: </li>
          <li class="list-group-item">Date of Birthday: </li>
          <li class="list-group-item">Eye colorred: </li>
        </ul>
      </div>
    </div>
  </div>
)

}

export default PersonDetail