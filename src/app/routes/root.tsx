import { IndexLayout } from '@/components/layouts';
import ReactLenis from 'lenis/react';
import { useEffect } from 'react';
import { Outlet } from 'react-router';


export const ErrorBoundary = () => {
    return <div>Something went wrong!</div>;
};

const lenisOptions = {
    wheelMultiplier: 0.5,
    touchMultiplier: 0.5
}

const IndexRoot = () => {
    return (
        <ReactLenis root options={lenisOptions}>
            <IndexLayout>
                <Outlet />
            </IndexLayout>
        </ReactLenis>
    );
};

export default IndexRoot;
