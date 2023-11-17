import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

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