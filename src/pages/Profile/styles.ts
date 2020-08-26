import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: ${Platform.OS === 'android' ? 110 : 40}px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: ${Platform.OS === 'android' ? 0 : 32}px;
`;

export const UserAvatar = styled.Image`
  width: ${Platform.OS === 'android' ? 135 : 186}px;
  height: ${Platform.OS === 'android' ? 135 : 186}px;
  border-radius: ${Platform.OS === 'android' ? 65 : 98}px;

  align-self: center;
`;
