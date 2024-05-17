// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const events = [
  {
    id: '1',
    title: 'Kanye West World Tour',
    date: 'Wednesday, 3 January',
    time: '18:00',
    location: 'Town Hall',
    image: require('../assets/concert.jpg'),
  },
  {
    id: '2',
    title: 'Kanye West World Tour',
    date: 'Wednesday, 3 January',
    time: '18:00',
    location: 'Town Hall',
    image: require('../assets/concert.jpg'),
  },
  // Add more events as needed
];

const upcomingEvents = [
  {
    id: '3',
    title: 'Local Concert',
    date: 'Thursday, 4 January',
    time: '19:00',
    location: 'City Park',
    image: require('../assets/concert.jpg'),
  },
  {
    id: '4',
    title: 'Art Exhibition',
    date: 'Friday, 5 January',
    time: '10:00',
    location: 'Art Gallery',
    image: require('../assets/concert.jpg'),
  },
  // Add more upcoming events as needed
];

const filters = ['All', 'Concerts', 'Sports', 'Exhibitions', 'Festivals'];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Events</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
        {filters.map((filter, index) => (
          <TouchableOpacity key={index} style={[styles.filterButton, filter === 'All' && styles.activeFilter]}>
            <Text style={[styles.filterText, filter === 'All' && styles.activeFilterText]}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eventList}>
        {events.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
            style={styles.eventCard}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.eventInfo}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.buyContainer}>
                  <FontAwesome name="shopping-cart" size={16}/>
                  <TouchableOpacity
                    style={styles.buyButton}
                    onPress={() => navigation.navigate('Checkout', { event: item })}
                  >
                    <Text style={styles.buyButtonText}>Buy</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.eventDetails}>
                <View style={styles.eventDetailRow}>
                  <MaterialIcons name="date-range" size={16} style={styles.icon} />
                  <Text style={styles.detailText}>{item.date}</Text>
                </View>
                <View style={styles.eventDetailRow}>
                  <Ionicons name="time" size={16} style={styles.icon} />
                  <Text style={styles.detailText}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.eventDetailRow}>
                <View style={styles.locationRow}>
                  <Ionicons name="location-sharp" size={16} style={styles.icon} />
                  <Text style={styles.detailText}>{item.location}</Text>
                </View>
                <Entypo name="share" size={16} style={styles.shareIcon} />
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eventList}>
        {upcomingEvents.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
            style={styles.eventCard}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.eventInfo}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.buyContainer}>
                  <FontAwesome name="shopping-cart" size={16} color="#888" />
                  <Pressable
                    style={styles.buyButton}
                    onPress={() => navigation.navigate('Checkout', { event: item })}
                  >
                    <Text style={styles.buyButtonText}>Buy</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.eventDetails}>
                <View style={styles.eventDetailRow}>
                  <MaterialIcons name="date-range" size={16} color="#888" style={styles.icon} />
                  <Text style={styles.detailText}>{item.date}</Text>
                </View>
                <View style={styles.eventDetailRow}>
                  <Ionicons name="time" size={16} color="#888" style={styles.icon} />
                  <Text style={styles.detailText}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.eventDetailRow}>
                <View style={styles.locationRow}>
                  <Ionicons name="location-sharp" size={16} color="#888" style={styles.icon} />
                  <Text style={styles.detailText}>{item.location}</Text>
                </View>
                <Entypo name="share" size={16} color="#888" style={styles.shareIcon} />
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  contentContainer: {
    paddingBottom: 16, // Ensures the content is scrollable without being cut off
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    flexShrink: 1, // Allow text to wrap if necessary
  },
  seeAll: {
    fontSize: 16,
    color: '#a55eea',
    fontFamily: 'Poppins-Regular',
  },
  filters: {
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginRight: 8,
    height: 30,
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  activeFilter: {
    backgroundColor: '#a55eea',
  },
  activeFilterText: {
    color: '#FFF',
    fontFamily: 'Poppins-Medium',
  },
  eventList: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 16,
    width: SCREEN_WIDTH * 0.8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000', // Color of the border
  },
  image: {
    width: '100%',
    height: 150,
  },
  eventInfo: {
    padding: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    flexShrink: 1,  // Allow text to wrap if necessary
    fontFamily: 'Poppins-Regular',
  },
  buyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#d1c4e9',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 8,
  },
  buyButtonText: {
    color: '#4a148c',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  horizontalLine: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  eventDetails: {
    justifyContent: 'space-between',
  },
  eventDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareIcon: {
    marginLeft: 108,
  },
  detailText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
});

export default HomeScreen;
