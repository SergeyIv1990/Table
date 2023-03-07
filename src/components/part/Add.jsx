import React from "react";

const Add = ({handleAddFormSubmit, handleAddFormChange, }) => {
    return (
    <div>
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit} >
        <input id="uniqueID"
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
        />
        <input id="uniquID"
            type="text"
            name="date"
            required="required"
            placeholder="Enter a Date..."
            onChange={handleAddFormChange}
        />
        <input id="uniqID"
            type="text"
            name="month"
            required="required"
            placeholder="Enter a Month..."
            onChange={handleAddFormChange}
        />
        <input id="uniID"
            type="text"
            name="year"
            required="required"
            placeholder="Enter a Year..."
            onChange={handleAddFormChange}
        />
        <button  type="submit">Add</button>
        </form>
    </div>
    )
}

export default Add;