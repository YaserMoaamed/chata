import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
const Skip = ({...props}) => (
  <TouchableOpacity {...props} style={{marginHorizontal: 15}}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity {...props} style={{marginHorizontal: 15}}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity {...props} style={{marginHorizontal: 15}}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const Dots = () => {
  let backgroundColor = 'rgba(0,0,0,0.8)';
  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}></View>
  );
};
exports = {
  Skip,
  Next,
  Done,
  Dots,
};
