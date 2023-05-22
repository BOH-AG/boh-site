import dayjs from "dayjs";

export function records(id, param = "") {
    return fetch("https://db.theboh.de/api/collections/"+ id +"/records/" + param)
            .then(response => response.json());
}


export function fixDate(date) {
    return date.replace(" ", "T").replace(".", "").slice(0, -4);
}

let range = [/*%min*/10, 60/*%max*/];
export function percentify(val) {
    return (val-range[0]+0.1)/(range[1]*0.01);
}

export function relativeTime(date) { // pass date as string
    let delta = dayjs().diff(dayjs(date), "seconds"); //-3600 > correct for utc+1 time difference
    //console.log(delta)
    if (delta<45) {
        return "vor "+delta+" Sekunden";
    } else if (delta<90) {
        return "vor einer Minute";
    } else if (delta<2700) {
        return "vor "+ Math.round(delta/60) + " Minuten";
    } else if (delta<5400) {
        return "vor einer Stunde";
    } else if (delta<79200) {
        return "vor "+ Math.round(delta/3600) +" Stunden";
    } else if (delta<129600) {
        return "vor einem Tag";
    } else if (delta<2246400) {
        return "vor "+ Math.round(delta/86400) +" Tage";
    } else if (delta<3974400) {
        return "vor einem Monat";
    } else /*if (delta<28512000)*/ {
        return "vor "+ Math.round(delta/2592000) +" Monate";
    }
}