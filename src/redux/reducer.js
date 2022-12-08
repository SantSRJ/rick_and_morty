const initialState = {
    myFavorites: [],
    allCharacters: []
    }
  
  export default function rootReducer(state = initialState, action) {
    switch(action.type) {
      case "ADD_FAVORITE":
        return {
          myFavorites: [...state.allCharacters, action.payload],
          allCharacters: [...state.allCharacters, action.payload]
        }
      case "REMOVE_FAVORITE":
        return {
          myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
        }
      case "FILTER":
          const filterCharacters = action.payload === "All" 
          ? state.allCharacters 
          : state.allCharacters.filter(char => char.gender === action.payload);
          
          return {
            ...state,
            myFavorites: filterCharacters
          }
      case "ORDER":
        const sortedCharacters = state.allCharacters;
        if(action.payload === "Ascendente") {
          sortedCharacters.sort((a,b) => a.id - b.id);
        } else {
          sortedCharacters.sort((a,b) => b.id - a.id);
        }
        return {
          ...state,
          myFavorites: sortedCharacters,
        };
      default:
        return state;
    };
  }