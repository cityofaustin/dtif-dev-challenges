import React, { Component } from 'react';
import '../styles/App.css';
import 'typeface-roboto';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogData: []
    };
  }

  async componentWillMount() {
    // Here is a link to the API Documentation: https://dev.socrata.com/
    try {
      const response = await axios.get(
        'https://data.austintexas.gov/resource/h8x4-nvyi.json'
      );

      this.setState({
        dogData: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dangerous Dogs</h2>
        </div>

        <p className="App-intro">
          {/* TODO: Delete line below */}
          Open Dev Tools Console to see data.
          {/* TODO: Display data here, maybe? Be creative! 🎉 */}
        </p>
      </div>
    );
  }
}

export default App;
