import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface TravelState {
    travelId: number;
    title: string;
    startDate: Date;
    endDate: Date;
    image: string;
    countryName: string;
    countryId: number;
    currency: string;
    memberCount: number;
    totalBudget: number;
    usedBudget: number;
    status: boolean;
    shareStatus: boolean;
    shared: boolean;
}

interface TravelArrayState {
    travels: TravelState[];
}

const initialState: TravelArrayState = {
    travels: [],
};

const upcomingTravelSlice = createSlice({
    name: 'upcomingTravels',
    initialState,
    reducers: {
        // 백엔드에서 배열로 여행 데이터를 받아 배열에 추가하는 액션
        addTravels: (state, action: PayloadAction<TravelState[]>) => {
            state.travels = [...state.travels, ...action.payload]; // 기존 배열에 새로운 배열을 추가
        },
        // 기존 배열을 새로운 배열로 교체하는 액션
        setTravels: (state, action: PayloadAction<TravelState[]>) => {
            state.travels = action.payload; // 기존 travels를 새로운 배열로 교체
        },
    },
});

export const selectTravelByTitleId = (state : RootState, titleId : number) => {
    return state.upcomingTravel.travels.find(travel => travel.travelId === titleId);
};
export const { addTravels, setTravels } = upcomingTravelSlice.actions;
export default upcomingTravelSlice.reducer;
