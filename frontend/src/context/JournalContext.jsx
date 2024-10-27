import { createContext, useState, useEffect } from "react";

// Create the context
export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  // Load existing entries from localStorage on initial render
  useEffect(() => {
    const storedEntries = localStorage.getItem("journalEntries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem("journalEntries", JSON.stringify(entries));
    }
  }, [entries]);

  // Add a new entry
  const addEntry = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  // Delete an entry by ID
  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  // Edit an existing entry by ID
  const editEntry = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  };

  return (
    <JournalContext.Provider
      value={{ entries, addEntry, deleteEntry, editEntry }}
    >
      {children}
    </JournalContext.Provider>
  );
};
