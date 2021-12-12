class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: 0
    }

    this.timer = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if(!this.timer) {
      let startTime = Date.now();
      this.timer = setInterval(() => {
        const stopTime = Date.now();
        const timePassed = stopTime - startTime + this.state.timePassed;
        this.setState({
          timePassed,
        });

        startTime = stopTime;
      }, 250);
    }
  }

  stop() {
    window.clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.stop();
    this.setState({
      timePassed: 0
    })
  }


  render() {
    return (
      <div>
        <h2 className="time border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "600px"}}>
          {Math.floor(this.state.timePassed / 1000)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mr-2" onClick={this.start}>
            start
          </button>
          <button className="btn btn-danger mr-2" onClick={this.stop}>
            stop
          </button>
          <button className="btn btn-warning" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);