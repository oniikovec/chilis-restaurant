import { useState, useEffect } from "react";
import { db } from "../utils/firebase.utils";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = db.collection(collection)
      // .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const documents = []
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id})
        })
        setDocs(documents)
      })
    // stored all the code into unsub const to call it
    // here and clean up when we dont use the images anymore
    return () => unsub()

  }, [collection])

  return { docs }
}

export default useFirestore