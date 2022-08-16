import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors'


// Feather.loadFont();

const Home = () => {

  const renderCategoryItem = ({item}) =>{
    return(
      <View style={[styles.categoryItemWrapper, 
        {
          backgroundColor: item.selected ? colors.primary: colors.white, 
          marginLeft: item.id==1? 20 : 0
        }]}>
        <Image source={item.image} style={styles.categoryItemImage}/>
        <Text style={styles.categoryItemTitle} >{item.title}</Text>
        <View style={[styles.categorySelectWrapper, 
          {
            backgroundColor: item.selected? colors.white : colors.secondary,
          }]}>
          <Feather 
            name='chevron-right' 
            size={8} 
            style={[styles.categorySelectItem,
            {
              color: item.selected? colors.black : colors.white
            }]}
          />
        </View>
      </View>
    )
  }


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

      {/* Categorie */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data= {categoriesData}
            renderItem= {renderCategoryItem}
            keyExtractor= {(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>

      {/* Popular */}
      <View style={styles.poplularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popularData.map(({item})=> (
          <View>
            <Text>Hello</Text>
          </View>
        ))}
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
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-bold',
    fontSize: 16,
    paddingHorizontal: 20,
    fontWeight: '900',
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: colors.primary,
    marginRight: 20,
    borderRadius: 20
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-bold',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20
  },
  categorySelectItem: {
    alignSelf: 'center',
  },

})

export default Home;