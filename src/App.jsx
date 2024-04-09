import Header from './assets/components/Header/Header';
import Content from './assets/components/Content/Content';
import Footer from './assets/components/Footer/Footer';
import Modal from './assets/components/Modal/Modal';

export default function App() {
    return (
        <>
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
            <Modal />
        </>
    );
}
