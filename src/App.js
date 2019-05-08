import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import CustomModal from './components/new-to-do';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        myDay : 'My Day',
        value : new Date().toDateString()
       
    }
  }
  // myTask = () => {
  //   this.setState({
  //     myDay : "My Day",
  //     value : new Date().toDateString()
  //   })
  // }

  render (){
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 list-group" style={{paddingRight : '0px'}}>
         <h4>Microsoft-To-Do</h4>
         <li className="list-group-item"><i className="fa fa-user" style={{fontSize:'25px'}}></i>  Raghav krishna <i className="fa fa-search" style={{ marginLeft: '121px'}}></i></li>
         <li type="button" className="list-group-item"><i className="fa fa-tasks"></i> My Day
         <span className="badge" style={{marginLeft:'180px'}}>14</span></li>
         <li type="button" className="list-group-item"><i className="fa fa-star"></i> Important
         <span className="badge" style={{marginLeft:'171px'}}>7</span></li>
         <li type="button" className="list-group-item"><i className="fa fa-calculator"></i> Planned
         </li>
         <li type="button" className="list-group-item list-group-item-action"><i className="fa fa-home"></i> Tasks
         <span className="badge" style={{marginLeft:'197px'}}>5</span></li>
         <li type="button" className="list-group-item list-group-item-action"><i className="fa fa-shopping-cart"></i> Shopping
         <span className="badge" style={{marginLeft:'171px'}}>1</span></li>
         <li type="button" className="list-group-item list-group-item-action"><i className="fa fa-arrow-left"></i> Zapier
         <span className="badge" style={{marginLeft:'194px'}}>3</span></li>
         <li type="button" className="list-group-item list-group-item-action"><i className="fa fa-key"></i> Secrets
         <span className="badge" style={{marginLeft:'183px'}}>4</span></li>
        </div>

        <div className="col-lg-9" style={{ paddingRight : '0px',paddingLeft : '0px'}}>
        <div style={{backgroundColor : "mediumpurple",height : '200px', paddingTop : '50px'}}>
            <h1 style={{paddingLeft :'19px',color:'white'}}>Welcome ! Create your daily TO-DO</h1>
            <h1 style= {{position : 'sticky', top : '110px',paddingLeft :'19px',color:'white'}}>{this.state.myDay}</h1>
            <p style= {{position : 'sticky', top : '174px',paddingLeft :'19px',color:'white'}}>{this.state.value}</p>
          
        </div>
        <CustomModal />
        </div>
      </div>
    </div>
    
  );
}
}
export default App;
