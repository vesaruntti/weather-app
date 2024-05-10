import { StyleSheet, View, VirtualizedList } from 'react-native';
import { IDay } from '../../interfaces';
import { ForecastListItem } from './ForecastListItem';

// Component prop interface
interface IProps {
  forecast: IDay[];
}

/**
 * Takes in IDay array, which specifies list data.
 *
 * @param {IDay[]} forecact
 */
export const ForecastList = ({ forecast }: IProps) => {
  return (
    <View style={styles.listWrapper}>
      <VirtualizedList
        contentContainerStyle={styles.list}
        data={forecast}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <ForecastListItem date={item.date} day={item.day} />
        )}
        keyExtractor={(item: { date: string; day: IDay }) => item.date}
        getItemCount={data => data.length}
        getItem={(data, index) => {
          return data[index];
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    position: 'absolute',
    bottom: 0,
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  list: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
