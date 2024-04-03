import Notice from './Components/Notice';
import NickName from './Components/NickName';

export default function Content({ children }) {
    return (
        <main className="flex-1 overflow-y-auto" data-id="26">
            <div className="grid h-full gap-4 px-4 md:gap-16 md:px-8" data-id="27">
                {children}
            </div>
        </main>
    );
}
