(this["webpackJsonpreal-estate"]=this["webpackJsonpreal-estate"]||[]).push([[0],{11:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(9),l=t.n(r),o=(t(16),t(7)),c=t(10),i=t(2),m=t(3),p=t(5),u=t(4),h=t(1),d=t(6),g=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).state={name:"Joe"},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"logo"}," Jone's Real Estate"),n.a.createElement("nav",{className:"menu-links"},n.a.createElement("a",{href:"https://www.youtube.com/"},"Create Ads"),n.a.createElement("a",{href:"https://www.youtube.com/"},"About Us"),n.a.createElement("a",{href:"https://www.youtube.com/"},"Log In"),n.a.createElement("a",{href:"https://www.youtube.com/",className:"register-btn"},"Register ")))}}]),a}(s.Component),f=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).state={name:"Joe"},e.cities=e.cities.bind(Object(h.a)(e)),e.homeTypes=e.homeTypes.bind(Object(h.a)(e)),e.bedrooms=e.bedrooms.bind(Object(h.a)(e)),e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.populateAction()}},{key:"cities",value:function(){if(void 0!==this.props.globalState.populateFormsData.cities){var e=this.props.globalState.populateFormsData.cities;return e.map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))}}},{key:"homeTypes",value:function(){if(void 0!==this.props.globalState.populateFormsData.homeTypes){var e=this.props.globalState.populateFormsData.homeTypes;return e.map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))}}},{key:"bedrooms",value:function(){if(void 0!==this.props.globalState.populateFormsData.bedrooms){var e=this.props.globalState.populateFormsData.bedrooms;return e.map((function(e){return n.a.createElement("option",{key:e,value:e},e,"+ BR")}))}}},{key:"render",value:function(){return n.a.createElement("section",{id:"filter"},n.a.createElement("div",{className:"inside"},n.a.createElement("h4",null,"Filter"),n.a.createElement("label",{htmlFor:"city"},"City"),n.a.createElement("select",{name:"city",className:"filters city",onChange:this.props.change},n.a.createElement("option",{value:"All"},"All"),this.cities()),n.a.createElement("label",{htmlFor:"HomeType"},"Home Type"),n.a.createElement("select",{name:"homeType",className:"filters homeType",onChange:this.props.change},n.a.createElement("option",{value:"All"},"All Homes"),this.homeTypes()),n.a.createElement("label",{htmlFor:"Bedrooms"},"Bedrooms"),n.a.createElement("select",{name:"bedrooms",className:"filters bedrooms",onChange:this.props.change},this.bedrooms()),n.a.createElement("div",{className:"filters price"},n.a.createElement("span",{className:"title"},"Price"),n.a.createElement("input",{type:"text",name:"min_price",className:"min-price",onChange:this.props.change,value:this.props.globalState.min_price}),n.a.createElement("input",{type:"text",name:"max_price",className:"max-price",onChange:this.props.change,value:this.props.globalState.max_price})),n.a.createElement("div",{className:"filters floor-space"},n.a.createElement("span",{className:"title"},"Floor Space"),n.a.createElement("input",{type:"text",name:"min_floorspace",className:"min-floor-space",onChange:this.props.change,value:this.props.globalState.min_floorspace}),n.a.createElement("input",{type:"text",name:"max_floorspace",className:"max-floor-space",onChange:this.props.change,value:this.props.globalState.max_floorspace})),n.a.createElement("div",{className:"filters extras"},n.a.createElement("span",{className:"title"},"Extras"),n.a.createElement("label",{htmlFor:"extras"},n.a.createElement("span",null,"Elevators"),n.a.createElement("input",{name:"elevator",value:"elevator",type:"checkbox",onChange:this.props.change})),n.a.createElement("label",{htmlFor:"extras"},n.a.createElement("span",null,"Gym"),n.a.createElement("input",{name:"gym",value:"gym",type:"checkbox",onChange:this.props.change})),n.a.createElement("label",{htmlFor:"extras"},n.a.createElement("span",null,"Fireplace"),n.a.createElement("input",{name:"fireplace",value:"fireplace",type:"checkbox",onChange:this.props.change})),n.a.createElement("label",{htmlFor:"extras"},n.a.createElement("span",null,"Swimming Pool"),n.a.createElement("input",{name:"swimming_pool",value:"swimming_pool",type:"checkbox",onChange:this.props.change})))))}}]),a}(s.Component),E=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).state={name:"Joe"},e.loopListings=e.loopListings.bind(Object(h.a)(e)),e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"loopListings",value:function(){var e=this,a=this.props.listingsData;return void 0===a||0===a.length?"Sorry your filter did not match any listing":a.map((function(a,t){return"long"===e.props.globalState.view?n.a.createElement("div",{className:"col-md-3",key:t},n.a.createElement("div",{className:"listing-info"},n.a.createElement("div",{className:"listing-image",style:{background:'url("'.concat(a.image,'") no-repeat center center')}},n.a.createElement("span",{className:"address"},a.address),n.a.createElement("div",{className:"details"},n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"user-image"})),n.a.createElement("div",{className:"user-details"},n.a.createElement("span",{className:"user-name"},"Martin Smith"),n.a.createElement("span",{className:"post-date"},"Posted on 05/09/18")),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"listing-details"},n.a.createElement("div",{className:"floorspace"},n.a.createElement("i",{className:"far fa-square"}),n.a.createElement("span",null,a.floorSpace," ft\xb2")),n.a.createElement("div",{className:"bedrooms"},n.a.createElement("i",{className:"fas fa-bed"}),n.a.createElement("span",null,a.rooms))),n.a.createElement("div",{className:"view-btn"},"View Listing")))),n.a.createElement("div",{className:"bottom-info"},n.a.createElement("span",{className:"price"},"$",a.price),n.a.createElement("span",{className:"location"},n.a.createElement("i",{className:"fas fa-map-marker-alt"}),a.city,a.state)))):n.a.createElement("div",{className:"col-md-12 col-lg-6",key:t},n.a.createElement("div",{className:"listing-info",key:t},n.a.createElement("div",{className:"listing-image",style:{background:'url("'.concat(a.image,'") no-repeat center center')}},n.a.createElement("span",{className:"address"},a.address),n.a.createElement("div",{className:"details"},n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"user-image"})),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"user-details"},n.a.createElement("span",{className:"user-name"},"Martin Smith"),n.a.createElement("span",{className:"post-date"},"Posted on 05/09/18")),n.a.createElement("div",{className:"listing-details"},n.a.createElement("div",{className:"floorspace"},n.a.createElement("i",{className:"far fa-square"}),n.a.createElement("span",null,a.floorSpace," ft\xb2")),n.a.createElement("div",{className:"bedrooms"},n.a.createElement("i",{className:"fas fa-bed"}),n.a.createElement("span",null,a.rooms))),n.a.createElement("div",{className:"view-btn"},"View Listing")))),n.a.createElement("div",{className:"bottom-info"},n.a.createElement("span",{className:"price"},"$",a.price),n.a.createElement("span",{className:"location"},n.a.createElement("i",{className:"fas fa-map-marker-alt"}),a.city,a.state))))}))}},{key:"render",value:function(){return n.a.createElement("section",{id:"listings"},n.a.createElement("section",{className:"search-area"},n.a.createElement("input",{type:"text",name:"search",onChange:this.props.change})),n.a.createElement("section",{className:"sortby-area"},n.a.createElement("div",{className:"result-nums"}," ",this.props.globalState.filteredData.length," results found"),n.a.createElement("div",{className:"sort-options"},n.a.createElement("select",{name:"sortby",className:"sortby",onChange:this.props.change},n.a.createElement("option",{value:"price-dsc"},"Price Ascending Order"),n.a.createElement("option",{value:"price-asc"},"Price Descending Order"),n.a.createElement("option",{value:"floorspace-asc"},"Floor Space Ascending Order"),n.a.createElement("option",{value:"floorspace-dsc"},"Floor Space Descending Order")),n.a.createElement("div",{className:"sort-icon"},n.a.createElement("i",{className:"fas fa-th-list",onClick:this.props.changeView.bind(null,"box")}),n.a.createElement("i",{className:"fas fa-th",onClick:this.props.changeView.bind(null,"long")})))),n.a.createElement("section",{className:"listings-results"},n.a.createElement("div",{className:"row"},this.loopListings())),n.a.createElement("section",{id:"pagination"},n.a.createElement("ul",{className:"pages"},n.a.createElement("li",null,"Prev"),n.a.createElement("li",{className:"active"},"1"),n.a.createElement("li",null,"2"),n.a.createElement("li",null,"3"),n.a.createElement("li",null,"4"),n.a.createElement("li",null,"Next"))))}}]),a}(s.Component),b=[{address:"312 Bushwick ave",city:"Brooklyn",state:"NY",rooms:1,price:35e4,floorSpace:2e3,extras:["elevator","gym"],homeType:"Apartment",image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBS3NtS.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=952&y=474"},{address:"132 Coco ave",city:"Hollywood",state:"CA",rooms:2,price:375e3,floorSpace:2e3,extras:["elevator","gym"],homeType:"Studio",image:"https://villagegreen.com/sites/default/files/styles/featured_property_image/public/2019-09/albion-oak-park-oak-park-apartments-apartment-living-room.jpg?itok=QCf_XAjN"},{address:"20-34 grand ave",city:"Tampa",state:"FL",rooms:4,price:22e4,floorSpace:2500,extras:["elevator","gym"],homeType:"Apartment",image:"https://www.realestate.com.au/blog/images/1600x1600-fit,progressive/2018/11/02140037/capi_b36147142016a1fb8955eaf3912770f4_7a84986150b7717c877032594424fc5e.jpeg"},{address:"22 goren street",city:"Vanderfield",state:"Va",rooms:0,price:3e5,floorSpace:3e3,extras:["fireplace","swimming pool"],homeType:"Studio",image:"https://cdn.trendir.com/wp-content/uploads/2016/09/Glass-Graham-House-by-E.-Cobb-Architects-900x751.jpg"},{address:"120 gander ave",city:"Yonkers",state:"NY",rooms:1,price:285e3,floorSpace:2400,extras:["swimming_pool","gym"],homeType:"Townhome",image:"https://techcrunch.com/wp-content/uploads/2019/03/blueground-apartment-2-2-2.jpg?w=730&crop=1"},{address:"203 pontiac ave",city:"Horaceville",state:"NJ",rooms:2,price:22e4,floorSpace:2200,extras:["elevator","gym"],homeType:"Apartment",image:"https://techcrunch.com/wp-content/uploads/2019/03/blueground-apartment-2-2-2.jpg?w=730&crop=1"},{address:"51 miller ave",city:"Newark",state:"NJ",rooms:3,price:25e4,floorSpace:2200,extras:["fireplace"],homeType:"Studio",image:"https://villagegreen.com/sites/default/files/styles/featured_property_image/public/2019-09/albion-oak-park-oak-park-apartments-apartment-living-room.jpg?itok=QCf_XAjN"},{address:"12-20 Coral Street",city:"Miami",state:"FL",rooms:4,price:19e4,floorSpace:1500,extras:["swimming pool","gym"],homeType:"Townhome",image:"https://www.moneyunder30.com/wp-content/uploads/2008/07/so-you-wanna-buy-a-condo-five-questions-to-ask-before-buying-648x364-c-default.jpg"}],v=(t(17),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).state={name:"Joe",listingsData:b,min_price:0,max_price:1e7,city:"All",homeType:"All",bedrooms:"0",min_floorspace:0,max_floorspace:5e4,elevator:!1,gym:!1,fireplace:!1,swimming_pool:!1,filteredData:b,populateFormsData:"",sortby:"price-dsc",view:"long",search:""},e.change=e.change.bind(Object(h.a)(e)),e.filteredData=e.filteredData.bind(Object(h.a)(e)),e.populateForms=e.populateForms.bind(Object(h.a)(e)),e.changeView=e.changeView.bind(Object(h.a)(e)),e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this.state.listingsData.sort((function(e,a){return e.price-a.price}));this.setState({listingsData:e})}},{key:"change",value:function(e){var a=this,t=e.target.name,s="checkbox"===e.target.type?e.target.checked:e.target.value;console.log(b.city),this.setState(Object(c.a)({},t,s),(function(){console.log(a.state),a.filteredData()}))}},{key:"changeView",value:function(e){this.setState({view:e})}},{key:"filteredData",value:function(){var e=this,a=this.state.listingsData.filter((function(a){return a.price>=e.state.min_price&&a.price<=e.state.max_price&&a.floorSpace>=e.state.min_floorspace&&a.floorSpace<=e.state.max_floorspace&&a.rooms>=e.state.bedrooms}));"All"!==this.state.city&&(a=a.filter((function(a){return a.city===e.state.city}))),"All"!==this.state.homeType&&(a=a.filter((function(a){return a.homeType===e.state.homeType}))),"price-dsc"===this.state.sortby&&(a=a.sort((function(e,a){return e.price-a.price}))),"price-asc"===this.state.sortby&&(a=a.sort((function(e,a){return a.price-e.price}))),"floorspace-asc"===this.state.sortby&&(a=a.sort((function(e,a){return e.floorSpace-a.floorSpace}))),"floorspace-dsc"===this.state.sortby&&(a=a.sort((function(e,a){return a.floorSpace-e.floorSpace}))),this.setState({filteredData:a})}},{key:"populateForms",value:function(){var e=this.state.listingsData.map((function(e){return e.city}));e=new Set(e),e=(e=Object(o.a)(e)).sort();var a=this.state.listingsData.map((function(e){return e.homeType}));a=new Set(a),a=(a=Object(o.a)(a)).sort();var t=this.state.listingsData.map((function(e){return e.rooms}));t=new Set(t),t=(t=Object(o.a)(t)).sort(),this.setState({populateFormsData:{homeTypes:a,bedrooms:t,cities:e}},(function(){}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,null),n.a.createElement("section",{id:"content-area"},n.a.createElement(f,{change:this.change,globalState:this.state,populateAction:this.populateForms}),n.a.createElement(E,{listingsData:this.state.filteredData,change:this.change,globalState:this.state,changeView:this.changeView})))}}]),a}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.b32dcab9.chunk.js.map