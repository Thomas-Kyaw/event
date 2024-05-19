// screens/EventDetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const EventDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={event.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{`${event.date} · ${event.time}`}</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
        <View style={styles.ticketInfoContainer}>
          <View style={styles.ticketInfo}>
            <Text style={styles.ticketSource}>Tickets.com</Text>
            <Text style={styles.ticketStatus}>few slots left</Text>
          </View>
          <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Checkout', { event })}>
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Ionicons name="location-sharp" size={20} color="black" />
            <Text style={styles.detailText}>{event.location}</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </View>
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Ionicons name="pricetag-outline" size={20} color="black" />
            <Text style={styles.price}>$ 200</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Ionicons name="logo-instagram" size={20} color="black" />
            <Text style={styles.detailText}>@tickets.co.us</Text>
          </View>
        </View>
        <Text style={styles.aboutTitle}>About this event</Text>
        <Text style={styles.about}>Kanye is coming to our shitty ahh town. Rejoice town people. Your shitty ahh town is getting kanye back.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
  ticketInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  ticketInfo: {
    flex: 1,
  },
  ticketSource: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  ticketStatus: {
    fontSize: 14,
    color: 'gray',
  },
  buyButton: {
    backgroundColor: '#a55eea',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buyButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  detailText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    marginLeft: 8,
  },
  price: {
    fontSize: 16,
    color: 'black',
    marginLeft: 8,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  about: {
    fontSize: 16,
    color: 'black',
  },
});

export default EventDetailsScreen;