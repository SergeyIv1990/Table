import { useState} from "react";

const Sort = ({value, contacts, contacts2, setContacts})=>{
    const [selectedSort, setSelectedSort] = useState();
    
    const defaultValue="Сортировка"
    
    const sortPosts = (sorted) => {
        if (sorted==='original'){setContacts(contacts2)}
        else{
        setSelectedSort(sorted)
        setContacts([...contacts].sort((a,b)=> a[sorted].localeCompare(b[sorted])))
        }
      }
      
    const options=([
        {value:'original', name:'Original'},
        {value:'fullName', name:'Name'},
        {value:'date', name:'Date'},
        {value:'month', name:'Month'},
        {value:'year', name:'Year'},
      ])
    return(
        <div>
            <h1>Sort By</h1>
        <select
        value={value}
        onChange={event => sortPosts(event.target.value)}
            >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
            </div>
    )
            }
            
export default Sort;
