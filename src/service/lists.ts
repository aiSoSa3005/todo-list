

import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { auth } from '../firebase'; // Adjust the import path as necessary

export const fetchLists = async () => {
  const db = getFirestore();
  const listsRef = collection(db, 'lists');
  const q = query(listsRef, where('users', 'array-contains', auth.currentUser?.uid));
  console.log("ecco q",q);

  const querySnapshot = await getDocs(q);
  console.log("ecco query snap",(querySnapshot));
  const listsData = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return listsData;
}