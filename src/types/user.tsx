import { db } from "@/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export interface IUser {
    userId: string;
    email: string;
    password?: string;
}

export async function writeUserData(user: IUser) {
    const {
        userId,
        email,
    } = user;

    try {
        await setDoc(doc(db, 'users', userId), {
            userId,
            email: email ?? '',
        });
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

export async function getAllUsers() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map((document) => document.data());
}