export default function weather() {
    return fetch("http://api.weatherapi.com/v1/current.json?key="+ "2349e9c62b844d33b17135010232203" +"&q=49.6011,11.0533&lang=de")
            .then(response => response.json());
}// this isn't very secure...