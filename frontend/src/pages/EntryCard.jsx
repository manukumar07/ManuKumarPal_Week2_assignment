import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const EntryCard = ({ entry, onDelete }) => {
  return (
    <>
      <div
        className="w-full sm:max-w-md lg:max-w-lg mx-auto p-6 mb-6 bg-[#F7F7FF] shadow-lg rounded-md"
        style={{ marginTop: "10px" }}
      >
        <h3 className="text-2xl font-bold mb-3 text-[#3C3C3C]">
          {entry.title}
        </h3>
        <p className="text-base mb-2 text-[#3C3C3C]">
          Location: {entry.location}
        </p>
        <p className="text-base mb-2 text-[#3C3C3C] ">Date: {entry.date}</p>
        <p className="text-base mb-4 text-[#3C3C3C]">{entry.description}</p>
        <div className="flex justify-between">
          <Link
            to={`/edit-entry/${entry.id}`}
            className="flex items-center text-[#F78154] hover:text-[#2D5F5D] transition duration-200 font-bold"
          >
            <FaEdit className="mr-1" />
            Edit
          </Link>
          <button
            onClick={onDelete}
            className="flex items-center text-[#F78154] hover:text-[#2D5F5D] transition duration-200 font-bold"
          >
            <FaTrashAlt className="mr-1" />
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EntryCard;
