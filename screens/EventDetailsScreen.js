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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="share-outline" size={24} color="black" style={styles.icon} />
        </View>
      </View>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.date}>{`${event.date} · ${event.time}`}</Text>
      <Text style={styles.title}>{event.title}</Text>
      <View style={styles.ticketInfo}>
        <Text style={styles.ticketSource}>Tickets.com</Text>
        <Text style={styles.ticketStatus}>few slots left</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Checkout', { event })}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.location}>
        <Ionicons name="location-outline" size={16} color="#000" /> {event.location}
      </Text>
      <Text style={styles.price}>
        <Ionicons name="pricetag-outline" size={16} color="#000" /> {event.price}
      </Text>
      <Text style={styles.instagram}>
        <Ionicons name="logo-instagram" size={16} color="#000" /> {event.instagram}
      </Text>
      <Text style={styles.aboutTitle}>About this event</Text>
      <Text style={styles.about}>{event.about}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ticketInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  ticketSource: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  ticketStatus: {
    fontSize: 16,
    color: '#888',
  },
  buyButton: {
    backgroundColor: '#D1C4E9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buyButtonText: {
    fontSize: 16,
    color: '#000',
  },
  location: {
    fontSize: 16,
    color: '#000',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: '#000',
    marginVertical: 4,
  },
  instagram: {
    fontSize: 16,
    color: '#000',
    marginVertical: 4,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  about: {
    fontSize: 16,
    color: '#000',
  },
});

export default EventDetailsScreen;
