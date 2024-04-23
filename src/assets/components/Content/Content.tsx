interface ContentProps {
    children: React.ReactNode;
}
const Content = ({ children }: ContentProps) => {
    return <section className="w-screen overflow-y-auto ">{children}</section>;
};

export default Content;
