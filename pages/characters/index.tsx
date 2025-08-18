import React from 'react';
import useCharacters from "@/assets/hooks/useCharacters";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import CharacterCard from "@/components/CharacterCard/CharacterCard";


export default function Characters() {

    const characters = useCharacters()

    return (
        <>
            <HeadMeta title="Characters" />
            <main /*className={`${styles.main} ${inter.className}`}*/>
                {characters && characters.map(ch => (
                    <CharacterCard character={ch} key={ch.id} />
                ))}
            </main>
        </>
    );
};

