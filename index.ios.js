import formatTime from 'minutes-seconds-milliseconds';
import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} from 'react-native';

var StopWatch = React.createClass ({

  getInitialState: function() {
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render: function() {

    return <View style={styles.container}>{/* Container end */}
      <View style={styles.header}>{/* Header start */}
        <View style={styles.timerWrapper}>{/* Timer start */}
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>{/* Timer end */}
        <View style={styles.buttonWrapper}>{/* Buttons start */}
          {this.startStopButton()}
          {this.lapButton()}
        </View>{/* Buttons end */}
      </View>{/* Header end */}
      <View style={styles.footer}>{/* Footer start */}
          {this.laps()}
      </View>{/* Footer end */}
    </View> // Container end
  },
  startStopButton: function () {
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor="grey"
      onPress={this.handleStartPress}
      style={[styles.button, style]}
      >
      <Text>
        {this.state.running ? 'Stop': 'Start'}
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <TouchableHighlight
        style={styles.button}
        underlayColor="grey"
        onPress={this.handleLapPress}
      >
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },
  handleStartPress: function() {
    if(this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }

    this.setState({startTime: new Date()})

    this.interval = setInterval(() => {
      // Update state with new value
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);
  },
  handleLapPress: function() {
    if(this.state.running) {
      var lap = this.state.timeElapsed;

      this.setState({
        startTime: new Date(),
        laps: this.state.laps.concat([lap])
      })
    }
  },
  laps: function() {
    return this.state.laps.map(function(time, index){
      return <View style={styles.lapTimes}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    })
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lapTimes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50
  },
  lapText: {
    fontSize: 30
  }

});



AppRegistry.registerComponent('stopwatch', () => StopWatch);
