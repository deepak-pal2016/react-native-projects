import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getMovies } from '../redux/actions';
import Spinner from 'react-native-loading-spinner-overlay'
const Movies = (props) => {
  const { movies } = useSelector(state => state.moviesReducer);
  const { loader } = useSelector(state => state.moviesReducer);
  console.log('movies array', loader);
  const dispatch = useDispatch();
 // console.log('dispatch', dispatch);
  const fetchMovies = () => dispatch(getMovies());
//  console.log('dfdfd--', fetchMovies);
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 44, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, }}>Popular Movies</Text>
      <View style={{ flex: 1, marginTop: 12 }}>
        <FlatList
          data={movies}
          keyExtractor={item => item.LocationID.toString()}
          renderItem={({ item }) => {
            return (
              <View style={{ marginVertical: 12, backfaceVisibility: 'white' }}>
                <View style={{ flexDirection: 'row', flex: 1, }}>
                  {item.NearImage != "" ?
                    <Image
                      source={{
                        uri: `https://pingtrack.azurewebsites.net/public/uploads/sole-right-media/${item.NearImage}`,
                      }}
                      resizeMode="center"
                      style={{ width: 100, height: 120, borderRadius: 10 }}
                    />
                    :
                    <Image source={require('../assets/img/noiimage.png')} resizeMode="center" style={{
                      width: 110, height: 110, borderRadius: 10
                    }}
                    />}

                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <View>
                      <Text style={{ fontSize: 20, paddingRight: 16 }}>
                        {item.LocationDescription}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        alignItems: 'center',
                      }}>
                      <MaterialIcons color="green" name="thumb-up" size={32} />
                      <Text
                        style={{
                          fontSize: 18,
                          paddingLeft: 10,
                          color: '#64676D',
                        }}>
                        {item.AgencyCode}
                      </Text>
                      <TouchableOpacity
                        onPress={() => console.log('Added!')}
                        activeOpacity={0.7}
                        style={{
                          marginLeft: 14,
                          flexDirection: 'row',
                          padding: 2,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 40,
                          width: 40,
                        }}>
                        <MaterialIcons
                          color="orange"
                          size={32}
                          name="favorite-outline"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Spinner
        visible={loader}
        textContent={'Please Wait..'}
        textStyle={{ fontSize: 12, color: 'white' }} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Movies;