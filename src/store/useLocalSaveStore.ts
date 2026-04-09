import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LocalSaveItem } from '@/types';

interface LocalSaveStore {
    localSaves: LocalSaveItem[];
    addToSave: (item: Omit<LocalSaveItem, 'addedAt'>) => void;
    clearAllLocal: () => void;
}

export const useLocalSaveStore = create<LocalSaveStore>()(
    persist(
        (set, get) => ({
            localSaves: [],

            addToSave: (item) => {
                const current = get().localSaves;
                const exists = current.some((fav) => fav.id === item.id);

                if (exists) return;

                const newItem = {
                    ...item,
                } as LocalSaveItem;

                let newList = [newItem, ...current]; 

                // Chỉ giữ 20 phim vừa xem gần nhẩt
                if (newList.length > 20) {
                    newList = newList.slice(0, 20);    
                }

                set({ localSaves: newList });
            },

            // Xóa tất cả
            clearAllLocal: () => {
                set({ localSaves: [] });
            },

        }),

        {
            name: 'only2m-watched',
        }
    )
);