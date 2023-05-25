import { useState } from "react"
import { BiSearch,BiCaretDown,BiCheck } from "react-icons/bi"

function DropDown({toggleTo,sortBy,onChangeSort}){
    if(toggleTo){
        return null;
    }
    return(
        <ul>
            <li onClick={()=>{onChangeSort('petName')}}>애기이름
                {sortBy === 'petName' && <BiCheck/>}
            </li>
            <li onClick={()=>{onChangeSort('ownerName')}}>예약자명
                {sortBy === 'ownerName' && <BiCheck/>}
            </li>
            <li onClick={()=>{onChangeSort('aptDate')}}>날짜
                {sortBy === 'aptDate' && <BiCheck/>}
            </li>
        </ul>
    )
}





export default function Search({sortBy,onChangeSort,query,onQueryChange}){
    const [toggleTo,setToggleTo] = useState(true);

    return(
        <div id="search">
            <p>
                <BiSearch/>
                <input type="text"
                       value={query} 
                       onChange={(e)=>{onQueryChange(e.target.value)}}/>
                <button type="button" 
                        onClick={()=>setToggleTo(!toggleTo)}>
                <BiCaretDown/>
                </button>
            </p>
            <DropDown toggleTo={toggleTo} 
                      sortBy={sortBy}
                      onChangeSort={onChangeSort}/>
        </div>
    )
}