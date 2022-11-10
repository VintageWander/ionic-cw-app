import create from "zustand";
import TripModel from "./model/Trip";
import { persist } from "zustand/middleware";

interface TripState {
  trips: TripModel[];
  addTrip: (trip: TripModel) => void;
  removeTrip: (name: String) => void;
}

export const useStore = create<TripState>()(
  persist((set) => ({
    trips: [],
    addTrip: (trip: TripModel) => {
      set(({ trips }) => ({
        trips: [trip, ...trips],
      }));
    },
    removeTrip: (name: String) => {
      set(({ trips }) => ({
        trips: trips.filter((trip) => trip.tripName != name),
      }));
    },
  }))
);
