import { memo } from 'react';

import Notice from './components/Notice';
import Guide from './components/Guide';
import Warning from './components/Warning';
import Search from './components/Search';

const Content = memo(function Content() {
    return (
        <section className="w-screen overflow-y-auto ">
            <Notice />
            <Guide />
            <Warning />
            <Search />
        </section>
    );
});

export default Content;
