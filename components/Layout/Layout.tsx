import React, {PropsWithChildren, ReactElement} from 'react';
import {NextPage} from "next";
import NavBar from "@/components/NavBar/NavBar";

export const Layout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <main /*className={`${styles.main} ${inter.className}`}*/>
            <NavBar/>
            {children}
        </main>
    );
}

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
}