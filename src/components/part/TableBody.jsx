import { Fragment} from "react";
import ChangesPage from "./changes/ChangesPage";
import Edit from "./changes/Edit";

const TableBody = ({editContactId, handleEditFormChange, handleCancelClick, 
  handleEditClick, handleDeleteClick, editFormData, state, currentPosts}) => {
    return (                 
          <tbody>
            {currentPosts.map((contact, index) => (
              <Fragment key={index}>
                {editContactId === contact.id 
                ? ( <ChangesPage
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                    />) 
                : (<Edit 
                        state={state}
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                    />)
                }
              </Fragment>
            ))}
          </tbody>
    )
}
export default TableBody;