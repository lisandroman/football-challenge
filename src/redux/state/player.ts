import { LocalStorageTypes, Scorer } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Scorer[] = [];


export const playerSlice = createSlice({
  name: 'player',
  initialState: getLocalStorage(LocalStorageTypes.PLAYER) ? JSON.parse(getLocalStorage(LocalStorageTypes.PLAYER) as string) : initialState,

  reducers: {
    addPlayer: (state, action) => {
      setLocalStorage(LocalStorageTypes.PLAYER, state)
      return action.payload
    }
  }
}) 

export const { addPlayer } = playerSlice.actions;