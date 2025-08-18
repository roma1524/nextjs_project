import React from 'react';
import useCharacters from "@/assets/hooks/useCharacters";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import {getLayout} from "@/components/Layout/Layout";


function Characters() {

    const characters = useCharacters()

    return (
        <>
            <HeadMeta title="Characters" />
                {characters && characters.map(ch => (
                    <CharacterCard character={ch} key={ch.id} />
                ))}
        </>
    );
};

Characters.getLayout = getLayout
export default Characters