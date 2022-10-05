import { Scorer } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, playerSlice } from "./state";

export interface AppStore {
  player: Scorer[]
  favorites: Scorer[]
}

export default configureStore<AppStore>({

  reducer: {
    player: playerSlice.reducer,
    favorites: favoritesSlice.reducer
  }
})