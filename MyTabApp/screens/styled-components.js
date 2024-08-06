import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #333;
`;

export default function HomeScreen() {
  return (
    <Container>
      <Text>Home Screen</Text>
    </Container>
  );
}
