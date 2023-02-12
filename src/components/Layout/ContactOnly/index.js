import Contact from '~/components/Layout/components/Contact';

function ContactOnly({ children }) {
    return (
        <div>
            <Contact />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default ContactOnly;
