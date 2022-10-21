import apiFetch from "./api-fetch";

export function getTrips() {
  return apiFetch("/trips").then((data) => {
    return data;
  });
}
export function showTrip(id) {
  return apiFetch("/trips/"+id).then((data) => {
    return data;
  });
}

export function createTrip(tripData) {
  return apiFetch("/trips", { body: tripData }).then((data) => {
    return data;
  });
}