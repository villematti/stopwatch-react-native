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
      timeElapsed: null
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
        <Text>
          I am a list of laps.
        </Text>
      </View>{/* Footer end */}
    </View> // Container end
  },
  startStopButton: function () {
    return <TouchableHighlight
      underlayColor="grey"
      onPress={this.handleStartPress}
      style={[styles.button, styles.startStopButton]}
      >
      <Text>
        Start
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <View style={styles.button}>
      <Text>
        Lap
      </Text>
    </View>
  },
  handleStartPress: function() {
    var startTime = new Date();


    setInterval(() => {
      // Update state with new value
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
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
  startStopButton: {
    borderColor: '#00CC00'
  }

});



AppRegistry.registerComponent('stopwatch', () => StopWatch);
