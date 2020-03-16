import TabBar from "@mindinventory/react-native-tab-bar-interaction";
import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Button, Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';


export default class Tab extends Component{
  render() {
      return (
          <TabBar>
            <TabBar.Item
                icon={require('./Recurso 1.png')}
                selectedIcon={require('./Recurso 1.png')}
                title="Tab1"
                screenBackgroundColor={{ backgroundColor: '#008080' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./Recurso 1.png')}
                selectedIcon={require('./Recurso 1.png')}
                title="Tab2"
                screenBackgroundColor={{ backgroundColor: '#F08080' }}
            >
                <View>
                    {/*Page Content*/}
                </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./Recurso 1.png')}
                selectedIcon={require('./Recurso 1.png')}
                title="Tab3"
                screenBackgroundColor={{ backgroundColor: '#485d72' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
          </TabBar>
      );
    }
}