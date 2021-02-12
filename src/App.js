import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
	  CreateDate: new Date(),
	  Theme: false,
	  FirstName: '',
	  LastName: '',
	  PhotoID: '',
	  Place: '',
	  FirstNameEditing: false,
	  LastNameEditing: false,
	  PhotoIDEditing: false,
	  PlaceEditing: false
	}
	this.makeDark = this.makeDark.bind(this);
	this.makeLight = this.makeLight.bind(this);
	this.editFirstName = this.editFirstName.bind(this);
	this.sendFirstName = this.sendFirstName.bind(this);
	this.editLastName = this.editLastName.bind(this);
	this.sendLastName = this.sendLastName.bind(this);
	this.editPhotoID = this.editPhotoID.bind(this);
	this.sendPhotoID = this.sendPhotoID.bind(this);
	this.editPlace = this.editPlace.bind(this);
	this.sendPlace = this.sendPlace.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className={this.isDark() ? 'App-header' : 'App-headerD'}>
		  <button className={this.isDark() ? 'Button' : 'ButtonD'} onClick={this.makeDark}>Dark</button>
		  <button className={this.isDark() ? 'Button' : 'ButtonD'} onClick={this.makeLight}>Light</button>
		  <div>Theme: {this.isDark() ? 'Dark' : 'Light' }</div>
		  <div>Date: {this.state.CreateDate.toString()}</div>
		  <form onSubmit={this.sendFirstName}>
		    <div>First name: {this.state.FirstNameEditing ? <><input className={this.isDark() ? 'Button' : 'ButtonD'} type="text" /><input className={this.isDark() ? 'Button' : 'ButtonD'} type="submit" value="Send" /></> : <>{this.state.FirstName} <button className={this.isDark() ? 'Button' : 'ButtonD'} onClick={this.editFirstName}>Edit</button></>}</div>
		  </form>
		  <form onSubmit={this.sendLastName}>
		    <div>Last name: {this.state.LastNameEditing ? <><input className={this.isDark() ? 'Button' : 'ButtonD'} type="text" /><input className={this.isDark() ? 'Button' : 'ButtonD'} type="submit" value="Send" /></> : <>{this.state.LastName} <button className={this.isDark() ? 'Button' : 'ButtonD'} onClick={this.editLastName}>Edit</button></>}</div>
		  </form>
		  <form onSubmit={this.sendPhotoID}>
		    <div>Photo ID: {this.state.PhotoIDEditing ? <><input className={this.isDark() ? 'Button' : 'ButtonD'} type="text" /><input className={this.isDark() ? 'Button' : 'ButtonD'} type="submit" value="Send" /></> : <>{this.state.PhotoID} <button className={this.isDark() ? 'Button' : 'ButtonD'} onClick={this.editPhotoID}>Edit</button></>}</div>
		  </form>
		  <form onSubmit={this.sendPlace}>
		    <div>Place: {this.state.PlaceEditing ? <><input className={this.isDark() ? 'Button' : 'ButtonD'} type="text" /><input className={this.isDark() ? 'Button' : 'ButtonD'} type="submit" value="Send" /></> : <>{this.state.Place} <button className={this.isDark() ? 'Button' : 'ButtonD'} onClick={this.editPlace}>Edit</button></>}</div>
		  </form>
        </header>
      </div>
    )
  }
  isDark() {
    return this.state.Theme;
  }
  makeDark() {
    this.setState({ Theme: true })
  }
  makeLight() {
    this.setState({ Theme: false })
  }
  editFirstName() {
    this.setState({ FirstNameEditing: true })
  }
  sendFirstName(event) {
    //console.log(event.target[0].value)
	event.preventDefault()
    this.setState({ FirstName: event.target[0].value })
    this.setState({ FirstNameEditing: false })
  }
  editLastName() {
    this.setState({ LastNameEditing: true })
  }
  sendLastName(event) {
    //console.log(event.target[0].value)
	event.preventDefault()
    this.setState({ LastName: event.target[0].value })
    this.setState({ LastNameEditing: false })
  }
  editPhotoID() {
    this.setState({ PhotoIDEditing: true })
  }
  sendPhotoID(event) {
    //console.log(event.target[0].value)
	event.preventDefault()
    this.setState({ PhotoID: event.target[0].value })
    this.setState({ PhotoIDEditing: false })
  }
  editPlace() {
    this.setState({ PlaceEditing: true })
  }
  sendPlace(event) {
    //console.log(event.target[0].value)
	event.preventDefault()
    this.setState({ Place: event.target[0].value })
    this.setState({ PlaceEditing: false })
  }
}

export default App;