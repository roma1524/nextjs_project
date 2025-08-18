import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Nullable} from "@/assets/types";

export default function useCharacters  () : Nullable<CharacterType[]> {

    const [characters, setCharacters] = useState<Nullable<CharacterType[]>>(null)

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then(res => setCharacters(res.data.results))
    }, [])

    return characters
};

export type CharacterType = {
    id: number
    name: string
    image: string
}