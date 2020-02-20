import React from "react"
import "../stylesheets/contacts.css"
import { Link } from "react-router-dom"
import data from "../data.json"

export default function(props) {
  return (
    <div className="peepsBox">
      <h1 className="peeps">My Peeps</h1>
      <ul className="people">
        {data.map(contacts => (
          <li key={`contacts-${contacts.id}`}>
            <Link to={`/contacts/${contacts.id}`}>
              <div className="box">
                <img src={contacts.picture.thumbnail} />
                <p>
                  {contacts.name.first} {contacts.name.last}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
