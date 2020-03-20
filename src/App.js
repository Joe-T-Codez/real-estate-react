
import React, { Component} from 'react'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'
import './App.css';

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData,
      min_price:0,
      max_price:10000000,
      city:'All',
      homeType:'All',
      bedrooms:'0',
      min_floorspace:0,
      max_floorspace:50000,
      elevator:false,
      gym:false,
      fireplace:false,
      swimming_pool:false,
      filteredData:listingsData,
      populateFormsData:'',
      sortby:'price-dsc',
      view:'long',
      search:''
    }
    this.change=this.change.bind(this)
    this.filteredData=this.filteredData.bind(this)
    this.populateForms=this.populateForms.bind(this)
    this.changeView=this.changeView.bind(this)
  }
  componentWillMount(){

var listingsData= this.state.listingsData.sort((a,b)=>{
  return a.price - b.price
})

    this.setState({
      listingsData
    })
  }
  change(event){
    var name=event.target.name
    var value=(event.target.type==='checkbox') ? event.target.checked: event.target.value
console.log(listingsData.city)
    this.setState({
      [name]:value
    }, ()=>{
      console.log(this.state)
      this.filteredData()
    })
  }
  changeView(viewName){
    this.setState({
      view:viewName
    })
  }
  filteredData(){
    var newData=this.state.listingsData.filter((item) =>{
      return item.price >=this.state.min_price && item.price<=
      this.state.max_price && item.floorSpace >= this.state.min_floorspace
      && item.floorSpace <= this.state.max_floorspace && item.rooms >=this.state.bedrooms
    })

      if (this.state.city !=="All"){
        newData=newData.filter((item) =>{
          return item.city === this.state.city
        })
      }

      if (this.state.homeType !=="All"){
        newData=newData.filter((item) =>{
          return item.homeType === this.state.homeType
        })
      }

      if(this.state.sortby=== 'price-dsc'){
        newData= newData.sort((a,b)=>{
          return a.price-b.price
        })
      }
      if(this.state.sortby=== 'price-asc'){
        newData= newData.sort((a,b)=>{
          return b.price-a.price
        })
      }
      if(this.state.sortby=== 'floorspace-asc'){
        newData= newData.sort((a,b)=>{
          return a.floorSpace-b.floorSpace
        })
      }
      if(this.state.sortby=== 'floorspace-dsc'){
        newData= newData.sort((a,b)=>{
          return b.floorSpace-a.floorSpace
        })
      }

    this.setState({
      filteredData:newData
    })
  }

  populateForms(){
    //city
var cities=this.state.listingsData.map((item)=>{
  return item.city
})
cities = new Set(cities)
cities =[...cities]
cities= cities.sort()

    //homeType
    var homeTypes=this.state.listingsData.map((item)=>{
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes=[...homeTypes]
    homeTypes=homeTypes.sort()
    //bedrooms
    var bedrooms=this.state.listingsData.map((item)=>{
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms=[...bedrooms]
    bedrooms=bedrooms.sort()

    this.setState({
      populateFormsData:{
        homeTypes,
        bedrooms,
        cities
      }
    }, ()=>{
      // console.log(this.state)
    })
  }
  render () {
    return (<div>
      <Header/>
      <section id="content-area">
      <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
      <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
      </section>
      </div>)
  }
}
