import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'menu.db' },
  () => console.log('DB opened'),
  (err) => console.error(err)
);
export default db;