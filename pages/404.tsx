import React from 'react';
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
        <div>404 Not Found</div>
        <Link href={'/'}/>
        </>
    );
}

NotFound.getLayout = getLayout
export default NotFound