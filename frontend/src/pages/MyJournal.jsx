import { useContext, useState, useEffect } from "react";
import { JournalContext } from "../context/JournalContext";
import EntryCard from "./EntryCard";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const MyJournal = () => {
  const { entries, deleteEntry } = useContext(JournalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEntries = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadEntries);
  }, [entries]);

  if (loading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-center my-6">
        Welcome to My Travel Journal
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2 ">
        {entries.length === 0 ? (
          <p className="text-center">
            No entries available.
            <Link to="/add-entry" className="font-bold">
              Click Add Entry button!
            </Link>
          </p>
        ) : (
          entries.map((entry) => (
            <EntryCard
              key={entry.id}
              entry={entry}
              onDelete={() => deleteEntry(entry.id)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default MyJournal;
