// screens/RewardsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RewardsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Rewards</Text>
      <Text style={styles.subtitle}>Your Activity Points</Text>
      <Text style={styles.pointsLabel}>Total Points</Text>
      <Text style={styles.points}>700 points</Text>
      
      <View style={styles.sliderContainer}>
        <View style={styles.sliderTrack} />
        <View style={styles.sliderThumb} />
      </View>
      
      <Text style={styles.instruction}>Increase your points by doing the following</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
         style={styles.button}
         onPress={() => navigation.navigate('Home')}
         >
          <Text style={styles.buttonText}>Buy Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Filling in surveys</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Invite friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Events Experience</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.rewardsContainer}>
        <Text style={styles.rewardsTitle}>Reward Levels</Text>
        <View style={styles.rewardLevelContainer}>
          <Text style={styles.rewardLevel}>Bronze: 0-500 points</Text>
        </View>
        <View style={styles.rewardLevelContainer}>
          <Text style={styles.rewardLevel}>Silver: 501-1000 points</Text>
        </View>
        <View style={styles.rewardLevelContainer}>
          <Text style={styles.rewardLevel}>Gold: 1001-2000 points</Text>
        </View>
        <View style={styles.rewardLevelContainer}>
          <Text style={styles.rewardLevel}>Platinum: 2001+ points</Text>
        </View>
      </View>
      
      <View style={styles.redeemContainer}>
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemButtonText}>Redeem Points</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transaction History</Text>
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>Bought Ticket: +100 points</Text>
        </View>
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>Survey Completed: +50 points</Text>
        </View>
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>Invited Friend: +200 points</Text>
        </View>
      </View>
      
      <View style={styles.expirationContainer}>
        <Text style={styles.expirationNotice}>Points Expiration: 12/31/2024</Text>
      </View>
      
      <View style={styles.referralContainer}>
        <Text style={styles.referralCode}>Your Referral Code: ABC123</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#999999',
    alignSelf: 'center',
    marginVertical: 8,
  },
  pointsLabel: {
    fontSize: 16,
    color: '#999999',
    alignSelf: 'center',
    marginVertical: 4,
  },
  points: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
  },
  sliderContainer: {
    alignSelf: 'center',
    marginVertical: 16,
    width: '80%',
    alignItems: 'center',
  },
  sliderTrack: {
    width: '100%',
    height: 2,
    backgroundColor: '#0000FF',
  },
  sliderThumb: {
    position: 'absolute',
    top: -6,
    left: '50%',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  instruction: {
    fontSize: 16,
    color: '#999999',
    alignSelf: 'center',
    marginVertical: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#E8E8E8',
    padding: 12,
    margin: 8,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#7D3C98',
  },
  rewardsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  rewardsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    alignSelf: 'center',
  },
  rewardLevelContainer: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  rewardLevel: {
    fontSize: 16,
    color: '#000',
  },
  redeemContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  redeemButton: {
    backgroundColor: '#7D3C98',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '60%',
  },
  redeemButtonText: {
    fontSize: 16,
    color: '#FFF',
  },
  transactionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    alignSelf: 'center',
  },
  transaction: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  transactionText: {
    fontSize: 16,
    color: '#000',
  },
  expirationContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  expirationNotice: {
    fontSize: 16,
    color: '#FF0000',
    marginBottom: 4,
    alignSelf: 'center',
  },
  referralContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  referralCode: {
    fontSize: 16,
    color: '#000',
    marginBottom: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default RewardsScreen;
