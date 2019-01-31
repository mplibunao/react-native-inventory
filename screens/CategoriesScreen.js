import React from 'react';
import { ScrollView, TouchableHighlight, Button, Text, TextInput } from 'react-native';

export default class SettingsScreen extends React.Component {
  state = {
    categories: [],
    name: '',
  };

  static navigationOptions = {
    title: 'Categories',
  };

  componentDidMount() {
    this.fetchCategories();
  }

  onAddCount = () => this.setState({ count: this.state.count + 1 });

  fetchCategories = () => {
    fetch('http://192.168.42.110:3001/categories', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resp => resp.json())
      .then(data => this.setState({ categories: data }));
  }

  onCreateCategory = () => {
    const { name } = this.state;

    fetch('http://192.168.42.110:3001/categories', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
      })
    })
      .then(resp => resp.json())
      .then(data => console.warn('res =>', data))
      .catch(err => console.warn('err', err));

    this.fetchCategories();
  }


  render() {
    return (
      <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
        {this.state.categories.map(category => (
          <TouchableHighlight onPress={() => this.props.navigation.push('Page2', { id: category.id, name: category.name })}>
            <Text>{category.name}</Text>
          </TouchableHighlight>
        ))}
        <TextInput
          placeholder='Gaming'
          onChangeText={text => this.setState({ name: text })}
        />
        <Button title='Add New Category' onPress={this.onCreateCategory} />
     </ScrollView>
    );
  }
}
