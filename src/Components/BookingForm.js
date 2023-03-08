import React from 'react'
import { useState } from 'react'
import "./BookingForm.css"
function Form(props) {
    const [date, setDate] =useState();
    const [time, setTime]= useState("00:00");
    const [guest, setGuest]= useState();
    const [occasion, setOccasion] = useState("Birthday");
    const [isVisible, setIsVisible] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Successfully Booked");
      };
  return (
    <div className={`Form-container ${isVisible ? 'visible' : 'hidden'}`}>
    <div className="Form-header">
        <h2>Book Your Table</h2>
        <button className="Form-close" onClick={() => props.setIsVisible(false)}>
          &times;
        </button>
    </div>
    <form onSubmit={handleSubmit}>
        <fieldset>
            <div className='Field'>
                <label>Date : </label>
                <input
                 value={date}
                 onChange={(e)=>{
                    setDate(e.target.value);
                 }}
                 type="date"
                 placeholder='Date'
                 required
                />
            </div>
            <div className='Field'>
                <label>Time :</label>
                 <select value={time} onChange={(e)=>{setTime(e.target.value)}}> 
                    <option >Select Time</option>
                    <option >17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div className='Field'>
                <label>Guests : </label>
                <input
                 value={guest}
                 onChange={(e)=>{
                    setGuest(e.target.value);
                 }}
                 type="number"
                 placeholder='Number of Guests'
                 min={1}
                 max={20}
                 required
                />
            </div>
            <div className='Field'>
                <label>Occasion : </label>
                 <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                 <option value="Ocassion">Ocassion</option>
                 <option value="Birthday">Birthday</option>
                 <option value="Annivarsary">Annivarsary</option>
               </select>
            </div>
            <button className='SubmitForm' type="submit">
                Submit
            </button>
        </fieldset>
    </form>

    </div>
  )
}

export default Form