import { TabNavigator, StackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import ListDeck from '../components/ListDeck'
import React from 'react'
import NewDeck from '../components/NewDeck'
import ItemDeck from '../components/ItemDeck'
import AddCard from '../components/AddCard'

import {white, grey, black } from '../utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = TabNavigator(
  {
    ListDeck: {
      screen: ListDeck,
      navigationOptions: {
        tabBarLabel: 'Deck List',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: { header: null },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? black : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : black,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export const MainNavigator = StackNavigator({
  Home: { screen: Tabs },
  ItemDeck: {
    screen: ItemDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: grey
      }
    }
  },

  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: grey
      }
    }
  },
});
