import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({title, color = '#7E0FD1', textColor = 'white'}) => {
  return (
    <TouchableOpacity style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    height: 47.5,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  }),
  text: textColor => ({
    fontSize: 15,
    color: textColor,
  }),
});
