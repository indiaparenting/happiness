import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GroupDetailCard from '../components/GroupDetailCard';



const Details = ({ navigation }) => {

  const data = navigation.state.params;
  console.log(data)



  return <GroupDetailCard data={data} />
};

const styles = StyleSheet.create({});

export default Details;
