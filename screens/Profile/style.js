import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: 60,
    marginHorizontal: 18,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profilePic: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bodyContainer: {
    borderColor: '#405564',
    borderWidth: 0.4,
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  personalInfoContainer: {
    marginVertical: 11,
  },
  avatarContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  avatarSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avatarButton: {
    paddingLeft: 20,
  },
  input: {
    marginVertical: 4,
  },
  emailInfoContainer: {
    marginVertical: 11,
  },
  checkBoxContainer: {
    marginTop: 8,
  },
  checkBox: {
    marginVertical: 9,
  },
  buttonContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  saveButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
});
