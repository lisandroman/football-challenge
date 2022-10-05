import { Scorer } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./state/favorites";
import { playerSlice } from "./state/player";

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