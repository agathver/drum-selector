import React from 'react';
import { fetchSchedule } from './data';
import Roller from './Roller';

const ReservationPage = ({ slots, selectedDate, selectedHour, selectedSlot,
    onSelectedDateChanged, onSelectedHourChanged, onSelectedSlotChanged }) =>
    (
        <div className="ReservationPage" style={{ 'margin': '2em' }}>
            <Roller items={Object.keys(slots)} selectedItem={selectedDate} onChange={onSelectedDateChanged} />
            {selectedDate && (
                Object.keys(slots[selectedDate]).length > 0 ?
                <Roller items={Object.keys(slots[selectedDate])} selectedItem={selectedHour} onChange={onSelectedHourChanged} />
                : <p style={{'color': 'red' }}>No slots available for this date</p>
            )}
            {selectedDate && selectedHour && <Roller items={slots[selectedDate][selectedHour]} selectedItem={selectedSlot} onChange={onSelectedSlotChanged} />}
        </div>
    );

export default ReservationPage;