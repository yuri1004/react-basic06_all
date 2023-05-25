import { useState } from 'react';
import {BiCalendarPlus} from 'react-icons/bi';

function AddWrite({toggle,formData,setFormData,formPublish}){
    if(!toggle){
      return null;
    }
    return(
        <>
        <ul>
                <li>
                 <label htmlFor="userName">집사명</label>
                 <input id="userName" 
                        type="text"
                        onChange={(e)=>{setFormData({...formData,ownerName:e.target.value})}}/>
                </li>
                <li>
                 <label htmlFor="userChildren">애기명</label>
                 <input id="userChildren" 
                        type="text"
                        onChange={(e)=>{setFormData({...formData,petName:e.target.value})}}/>
                </li>
                <li>
                 <label htmlFor="userDate">예약일</label>
                 <input id="userDate" 
                        type="date"
                        onChange={(e)=>{setFormData({...formData,aptDate:e.target.value})}}/>
                </li>
                <li>
                 <label htmlFor="userTime">예약시간</label>
                 <input id="userTime" 
                        type="time"
                        onChange={(e)=>{setFormData({...formData,aptTime:e.target.value})}}/>
                </li>
                <li>
                 <label htmlFor="userMemo">기타설명</label>
                 <textarea id="userMemo"
                           onChange={(e)=>{setFormData({...formData,aptNotes:e.target.value})}}></textarea>
                </li>
            </ul>
            <p>
                <input type='submit'
                       onClick={formPublish}/>
            </p></>
    )
}



export default function AddAppointment({onSendData,lastId}){ 
    const [toggle,setToggle] = useState(false);

    const resetData = {
        petName: "",
        ownerName: "",
        aptNotes: "",
        aptDate: "",
        aptTime: ""
    }
    const [formData,setFormData] = useState(resetData);
    
    // 보내는 함수
    function formPublish(){
        // 객체데이터 완성필요
        const allData = {
            id: lastId + 1,
            petName: formData.petName,
            ownerName: formData.ownerName,
            aptNotes: formData.aptNotes,
            aptDate: formData.aptDate + '' + formData.aptTime
        }
        // 데이터 보내기
        onSendData(allData);
        setToggle(!toggle);
        // 데이터 reset
        setFormData(resetData);
    }

    return(
        <div id="appoint">
            <h4 onClick={()=>setToggle(!toggle)}>예약하기
                <BiCalendarPlus/>
            </h4>
            <AddWrite toggle={toggle}
                      formData={formData}
                      setFormData={setFormData}
                      formPublish={formPublish}/>
        </div>
    )
}