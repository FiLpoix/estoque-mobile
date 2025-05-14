import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ProductCard = () => (
  <View style={styles.card}>
    <Image source={require('../../assets/hahacat.jpg')} style={styles.cardImage} />
    <View style={styles.cardFooter}>
      <Text style={styles.cardText}>carro | tramontina</Text>
      <View style={styles.cardIcons}>
        <MaterialIcons name="visibility" size={16} color="#fff" />
        <MaterialIcons name="content-copy" size={16} color="#fff" style={{ marginLeft: 8 }} />
        <MaterialIcons name="delete" size={16} color="#fff" style={{ marginLeft: 8 }} />
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="camera-outline" size={20} color="#fff" />
        <Text style={styles.headerText}>E-Estoque</Text>
        <Icon name="reorder-three-outline" size={20} color="#fff" />
      </View>

      <Image source={require('../../assets/hahacat.jpg')} style={styles.mainImage} />

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Produtos</Text>
        <Text style={styles.tab}>Categorias</Text>
        <Text style={styles.tab}>Fornecedor</Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addBtnText}>Adicionar produtos</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <ProductCard />
        <ProductCard />
      </ScrollView>

      <View style={styles.bottomNav}>
        <Icon name="home-outline" size={24} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1f26',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
  },
  mainImage: {
    height: 300,
    marginVertical: 10,
    borderRadius: 4,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#3c3f47',
    marginBottom: 10,
  },
  activeTab: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 20,
  },
  tab: {
    color: '#7e8ca0',
    marginRight: 20,
  },
  addButton: {
    width: 200,
    height:40,
    backgroundColor: '#0D6EFD',
    marginBottom: 10,
    borderRadius: 10,
  },
  addBtnText:{
    color: '#fff',
    textAlign: 'center',
    lineHeight: 35,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#2a2f3a',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 10,
  },
  cardImage: {
    height: 80,
    width: '100%',
  },
  cardFooter: {
    padding: 5,
    backgroundColor: '#1c1f26',
  },
  cardText: {
    color: '#fff',
    fontSize: 12,
  },
  cardIcons: {
    flexDirection: 'row',
    marginTop: 4,
  },
  bottomNav: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1f26',
    borderTopWidth: 1,
    borderColor: '#333',
  },
});

export default HomeScreen;
