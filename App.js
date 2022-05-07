/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import JJPush from 'react-native-push';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

class App extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount(): * {
      JJPush.init("625ce1a47e9c7", "625ce1a47e9d3");
      setTimeout(() => {
          JJPush.setAlias("qqqwwweee")
          JJPush.notify("1111111", "22222222")
      }, 5000)


      JJPush.addEventListener('jjpush_notify', (res) => {
          console.log("jjpush", res)
      });

      JJPush.addEventListener('jjpush_click', (res) => {
          console.log("jjpush", res)
      });

      JJPush.getInitialNotification((res) => {
        alert(JSON.stringify(res))
      });

  }

    render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isDarkMode = false;

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
      <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}>
            <Header />
            <View
                style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
              <Section title="Step One">
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Section>
              <Section title="See Your Changes">
                <ReloadInstructions />
              </Section>
              <Section title="Debug">
                <DebugInstructions />
              </Section>
              <Section title="Learn More">
                Read the docs to discover what to do next:
              </Section>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  }


};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
