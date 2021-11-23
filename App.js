import React from 'react';
export default class UserList extends React.Component {   
  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
  }
  UserList(){
    return $.getJSON('https://jsonkeeper.com/b/07NH')
    .then(function(data) {
      return data.results;
    });
  }
  render() {
    this.UserList().then(function(res){
      this.state = {person: res};
    });
    return (
      <div>
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">
          {this.state.person.map((item, i) =>{
            return(
              <h1>{item.id.first}</h1>
              <fieldset>
              <div>
              {item.name},
              {item.email}, 
              {item.aboutMe},
              {item.location},
              {item.department},
              {item.gender},
              {item.joiningDate}
              </div>
              </fieldset>
            )
          })}
        <div>
      </div>
      </div>
    )
  }
}
