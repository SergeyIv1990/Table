
const TableHeader = ({sorting, imgFullName, imgDate, imgMonth, imgYear}) => {
    return (
        <thead>
            <tr >
                <th className="Header" onClick={() => sorting('fullName')}>Name
                    <img src={imgFullName} alt=""/>
                </th>
                <th className="Header"  onClick={() => sorting('date')}>Date
                
                    <img src={imgDate} alt=""/>
                </th>
                <th className="Header" onClick={() => sorting('month')}>Month
                
                    <img src={imgMonth} alt=""/>
                </th>
                <th className="Header" onClick={() => sorting('year')}>Year
                
                <img src={imgYear} alt=""/>
                </th>
                <th >Actions</th>
            </tr>
        </thead>
    )
}

export default TableHeader;