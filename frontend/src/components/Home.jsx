import React from 'react';
import backgroundImage from './logo_jalviks.png'; // Import the background image

const Home = () => {
    return (
        <div className="responsive-container" style={{
            position: 'relative',
            height: '450px', // This is the default height, which is used when the media query is not applied
            padding: '5px',
        }}>
            <img
                src={backgroundImage}
                alt="Background Logo"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'auto',
                    opacity: 0.15,
                    height: '500px', // Set the desired height for the image
                }}
            />
            <div style={{ zIndex: 1, fontSize: '18px' }}>
                JALVIKS – Climate Service for Empowering Farmers with Climate-Smart Irrigation
                Join the sustainable agricultural revolution with our innovative climate service app! 🌍.
                JalViks is a climate service platform that connects farmers and state governments, transforming irrigation management. JaLViks delivers statistics on farmers and irrigation management.
                Join the climate revolution and transform your irrigation strategy with our unique app. Together, we can create a future in which agriculture flourishes alongside nature, protecting our world for future generations. Download the app today and start your path towards a greener, more resilient agricultural landscape. Climate Smart Agriculture, Sustainable Farming, and Irrigation Innovation 🌱🚜
            </div>
        </div>
    );
};

export default Home;
