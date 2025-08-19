import {useEffect, useState} from 'react';
import axios from "axios";
import {Nullable} from "@/assets/types";
import {CharacterType} from "@/assets/hooks/useCharacters";
import {useRouter} from "next/router";

export default function useCharacter  () : Nullable<CharacterType> {

    const [character, setCharacter] = useState<Nullable<CharacterType>>(null)

    const router = useRouter();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${router.query.id}`).then(res => setCharacter(res.data))
    }, [])

    return character
};