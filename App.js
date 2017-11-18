import React from 'react';
import { StyleSheet, FlatList,Text, View , Image,Dimensions,TextInput } from 'react-native';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {text: '',data:[
                                      {color: 'powderblue'},
                                      {color: 'skyblue'},
                                      {color: 'steelblue'},
                                      ]}
    }
    
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: Dimensions.get('window').width*0.8, height: Dimensions.get('window').height*0.1, backgroundColor: 'powderblue'}} />
        <Testing sentense = "Open up App.js to start working on your app!" />
        
        <Text>Changes you make will automatically reload.</Text>
        <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
        />
            
            <FlatList
            data={this.state.data}
            keyExtractor = {item => item.color}

            renderItem={({item}) => <View style={{width: Dimensions.get('window').width*0.5, height: Dimensions.get('window').height*0.1, backgroundColor: item.color}}><Text style={{padding: 10, fontSize: 12}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text></View>}
            />
      </View>
    );
  }
}

class Testing extends React.Component{
    render(){
        return (
            <Text>
                <Image style={styles.image} source={{uri: 'http://loremflickr.com/g/50/50/paris'}}/>
                <MyImage/>
                TESTING {this.props.sentense}
            </Text>
        );
    }
}
class MyImage extends React.Component{
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: 50,
    height: 50,
  }
                                 
});
