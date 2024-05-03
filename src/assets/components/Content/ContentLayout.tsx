interface ContentProps {
    children: React.ReactNode;
}
const Content = ({ children }: ContentProps) => {
    return <section className="pt-20 pb-20 w-screen overscroll-y-scroll">{children}</section>;
};

export default Content;
