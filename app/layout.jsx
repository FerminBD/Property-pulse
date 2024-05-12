import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/global.css';


export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    desccription: 'Find your dream rental property',
    keywords: 'renta, find rentals, find properties'
}

const MainLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default MainLayout;