import { StatusBar, Text, View, FlatList, ScrollView } from 'react-native';
import { styled } from 'styled-components/native';

export const createList = (n) => {
  const items = [];

  for (let i = 0; i < n; i++) {
    items.push({ name: 'Test', id: i + 1 });
  }

  return items;
};

const testItems = createList(10);

export default function App() {
  return (
    <ScrollView>
      <TitleText>Title</TitleText>
      {testItems.map((item) => (
        <ItemBody key={item.id}>
          <View>
            <ItemText>{item.name}</ItemText>
          </View>
          <View>
            <ItemText>{item.id}</ItemText>
          </View>
        </ItemBody>
      ))}
      <StatusBar />
    </ScrollView>
  );
}

const TitleText = styled.Text`
  color: white;
  background-color: #75c2f6;
  text-align: center;
  font-size: 20px;
  padding: 60px;
`;

const ItemBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  background-color: #0d1282;
`;

const ItemText = styled.Text`
  color: #fff;
`;
