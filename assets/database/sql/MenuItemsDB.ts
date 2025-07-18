import db from './Constance';
import type { MenuItem } from './Models/MenuItem';

const initMenuTable = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS menu (
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT,
                price REAL,
                description TEXT,
                imageUrl TEXT,
                category TEXT
            )`,
            [],
            () => {
                console.log('Menu table initialized');
                resolve();
            },
            (_, err) => {
                console.error('Error creating table:', err);
                reject(err);
                return false;
            }
        );
    });
    });
};

export const insertMenuItems = async (items: MenuItem[]) => {
    await initMenuTable();
    db.transaction((tx) => {
        items.forEach(item => {
            tx.executeSql(
                `INSERT OR REPLACE INTO menu
                (id, name, price, description, imageUrl, category) VALUES (?, ?, ?, ?, ?, ?)`,
                [item.id, item.name, item.price, item.description, item.imageUrl, item.category]
            );
        });
    });
};

export const getMenuItems = async () : Promise<MenuItem[]> => {
    await initMenuTable();
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM menu`,
                [],
                (_, result) => {
                    const items: MenuItem[] = [];
                    for (let i = 0; i < result.rows.length; i++) {
                        items.push(result.rows.item(i));
                    }
                    resolve(items);
                },
                (_, err) => {
                    reject(err);
                    return false;
                }
            );
        });
    });
};