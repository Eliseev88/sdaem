import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_P3lQxJzEEmYYfj67471ctK8pt6XT2UE',
  authDomain: 'sdaem-2cb28.firebaseapp.com',
  projectId: 'sdaem-2cb28',
  storageBucket: 'sdaem-2cb28.appspot.com',
  messagingSenderId: '914299869769',
  appId: '1:914299869769:web:43fcea4ada5a5f8bc7fd98'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

// export const userRef = ref(db, 'user');
// export const userNameRef = ref(db, 'user/name');
// export const userShowNameRef = ref(db, 'user/showName');
// export const chatsRef = ref(db, 'chats');
// export const msgsRef = ref(db, 'messages');
// export const getChatRefById = (id) => ref(db, `chats/${id}`);
// export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
// export const getMsgsListRefById = (chatId) =>
//   ref(db, `messages/${chatId}/messageList`);

export default app;
