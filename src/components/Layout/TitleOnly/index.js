import Header from '~/components/Layout/components/Header';
import Title from '~/components/Layout/components/Title';

function TitleOnly({ children }) {
    return (
        <div>
            <Header />
            <Title />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default TitleOnly;
