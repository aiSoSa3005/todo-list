import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { fetchLists } from "../../../service/lists";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Card from "../../card/Card";
import "./Dashboard.css";

const Dashboard = () => {
  const [newListName, setNewListName] = useState("");
  const [lists, setLists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadLists = async () => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }

    try {
      const listData = await fetchLists();
      setLoading(false);
      setLists(listData);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    loadLists();
  }, [navigate]);

  const handleCreateList = async () => {
    if (!newListName.trim()) return;

    try {
      const db = getFirestore(); // INIZIALIZZA IL DATABASE
      const listsRef = collection(db, "lists");

      const newList = {
        name: newListName,
        users: [auth.currentUser?.uid],
      };
      const docRef = await addDoc(listsRef, newList); // AGGIUNGE LA NUOVA LISTA AL DATABASE

      setLists((prevLists) => [...prevLists, { id: docRef.id, ...newList }]); // ID TEMPORANEO  PER AGGIUNGERE LA NUOVA LISTA
      setNewListName("");

      await loadLists(); // RICARICA LE LISTE
    } catch (error) {
      console.error("Error creating list:", error);
    }
  };
  const deleteList = async (listId: string) => {
    try {
      const db = getFirestore();
      const listRef = doc(db, "lists", listId);
      await deleteDoc(listRef);
  
      setLists((prevLists) => prevLists.filter(list => list.id !== listId));
    } catch (error) {
      
    }
  };
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="add-lists-container">
        <input
          autoFocus
          type="text"
          id="list-name"
          placeholder="Add new list name"
          required
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button className="btn input-lists" onClick={handleCreateList}>
          Add List
        </button>
      </div>
      {loading && <div className="loading empty-container">Loading...</div>}
      {lists.length === 0 && loading === false ? (
        <div className="empty-container">No lists found</div>
      ) : (
        <div className="grid-cards">
          {lists.map((list) => (
            <Link to={`/taskpage/${list.id}`} className="card-links">
              <Card
                key={list.id}
                title={list.name}
                users={list.users.length}
                deleteCard={(e: React.MouseEvent) => {
                  e.preventDefault(); 
                  deleteList(list.id);
                }}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
