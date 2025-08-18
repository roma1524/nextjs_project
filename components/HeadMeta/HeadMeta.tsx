import React from 'react';
import Head from "next/head";

type PropsType = {
    title?: string;
    description?: string;
}

export function HeadMeta(props: PropsType) {

    const {title, description} = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description || 'Characters page description'}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href='/favicon.ico' />
        </Head>
    );
}