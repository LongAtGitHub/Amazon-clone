// firestoreApi.js
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { z } from "zod";

const COLLECTIONS = {
  WISHLIST: "wishlist",
  CART: "cart",
};

// ✅ Define schemas
const WishlistSchema = z.object({
  userId: z.string().min(1),
  productId: z.string().min(1),
});

const CartSchema = z.object({
  userId: z.string().min(1),
  productId: z.string().min(1),
});

const apiClient = {
  addToWishlist: async (userId, productId) => {
    const dataInsert = { userId, productId };
    const validated = WishlistSchema.parse(dataInsert);
    const docRef = await addDoc(collection(db, COLLECTIONS.WISHLIST), validated);
    return docRef.id;
  },

  removeFromWishlist: async (docId) => {
    await deleteDoc(doc(db, COLLECTIONS.WISHLIST, docId));
  },

  listAllWishlist: async (userId) => {
    const q = query(
      collection(db, COLLECTIONS.WISHLIST),
      where("userId", "==", userId)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

    // CART
  addToCart: async (userId, productId) => {
    const dataInsert = { userId, productId };
    const validated = CartSchema.parse(dataInsert);
    const docRef = await addDoc(collection(db, COLLECTIONS.CART), validated);
    return docRef.id;
  },


  removeFromCart: async (docId) => {
    await deleteDoc(doc(db, COLLECTIONS.CART, docId));
  },

  listAllCart: async (userId) => {
    const q = query(
      collection(db, COLLECTIONS.CART),
      where("userId", "==", userId)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};

export default apiClient;
