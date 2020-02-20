import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../stylesheets/App.css"
import Contacts from "./Contacts"
import singleView from "./singleView.js"
// import data from "../data.json"

export default function() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Contacts} />
        <Route path="/contacts/:id" component={singleView} />
      </div>
    </Router>
  )
}
