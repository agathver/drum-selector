import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReservationPage from './ReservationPage';
import { fetchSlots } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [],
    }
  }
  componentWillMount() {
    const slots = fetchSlots();
    this.setState({
      slots,
      selectedDate: Object.keys(slots)[0]
    });
  }

  handleSelectedDateChange = selectedDate => {
    this.setState({
      selectedDate,
      selectedHour: Object.keys(this.state.slots[selectedDate])[0] //[0]
    });
  };

  handleSelectedHourChange = selectedHour => {
    this.setState({
      selectedHour,
      selectedSlot: Object.keys(this.state.slots[this.state.selectedDate][selectedHour])[0]
    });
  };

  handleSelectedSlotChange = selectedSlot => {
    this.setState({
      selectedSlot
    });
  };

  handleButtonClick = () => {
    this.setState({
      choosenSlot: `${this.state.selectedSlot}`
    })
  }
  render() {
    const { slots, selectedDate, selectedHour, selectedSlot, choosenSlot } = this.state;
    return (
      <div className="App">
        <header>
          Reservation
        </header>
        <main>
          <div className="container">
            <ReservationPage slots={slots} selectedDate={selectedDate} selectedHour={selectedHour}
              selectedSlot={selectedSlot} onSelectedHourChanged={this.handleSelectedHourChange}
              onSelectedDateChanged={this.handleSelectedDateChange} onSelectedSlotChanged={this.handleSelectedSlotChange} />
            <div className="buttons">
              <button type="button" onClick={this.handleButtonClick}>Set</button>
              <p>{choosenSlot && `You chose ${choosenSlot}`}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
