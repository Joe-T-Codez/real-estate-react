import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.cities=this.cities.bind(this)
    this.homeTypes=this.homeTypes.bind(this)
    this.bedrooms=this.bedrooms.bind(this)
  }
  // componentWillMount(){
  //   this.props.populateAction()
  // }
  cities(){
    // if (this.props.globalState.populateFormsData.cities != undefined){
    //   var { cities }= this.props.globalState.populateFormsData
    //
    //   return cities.map((item) => {
    //     return(
    //       <option key={item} value={item}>{item}</option>
    //     )
    //   })
    // }
  }
  homeTypes(){
    // if (this.props.globalState.populateFormsData.homeTypes != undefined){
    //   var { homeTypes }= this.props.globalState.populateFormsData
    //   // console.log(homeTypes)
    //   return homeTypes.map((item) => {
    //     return(
    //       <option key={item} value={item}>{item}</option>
    //     )
    //   })
    // }

  }
  bedrooms(){
    // if (this.props.globalState.populateFormsData.bedrooms != undefined){
    //   var { bedrooms }= this.props.globalState.populateFormsData
    //   // console.log(bedrooms)
    //   return bedrooms.map((item) => {
    //     return(
    //       <option key={item} value={item}>{item}+ BR</option>
    //     )
    //   })
    // }

  }
  render () {
    return (<section id="filter">
<div className="inside">
    <h4>Filter</h4>
    <label htmlFor="city">City</label>
    <select name="city" className="filters city">
      <option value="All">All</option>
      {this.cities()}
    </select>
    <label htmlFor="HomeType">Home Type</label>
    <select name="homeType" className="filters homeType">
        <option value="All">All Homes</option>
          {this.homeTypes()}
    </select>
    <label htmlFor="Bedrooms">Bedrooms</label>
    <select name="bedrooms" className="filters bedrooms" >
    {this.bedrooms()}
    </select>
<div className="filters price">
    <span className="title">Price</span>
    <input type="text" name="min_price" className="min-price"/>
    <input type="text" name="max_price" className="max-price"/>
</div>
<div className="filters floor-space">
    <span className="title">Floor Space</span>
    <input type="text" name="min_floorspace" className="min-floor-space"/>
    <input type="text" name="max_floorspace" className="max-floor-space"/>
</div>
<div className="filters extras">
<span className="title">Extras</span>
    <label htmlFor="extras">
      <span>Elevators</span>
        <input name="elevator" value="elevator" type="checkbox"/>
    </label>
    <label htmlFor="extras">
      <span>Gym</span>
        <input name="gym" value="gym" type="checkbox"/>
    </label>
    <label htmlFor="extras">
      <span>Fireplace</span>
        <input name="fireplace" value="fireplace" type="checkbox"/>
    </label>
    <label htmlFor="extras">
    <span>Swimming Pool</span>
        <input name="swimming_pool" value="swimming_pool" type="checkbox"/>
    </label>
</div>
</div>
    </section>)
  }
}
