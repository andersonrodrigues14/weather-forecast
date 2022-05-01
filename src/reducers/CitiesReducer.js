const inicialState = {
    list:[]
}

export default (state = inicialState, action) => {
    let newList = [ ...state.list ];

    switch(action.type) {
        case 'ADD_CITY':
            newList.push({
                place_id: action.payload.place_id,
                city: action.payload.city, 
                country: action.payload.country,
                lat: action.payload.lat,
                lon: action.payload.lon,
            });    
        break;
    }

    return { ...state, list: newList };
}