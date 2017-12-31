import schedule from './data/schedule.json';

export function fetchSlots() {
    return schedule.available_slots
    .map(x => ({
        [x.date]: x.date_slots.reduce((r, d) => ({
            ...r,
            [d.hour]: d.hour_slots.map( x => ({
                id: x[Object.keys(x)[0]],
                name: Object.keys(x)[0]
             }))
        }), {})
    })).reduce((r, v) => {
        return {
            ...r,
            ...v
        }
    }, {});
}
