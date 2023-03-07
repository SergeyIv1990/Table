
const ChangesPage = ({editFormData,  handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input required
          type="text"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input required
          type="text"
          placeholder="Enter a Date..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input required
          type="text"
          placeholder="Enter a Month..."
          name="month"
          value={editFormData.month}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input required
          type="Year"
          placeholder="Enter Year..."
          name="year"
          value={editFormData.year}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ChangesPage;
