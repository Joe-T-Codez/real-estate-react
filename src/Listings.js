import React, { Component} from 'react'



export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings=this.loopListings.bind(this)
  }
  loopListings (){
var {listingsData}=this.props
    if(listingsData === undefined || listingsData.length===0){
      return "Sorry your filter did not match any listing"
    }
    return listingsData.map((listing, index)=>{
    if (this.props.globalState.view === 'long'){
      //This is box view
      return(<div className="col-md-3" key={index}>
        <div className="listing-info">
          <div className="listing-image" style={{background:`url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
          <div className="details">
            <div className="col-md-3">
            <div className="user-image"></div>
            </div>
        <div className="user-details">
          <span className="user-name">Martin Smith</span>
          <span className="post-date">Posted on 05/09/18</span>
        </div>
        <div className="col-md-9">
        <div className="listing-details">
          <div className="floorspace"><i className="far fa-square"></i>
          <span>{listing.floorSpace} ft&sup2;</span>
          </div>
          <div className="bedrooms">
          <i className="fas fa-bed"></i>
          <span>{listing.rooms}</span>
          </div>
          </div>
          <div className="view-btn">
            View Listing
          </div>

          </div>
          </div>
      </div>
      <div className="bottom-info">
      <span className="price">${listing.price}</span>
      <span className="location"><i className="fas fa-map-marker-alt"></i>{listing.city}{listing.state}</span>
      </div>
        </div>
        </div>)}
        else {
          //This is long view
          return(<div className="col-md-12 col-lg-6" key={index}>
            <div className="listing-info" key={index}>
              <div className="listing-image" style={{background:`url("${listing.image}") no-repeat center center`}}>
                <span className="address">{listing.address}</span>
              <div className="details">
              <div className="col-md-3">
              <div className="user-image"></div>
              </div>
                <div className="col-md-9">
            <div className="user-details">
              <span className="user-name">Martin Smith</span>
              <span className="post-date">Posted on 05/09/18</span>
            </div>
            <div className="listing-details">
              <div className="floorspace">
              <i className="far fa-square"></i>
              <span>{listing.floorSpace} ft&sup2;</span>
              </div>
              <div className="bedrooms">
              <i className="fas fa-bed"></i>
              <span>{listing.rooms}</span>
              </div>
              </div>
              <div className="view-btn">
                View Listing
              </div>
              </div>
              </div>
          </div>
          <div className="bottom-info">
          <span className="price">${listing.price}</span>
          <span className="location"><i className="fas fa-map-marker-alt"></i>{listing.city}{listing.state}</span>
          </div>
            </div>
          </div>)
        }
        })
}
  render () {
    return (<section id="listings">
    <section className="search-area">
    <input type="text" name="search" onChange={this.props.change}/>
    </section>
    <section className="sortby-area">
      <div className="result-nums"> {this.props.globalState.filteredData.length} results found</div>
      <div className="sort-options">
      <select name="sortby" className="sortby" onChange={this.props.change}>
      <option value="price-dsc">Price Ascending Order</option>
      <option value="price-asc">Price Descending Order</option>
      <option value="floorspace-asc">Floor Space Ascending Order</option>
      <option value="floorspace-dsc">Floor Space Descending Order</option>
      </select>

      <div className="sort-icon">
      <i className="fas fa-th-list" onClick={this.props.changeView.bind(null,"box")}></i>
      <i className="fas fa-th" onClick={this.props.changeView.bind(null,"long")}></i>
      </div>
      <div className="filter-options">
      <i className="fas fa-filter"></i>
      <h1>Filter</h1>
      </div>
      </div>
    </section>

    <section className="listings-results">
    <div className="row">
      {this.loopListings()}
      </div>
    </section>
    <section id="pagination">
    <ul className="pages">
      <li>Prev</li>
      <li className="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>Next</li>
    </ul>
    </section>
    </section>)
  }
}
