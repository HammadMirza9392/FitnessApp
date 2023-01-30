import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-modern-datepicker';

const Chart = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  console.log(time);
  console.log(date);

  // const [selectedColor, setSelectedColor] = useState('red');
  // console.log(selectedColor);

  // const colorItems = [
  //   {id: 1, label: 'Red', value: 'red'},
  //   {id: 2, label: 'Green', value: 'green'},
  //   {id: 3, label: 'Blue', value: 'blue'},
  //   {id: 4, label: 'Yellow', value: 'yellow'},
  //   {id: 5, label: 'Pink', value: 'pink'},
  //   // ...
  // ];

  return (
    <ScrollView>
      {/* <View>
        {colorItems.map(item => (
          <View style={{backgroundColor: item.value, padding: 10}}>
            <Text style={{color: '#000'}}>{item.label}</Text>
          </View>
        ))}
      </View> */}
      <DatePicker
        mode="time"
        minuteInterval={3}
        onTimeChange={selectedTime => setTime(selectedTime)}
      />
      <DatePicker
        mode="monthYear"
        selectorStartingYear={2000}
        onMonthYearChange={selectedDate => setDate(selectedDate)}
      />

      <DatePicker
        options={{
          backgroundColor: '#090C08',
          textHeaderColor: '#FFA25B',
          textDefaultColor: '#F6E7C1',
          selectedTextColor: '#fff',
          mainColor: '#F4722B',
          textSecondaryColor: '#D6C7A1',
          borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        current="2020-07-13"
        selected="2020-07-23"
        mode="calendar"
        minuteInterval={10}
        style={{borderRadius: 20}}
      />
    </ScrollView>
  );
};

export default Chart;
