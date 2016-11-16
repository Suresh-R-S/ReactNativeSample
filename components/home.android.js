import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  Image, 
  ToolbarAndroid
} from 'react-native';

export default class Home extends Component{
  constructor(){
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});
      this.state = {
      dataSource : ds.cloneWithRows([{ title : 'Doctor Strange',
        genre: 'Action',
        rating : '8/10'
      },
      { title : 'Hacksaw Ridge',
        genre: 'Drama',
        rating : '8.7/10' 
      },
      { title : 'The Accountant',
        genre: 'Action',
        rating : '7.6/10' 
      },
      { title : 'Suicide Squad',
        genre: 'Action',
        rating : '6.6/10'
      },
      { title : 'Inferno',
        genre: 'Thriller',
        rating : '6.4/10' 
      },
      { title : 'Trolls',
        genre: 'Animation',
        rating : '6.7/10' 
      },
      { title : 'Star Trek Beyond',
        genre: 'Sci-Fi',
        rating : '7.2/10' 
      },
      { title : 'Sausage Party',
        genre: 'Animation',
        rating : '6.5/10' 
      },
      { title : 'Arrival',
        genre: 'Drama',
        rating : '8.5/10' 
      },
      { title : 'Deadpool',
        genre: 'Action',
        rating : '8.1/10' 
      },
      { title : 'Zootopia',
        genre: 'Animation',
        rating : '8.1/10' 
      }])
    };
  }

  renderSeparatorFunction(sectionID, rowID, adjacentRowHighlighted){
    return(
      <View key={`${sectionID}-${rowID}`} style = {styles.separator}></View>
    );
  }

	render(){
		return(
			<View style = {styles.container}>
      <ToolbarAndroid 
      style = {styles.toolbar} 
      title = 'Movie List'
      actions={[{title: 'Logout', icon: require('../images/logout.png'), show: 'always'}]}
      onActionSelected = {this.props.navigator.pop}/>
			<ListView dataSource={this.state.dataSource} 
        renderRow={(data)=>
          <View style = {styles.listItem}>
            <Text style = {styles.filmTitle}>{data.title}</Text>
            <Text style = {styles.filmItem}>{data.genre}</Text>
            <Text style = {styles.filmItem}>
            <Image style = {styles.starIcon} source = {require('../images/starIcon.png')}/> 
            {data.rating}
            </Text>
          </View>}
        renderSeparator = {this.renderSeparatorFunction.bind(this)}
      />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  listItem : {
    flex : 1,
    paddingTop: 30,
    paddingBottom: 30
  },
  separator : {
    height : 1,
    backgroundColor : 'gray'
  },
  filmTitle:{
    textAlign : 'center',
    fontSize : 20,
    fontWeight : 'bold'
  },
  filmItem: {
    textAlign : 'center',
    fontSize : 14
  },
  toolbar : {
  backgroundColor : 'gray',
  height : 56
  },
  starIcon : {
    height: 14,
    width:14
  }
});