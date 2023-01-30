import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Udummy = () => {
  const firends = [
    {name: 'Firend 1', Age: '20'},
    {name: 'Firend 2', Age: '45'},
    {name: 'Firend 3', Age: '32'},
    {name: 'Firend 4', Age: '27'},
    {name: 'Firend 5', Age: '53'},
    {name: 'Firend 7', Age: '30'},
  ];
  return (
    <View>
      <Text>Udummy</Text>
      <FlatList
        keyExtractor={itemm => itemm.name}
        data={firends}
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000', marginHorizontal: 20}}>
                {item.name}
              </Text>
              <Text style={{color: '#000'}}>{item.Age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Udummy;

const styles = StyleSheet.create({});
