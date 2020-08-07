import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native'

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    loadFavorites()
  })

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {  
        
        const favoritedTeachers = JSON.parse(response)        

        setFavorites(favoritedTeachers)
      }
    })
  }
  
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>

      <ScrollView
         style={styles.teacherList}
         contentContainerStyle={{
           paddingHorizontal: 16,
           paddingBottom: 24,
         }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites;