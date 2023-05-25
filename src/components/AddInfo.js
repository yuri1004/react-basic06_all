import {BiTrash} from 'react-icons/bi';


export default function AddInfo({appointment,onDelete}){
    // console.log(appointment)
    return(
        <li>
            <dl>
                <dt>{appointment.petName}</dt>
                <dd>
                    <dfn>{appointment.ownerName}</dfn>
                </dd>
                <dd className="desc">{appointment.aptNotes}</dd>
                <dd className="date">{appointment.aptDate}</dd>
            </dl>
            <p>
                <button type="button" onClick={()=>onDelete(appointment.id)}>
                    <BiTrash/>
                </button>
            </p>
        </li>
    )
}