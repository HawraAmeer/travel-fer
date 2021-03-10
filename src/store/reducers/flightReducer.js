import * as types from "../actions/types";

const initialState = {
  flights: [
    {
      id: 1,
      departureDate: "2021-2-1",
      departureTime: "11:00",
      arrivalDate: "2021-2-1",
      arrivalTime: "11:00",
      economySeats: 120,
      businessSeats: 13,
      dep_loc: "bahrain",
      arrival_loc: "dubai",
      price: 50,
    },
    {
      id: 2,
      departureDate: "2021-2-1",
      departureTime: "11:00",
      arrivalDate: "2021-2-1",
      arrivalTime: "11:00",
      economySeats: 120,
      businessSeats: 13,
      dep_loc: "dubai",
      arrival_loc: "bahrain",
      price: 50,
    },
  ],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FLIGHT:
      const { newFlight } = action.payload;

      return {
        ...state,
        flights: [...state.flights, newFlight],
      };

    case types.UPDATE_FLIGHT:
      const { updatedFlight } = action.payload;
      return {
        ...state,
        flights: state.flights.map((flight) =>
          flight.id === updatedFlight.id ? updatedFlight : flight
        ),
      };

    case types.FETCH_FLIGHT:
      return {
        ...state,
        flights: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
