// store/userStore.ts

import { create } from 'zustand'

interface UserState {
  userInfo: any | null;
  isConnected: boolean;
  setUserInfo: (info: any) => void;
  setConnected: (connected: boolean) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  isConnected: false,
  setUserInfo: (info) => set({ userInfo: info }),
  setConnected: (connected) => set({ isConnected: connected }),
  clearUser: () => set({ userInfo: null, isConnected: false }),
}))
