
const Edit = ({ contact, handleEditClick, handleDeleteClick, state }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.date}</td>
      <td>{contact.month}</td>
      <td>{contact.year}</td>
      <td>
        <button
          type="button" disabled={state.disabled}
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button"   onClick={() => handleDeleteClick(contact.id)} /*disabled={true}*/>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Edit;

