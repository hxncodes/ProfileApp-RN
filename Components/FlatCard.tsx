import { StyleSheet, Text, Image, TouchableOpacity, View, Linking } from 'react-native';
import React from 'react';

const FlatCard = () => {

// function for linking
function openWebsite(websiteLink: string) {
  Linking.openURL(websiteLink)
} 

  return (
    <View style={styles.container}>
      <View style={styles.proBadge}></View>
      <Image source={require('../assets/images/hxnCodes.jpg')} style={styles.cardImg} />
      <Text style={styles.cardTitle}>Hasnat Rana</Text>
      <Text style={styles.cardDescription}>React Native Developer</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{openWebsite('https://www.twitter.com/hxncodes')}}>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{openWebsite('https://www.github.com/hxncodes')}}>
        <Text style={styles.cardButton}>Follow me</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.footerTitle}>Skills</Text>
        <View style={styles.skillArea}>
          <Text style={styles.skill}>React Developer</Text>
          <Text style={styles.skill}>React-Native Developer</Text>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>TypeScript</Text>
        </View>
        <View style={styles.socialContainer}>
        <TouchableOpacity onPress={()=>{openWebsite('https://www.github.com/hxncodes')}}>
        <Text style={styles.socialLinks}>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{openWebsite('https://www.twitter.com/hxncodes')}}>
        <Text style={styles.socialLinks}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{openWebsite('https://www.linkedin.com/hxncodes')}}>
        <Text style={styles.socialLinks}>Linkedin</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
  container:{},
  proBadge: {},
  cardImg: {},
  cardTitle: {},
  cardDescription: {},
  buttonContainer: {},
  cardButton: {},
  cardFooter:{},
  footerTitle:{},
  skillArea:{},
  skill:{},
  socialContainer:{},
  socialLinks:{}
})