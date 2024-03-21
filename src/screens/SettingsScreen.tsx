import {View} from 'react-native';
import {Divider, List, Text} from 'react-native-paper';
import {getVersion} from 'react-native-device-info';

export const SettingsScreen = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <List.Item
        title="Vacasa interview"
        left={() => <List.Icon icon="folder" />}
        description={'vacasa_interview@vacasa.com'}
      />
      <Divider />
      <View style={{paddingVertical: 20}}>
        <List.Item
          title="App version"
          right={() => <Text>{getVersion()}</Text>}
        />
      </View>
    </View>
  );
};
