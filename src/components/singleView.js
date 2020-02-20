import React from "react"
import { Link } from "react-router-dom"
import "../stylesheets/singleView.css"
import data from "../data.json"
import { MdEmail, MdPerson, MdPhoneIphone, MdArrowBack } from "react-icons/md"
import { GiWorld } from "react-icons/gi"

export default function(props) {
  const id = props.match.params.id
  const contact = data.find(contact => contact.id === Number(id))

  return (
    <div className="person">
      <div className="personBox">
        <div className="imageBox">
          <div className="backButton">
            <Link to="/">
              <MdArrowBack />
            </Link>
          </div>
          <img src={contact.picture.large} />
        </div>
        <p className="capitalize">
          <MdPerson />
          {contact.name.first} {contact.name.last}
        </p>
        <p>
          <MdEmail />
          {contact.email}
        </p>
        <p>
          <MdPhoneIphone />
          {contact.cell}
        </p>
        <p className="capitalize">
          <GiWorld />
          {contact.location.city}, {contact.location.state}
        </p>
      </div>
    </div>
  )
}
