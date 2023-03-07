import { useState, useMemo} from "react";
import { nanoid } from "nanoid";
import "./Teble.css";
import data from "../mock-data.json";
import Add from "./part/Add";
import TableHeader from "./part/TableHeader";
import TableBody from "./part/TableBody";
import { v4 } from 'uuid';
import Search from "./part/Search";
import Sort from "./part/Sort";
import Pagination from "./part/changes/Pagination.jsx";

const Teble = () => {
    let newData = data.map(item => {
        const container = {};
        container.id = nanoid();
        container.fullName = item.fullName;
        container.date = item.date;
        container.month = item.month;
        container.year = item.year;
        container.key = v4 ();
       return container;
    })
  
  const [contacts, setContacts] = useState(newData);
  const [contacts2, setContacts2] = useState(newData);

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    date: "",
    month: "",
    year: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    date: "",
    month: "",
    year: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
    
  };
// Add
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
 };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      date: addFormData.date,
      month: addFormData.month,
      year: addFormData.year,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    setContacts2(newContacts)
    document.getElementById("uniqueID").value='';
    document.getElementById("uniquID").value='';
    document.getElementById("uniqID").value='';
    document.getElementById("uniID").value='';
    };
//edit 
  const [state, setState] = useState({
    disabled: false,
  });

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      date: editFormData.date,
      month: editFormData.month,
      year: editFormData.year,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
    state.disabled=false
    };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      fullName: contact.fullName,
      date: contact.date,
      month: contact.month,
      year: contact.year,
    };
    setEditFormData(formValues);
    state.disabled=true
  };

  const handleCancelClick = () => {
    setEditContactId(null);
    state.disabled=false
  };
// delete
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
    setContacts2(newContacts);
  };

  const [searchTerm, setsearchTerm] = useState("");
 
 // sort, filter, pagination

 const sortTeble = useMemo( () => {
  return contacts.filter(val => val.fullName.toLowerCase().includes(searchTerm.toLowerCase())||
  val.month.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
}, [searchTerm, contacts])

const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(5);

const lastPostIndex = currentPage * postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage;
const currentPosts = sortTeble.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="teble-container">
          <Search setsearchTerm={setsearchTerm}/>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <TableHeader />
          <TableBody currentPosts={currentPosts}
           contacts2={contacts2}  editContactId={editContactId}
           handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} 
           handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} 
           editFormData={editFormData} state={state} />
        </table>
      </form>
      <Pagination setPostsPerPage={setPostsPerPage} totalPosts={contacts.length}
      postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
       <Sort contacts={contacts} contacts2={contacts2} setContacts={setContacts}/>
       <Add handleAddFormSubmit={handleAddFormSubmit} handleAddFormChange={handleAddFormChange} />
    </div>
  );
};

export default Teble;