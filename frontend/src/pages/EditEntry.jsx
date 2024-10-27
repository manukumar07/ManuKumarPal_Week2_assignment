import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JournalContext } from "../context/JournalContext";

const EditEntry = () => {
  const { id } = useParams();
  const { entries, editEntry } = useContext(JournalContext);
  const [entry, setEntry] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const entryToEdit = entries.find((e) => e.id === id);
    if (entryToEdit) {
      setEntry(entryToEdit);
    }
  }, [id, entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editEntry({ ...entry });
    navigate("/my-journal");
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-4 mb-2 bg-[#F7F7FF] rounded-md shadow-md">
      <h2 className="text-2xl font-extrabold mb-4 text-[#3C3C3C] text-center ">
        Edit a Journal Entry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={entry.title}
          onChange={(e) => setEntry({ ...entry, title: e.target.value })}
          required
          className="w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154]"
          placeholder="Title"
        />
        <input
          type="text"
          value={entry.location}
          onChange={(e) => setEntry({ ...entry, location: e.target.value })}
          required
          className="w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154]"
          placeholder="Location"
        />
        <input
          type="date"
          value={entry.date}
          onChange={(e) => setEntry({ ...entry, date: e.target.value })}
          required
          className="w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154]"
        />
        <textarea
          value={entry.description}
          onChange={(e) => setEntry({ ...entry, description: e.target.value })}
          required
          className="w-full p-2 border border-[#2D5F5D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F78154]"
          placeholder="Description"
        />
        <button
          type="submit"
          className="w-full p-2 bg-[#F78154] text-white rounded-md hover:bg-[#2D5F5D] transition-colors"
        >
          Edit Entry
        </button>
      </form>
    </div>
  );
};

export default EditEntry;
