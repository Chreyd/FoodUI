import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors'



const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}

      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>

      {/* Title */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>

      {/* Search */}
      <View style={styles.searcWrapper}>
        <Feather name='search' size={16} color={colors.textDark}/>
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper:{
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searcWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30

  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },

})

export default Home;