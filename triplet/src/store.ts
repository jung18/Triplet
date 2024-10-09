import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import naviSlice from './features/navigation/naviSlice';
import ongoingTravelSlice from './features/travel/ongoingTravelSlice';
import upcomingTravelSlice from './features/travel/upcomingTravelSlice';
import completedTravelSlice from './features/travel/completedTravelSlice';
import snsTravelSlice from './features/travel/snsTravelSlice';
import sharedTravelSlice from './features/travel/shareTravelSlice';
import userInfoSlice from './features/user/userInfoSlice';
import snsTravelFilterSlice from './features/travel/snsTravelFilterSlice';
import deleteTravelSlice from './features/travel/deleteTravelSlice';

// 스토어 생성
const store = configureStore({
  reducer: {
    auth: authSlice,
    navi: naviSlice,
    ongoingTravel: ongoingTravelSlice,
    upcomingTravel : upcomingTravelSlice,
    completedTravel : completedTravelSlice,
    snsTravel : snsTravelSlice,
    userInfo : userInfoSlice,
    sharedTravel : sharedTravelSlice,
    filterTravel : snsTravelFilterSlice,
    deleteTravel : deleteTravelSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
