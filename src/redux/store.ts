import { Scorer } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, scorerSlice } from "./state";

export interface AppStore {
  player: Scorer[]
  favorites: Scorer[]
}

export default configureStore<AppStore>({

  reducer: {
    player: scorerSlice.reducer,
    favorites: favoritesSlice.reducer
  }


})