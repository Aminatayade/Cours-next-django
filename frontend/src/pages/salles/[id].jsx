import Navbar from '@/components/common/Navbar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ReservationPage = () => {
     const [date, setDate] = useState('');
     const [startTime, setStartTime] = useState('');
     const [endTime, setEndTime] = useState('');
     const [paymentMethod, setPaymentMethod] = useState('');

     const router = useRouter();
     const { id } = router.query;

     const handleDateChange = (e) => {
          setDate(e.target.value);
     };

     const handleStartTimeChange = (e) => {
          setStartTime(e.target.value);
     };

     const handleEndTimeChange = (e) => {
          setEndTime(e.target.value);
     };

     const handlePaymentMethodChange = (e) => {
          setPaymentMethod(e.target.value);
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          const currentDate = new Date();
          const selectedDate = new Date(date);
          if (selectedDate < currentDate) {
               toast.error('La date de réservation doit être dans le futur.');
               return;
          }

          const reservationData = {
               date_reservation: date,
               date_debut: startTime,
               date_fin: endTime,
               moyen_paiement: paymentMethod,
               client: 1,
               salle: +id
          };

          try {
               const response = await fetch('http://localhost:8000/gestions/reservations/', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reservationData)
               });

               const result = await response.json();

               if (response.ok) {
                    console.log('Réservation réussie:', result);
                    toast.success('Réservation enregistrée avec succès!');
                    updateRoomAvailability();
               } else {
                    throw new Error(result.error);
               }
          } catch (error) {
               console.error(error);
               toast.error(error.message);
          }

          router.push('/salles');
     };


     const updateRoomAvailability = async () => {
          try {
               const updateResponse = await fetch(`http://localhost:8000/gestions/salles/${id}/`, {
                    method: 'PATCH',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ disponibilite: false })
               });

               const result = await updateResponse.json();


               if (!updateResponse.ok) {
                    throw new Error(result.error);
               }
               toast.info('Disponibilité de la salle mise à jour');
          } catch (error) {
               console.error(error);
               toast.error(error);
          }
     };

     return (
          <div className="min-h-screen bg-white">
               <Navbar isAuthenticated={true} />
               <div className="flex flex-col items-center">
                    <h1 className="mt-10 mb-4 text-2xl font-bold ">Réservation de salle</h1>
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
                         <div className="mb-4">
                              <label htmlFor="paymentMethod" className="block mb-1 font-medium">Moyen de paiement :</label>
                              <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange} className="w-full px-3 py-2 border border-gray-300 rounded">
                                   <option value="">Sélectionnez un moyen de paiement</option>
                                   <option value="wave">Wave</option>
                                   <option value="orangeMoney">Orange Money</option>
                                   <option value="cash">Liquidité</option>
                              </select>
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