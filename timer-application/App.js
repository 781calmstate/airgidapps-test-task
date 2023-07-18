import { useEffect, useRef, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { styled } from 'styled-components/native';

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const timer = useRef();

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [isRunning]);

  const format = (time) => {
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
  };

  const handleRestart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }

    setTime(0);
  };

  const handleToggle = () => {
    if (isRunning) {
      clearInterval(timer.current);
    }

    setIsRunning(!isRunning);
  };

  return (
    <Container>
      <TimerBody>
        <View>
          <TimerContent>{format(time)}</TimerContent>
        </View>
        <TimerActions>
          <ActionsButton onPress={handleRestart}>
            <ButtonName>Restart</ButtonName>
          </ActionsButton>
          <ActionsButton onPress={handleToggle}>
            <ButtonName style={{ color: `${isRunning ? '#B70404' : '#116D6E'}` }}>
              {isRunning ? 'Stop' : 'Start'}
            </ButtonName>
          </ActionsButton>
        </TimerActions>
      </TimerBody>

      <StatusBar />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #c4b0ff;
  align-items: center;
  justify-content: center;
`;

const TimerBody = styled.View`
  width: 90%;
  background-color: #11009e;
  border-radius: 5px;
  padding: 10px;
`;

const TimerContent = styled.Text`
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
`;

const TimerActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0 20px 20px 20px;
`;

const ActionsButton = styled.Pressable`
  background-color: #8696fe;
  border-radius: 3px;
  padding: 10px;
  width: 100px;
`;

const ButtonName = styled.Text`
  text-align: center;
  font-size: 20px;
`;
