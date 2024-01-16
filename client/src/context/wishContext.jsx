import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const wishlistContex = createContext()

export const WishProvider = ({ children }) => {
    const [wish, setWish] = useLocalStorage('wish')
    function handlewish(item) {
        const index=wish.findIndex(x=>x._id===item._id)
        if (index===-1) {
            setWish([...wish,item])
            return
        }
        setWish(wish.filter(x=>x._id!==item._id))
    }

    const data = [wish, setWish,handlewish]

    return (
        <wishlistContex.Provider value={data}>
            {children}
        </wishlistContex.Provider>
    )
}
export const useWish=()=>useContext(wishlistContex)