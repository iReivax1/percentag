import React from 'react';
import './App.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Tags from './tags';
import Recommend from './recommend';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tags",
    };
    this.handleTab = this.handleTab.bind(this);

  }


  componentDidMount() {

  }


  handleTab(value) {
    this.setState({
      tab: value
    });
  }

  render() {
    let tagsTab = <Tags />;
    let recommendTab = <Recommend />;
    let showtab;
    let tagBtn; let recoBtn;
    if (this.state.tab === "tags") {
      showtab = tagsTab;
      tagBtn = <ToggleButton value="tags" style={{ width: "125px", height: "35px", fontSize: 13, backgroundColor:"#0D3A71", color:"white"}} onClick={() => this.handleTab("tags")} >
      Tags
    </ToggleButton>
      recoBtn =  <ToggleButton value="recommend" style={{ width: "130px", height: "35px", fontSize: 13}} onClick={() => this.handleTab("recommend")} >
    Recommended
  </ToggleButton>
    }
    else if (this.state.tab === "recommend") {
      showtab = recommendTab;
      tagBtn = <ToggleButton value="tags" style={{ width: "125px", height: "35px", fontSize: 13}} onClick={() => this.handleTab("tags")} >
      Tags
    </ToggleButton>
      recoBtn =  <ToggleButton value="recommend" style={{ width: "130px", height: "35px", fontSize: 13, backgroundColor:"#0D3A71", color:"white"}} onClick={() => this.handleTab("recommend")} >
    Recommended
  </ToggleButton>
    }
    let selected = tagBtn
    return (
      
      <React.Fragment>
        
        <div className="App">
          <img src={"/images/LogoFullB.png"} style={{ paddingLeft: "8px", paddingTop: "5px" }} className="App-logo" alt="logo" />
          <div>

            <ToggleButtonGroup
              value={this.state.tab}
              exclusive
              aria-label="tabs"
              className="tabsBar"
              size="large"
              
            >
              {tagBtn}
              {recoBtn}
              
            </ToggleButtonGroup>

            <div className="showTab">
              {showtab}
            </div>
          </div>

        </div>
        
      </React.Fragment>
    );
  }
}



