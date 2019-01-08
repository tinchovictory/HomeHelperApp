import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  contactFormContainer: {
    flex: 1,
    backgroundColor: '#26B99A',
  },
  headerContainer: {
    marginTop: 30,
    padding: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
  },
  closeBtn: {
    marginLeft: 20,
    padding: 5,
    width: 25,
  },
  closeBtnIcon: {
    color: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    marginTop: 20,
  },
  formContainer: {
    padding: 20,
    flex: 1,
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  continueBtn: {
    margin: 20,
    marginBottom: 40,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  continueBtnText: {
    color: '#26B99A',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dateInput: {
    width: null,
    padding: 10,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 30,
  },
  descriptionInput: {
    width: null,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 20,
    height: 250,
  },
});

export default class ContactForm extends Component {
  state={
    date: '',
    description: '',
  };

  handleDateChange = (text) => {
    this.setState({ date: text });
  }

  handleDescriptionChange = (text) => {
    this.setState({ description: text });
  }

  render() {
    const { navigation } = this.props;
    const { date, description } = this.state;

    return (
      <View style={styles.contactFormContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => { navigation.goBack(); }}
          >
            <Ionicons name="ios-close" size={25} style={styles.closeBtnIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Contactar</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Fecha:</Text>
          <TextInput
            style={styles.dateInput}
            onChangeText={this.handleDateChange}
            value={date}
          />
          <Text style={styles.subtitle}>Descripcion:</Text>
          <TextInput
            style={styles.descriptionInput}
            onChangeText={this.handleDescriptionChange}
            value={description}
            multiline
          />
        </View>
        <TouchableOpacity
          style={styles.continueBtn}
        >
          <Text style={styles.continueBtnText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
