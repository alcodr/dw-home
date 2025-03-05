import { IndexLayout } from '@/components/layouts';
import { Outlet } from 'react-router';


export const ErrorBoundary = () => {
    return <div>Something went wrong!</div>;
};

const IndexRoot = () => {
    return (
        <IndexLayout>
            <Outlet />
        </IndexLayout>
    );
};

export default IndexRoot;
