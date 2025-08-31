import React from 'react';
import {getLayout} from "@/components/Layout/Layout";

const NotFound = () => {
    return (
        <>
            <div><h1>404 Not Found</h1></div>
        </>
    )
}
NotFound.getLayout = getLayout
export default NotFound