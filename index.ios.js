import React from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native';

var StopWatch = React.createClass ({
  render: function() {

    return <View style={[styles.container, this.border('black')]}>{/* Container end */}
      <View style={[styles.header, this.border('yellow')]}>{/* Header start */}
        <View style={[this.border('red'), styles.timerWrapper]}>{/* Timer start */}
          <Text>
            00:00:00
          </Text>
        </View>{/* Timer end */}
        <View style={[this.border('green'), styles.buttonWrapper]}>{/* Buttons start */}
          {this.startStopButton()}
          {this.lapButton()}
        </View>{/* Buttons end */}
      </View>{/* Header end */}
      <View style={[styles.footer, this.border('blue')]}>{/* Footer start */}
        <Text>
          I am a list of laps.
        </Text>
      </View>{/* Footer end */}
    </View> // Container end
  },
  startStopButton: function () {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  },
  lapButton: function() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  },
  border: function (color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
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
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
