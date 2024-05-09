import Navbar from '@/components/common/Navbar';
import { useState } from 'react';

const ReservationPage = () => {
     const [date, setDate] = useState('');
     const [startTime, setStartTime] = useState('');
     const [endTime, setEndTime] = useState('');

     const handleDateChange = (e) => {
          setDate(e.target.value);
     };

     const handleStartTimeChange = (e) => {
          setStartTime(e.target.value);
     };

     const handleEndTimeChange = (e) => {
          setEndTime(e.target.value);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
     };

     return (
          <div className="min-h-screen bg-white">
               <Navbar isAuthenticated={true} />
               <div className="flex flex-col items-center">
                    <h1 className="mt-20 mb-4 text-2xl font-bold ">Réservation de salle</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xl p-4 mt-10 bg-gray-500 rounded-lg shadow-md">
                         <div className="mb-4">
                              <label htmlFor="date" className="block mb-1 font-medium">
                                   Date :
                              </label>
                              <input
                                   type="date"
                                   id="date"
                                   value={date}
                                   onChange={handleDateChange}
                                   className="w-full px-3 py-2 border border-gray-300 rounded"
                              />
                         </div>
                         <div className="mb-4">
                              <label htmlFor="startTime" className="block mb-1 font-medium">
                                   Heure de début :
                              </label>
                              <input
                                   type="time"
                                   id="startTime"
                                   value={startTime}
                                   onChange={handleStartTimeChange}
                                   className="w-full px-3 py-2 border border-gray-300 rounded"
                              />
                         </div>
                         <div className="mb-4">
                              <label htmlFor="endTime" className="block mb-1 font-medium">
                                   Heure de fin :
                              </label>
                              <input
                                   type="time"
                                   id="endTime"
                                   value={endTime}
                                   onChange={handleEndTimeChange}
                                   className="w-full px-3 py-2 border border-gray-300 rounded"
                              />
                         </div>
                         <button
                              type="submit"
                              className="px-4 py-2 bg-blue-500 rounded text-gray-00 hover:bg-blue-600"
                         >
                              Réserver
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default ReservationPage;