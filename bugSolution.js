```javascript
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [data, setData] = useState([{ key: '1', text: 'Item 1' }, { key: '2', text: 'Item 2' }]);

  const addData = () => {
    const newData = [...data, { key: (data.length + 1).toString(), text: `Item ${data.length + 1}` }];
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
      <Button title="Add Data" onPress={addData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```