import React from 'react';
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div><h1>404 Not Found</h1></div>
            <Link href={'/'}/>
        </>
    )
}
NotFound.getLayout = getLayout
export default NotFound