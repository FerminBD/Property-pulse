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
                <div>{children}</div>
            </body>
        </html>
    )
}

export default MainLayout;