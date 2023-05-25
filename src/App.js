import AddAppointment from "./components/AddAppointment";
import AddInfo from "./components/AddInfo";
import Search from "./components/Search";
import './index.css';
import { BiArchive } from "react-icons/bi";
import { useCallback, useEffect, useState} from "react";


function App() {
  const [appoint,setAppoint] = useState([]);
  const [sortBy,setSortBy] = useState('petName');
  const [query,setQuery] = useState('');

  // useCallBack
  const filterAppoint = useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>setAppoint(data))
  },[])

  // useEffect
  useEffect(filterAppoint,[filterAppoint])

  // sort()함수
  const filterSort = appoint.filter((item)=>{
    return item.petName.toLowerCase().includes(query.toLowerCase()) ||
           item.ownerName.toLowerCase().includes(query.toLowerCase())
  })
  .sort((a,b)=>{
    return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
  })

  return (
    <article>
      <h3><BiArchive/>예약 시스템</h3>
      <AddAppointment 
        onSendData={(myData)=>setAppoint([...appoint,myData])}
        lastId = {appoint.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max, 0)}
        // lastId={appoint.reduce((max,itemIs)=>{
        //                 Number(itemIs.id) > max ? Number(itemIs.id) : max
        //                 ,0})}
                        />
      <Search sortBy={sortBy}
              onChangeSort={(mySort)=>setSortBy(mySort)}
              query={query}
              onQueryChange={(myQuery)=>{setQuery(myQuery)}}/>
      <div id="list">
        <ul>
          {
            filterSort.map((item)=>
            <AddInfo key={item.id} 
                     appointment={item}
                     onDelete={(myId)=>
                      {return setAppoint(appoint.filter(
                        (item)=>(item.id !== myId)))}}/>
                     )
          }
        </ul>
      </div>
    </article>
  );
}

export default App