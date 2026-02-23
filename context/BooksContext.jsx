import { createContext, useEffect, useState } from "react";
import { database, client } from "../lib/appWrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DatabaseId = "6999c0e1000ce6e8c4a8";
const CollectionId = "6999c1a60000616266d9";

export const BooksContext = createContext();
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await database.listDocuments(DatabaseId, CollectionId, [
        Query.equal("userId", user.$id),
      ]);
      setBooks(response.documents);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
      const response = await database.getDocument(DatabaseId, CollectionId, id);
      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await database.createDocument(
        DatabaseId,
        CollectionId,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteBook(id) {
    try {
      await database.deleteDocument(DatabaseId, CollectionId, id);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    let unSubscribe;
    const channel = `databases.${DatabaseId}.collections.${CollectionId}.documents`;
    if (user) {
      fetchBooks();
      unSubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;
        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }
        if (events[0].includes("delete")) {
          setBooks((prevBooks) =>
            prevBooks.filter((book) => book.$id !== payload.$id),
          );
        }
      });
    } else {
      setBooks([]);
    }
    return () => {
      if (unSubscribe) unSubscribe();
    };
  }, [user]);
  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
