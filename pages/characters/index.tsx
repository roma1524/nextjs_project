import React from 'react';
import useCharacters from "@/assets/hooks/useCharacters";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";


function Characters() {

    const characters = useCharacters()

    return (
        <>
            <HeadMeta title="Characters" />
                {characters && characters.map(ch => (
                    <Link href={`/characters/${ch.id}`} key={ch.id}>
                        <CharacterCard character={ch}  />
                    </Link>
                ))}
        </>
    );
};

Characters.getLayout = getLayout
export default Characters