// pages/contact.js
import Image from 'next/image';
import Head from 'next/head';


const Quisom = () => {
    return (
        <div>
            
            <Head>
                <title>Servicios - Aurores</title>
                <meta name="description" content="Descubre los servicios de bienestar que ofrecemos en Aurores." />
            </Head>
          
            <div className='bg-maize-100 flex flex-col  justify-center items-center gap-14' >
                <div className='flex flex-row mt-16 mb-10 gap-10  shadow-lg p-10 w-[90vh]'>
                    <div className='flex flex-col  w-[60vh] gap-4'>
                        <h1 className='text-[25px]  font-semibold '>ON ESEM?</h1>
                        <h1 className='text-[15px]  font-medium '> Ens podeu trobar a Carrer de Ramon Albó, 59, Nou Barris. 08027 Barcelona</h1>
                        <h1 className='text-[15px]  font-medium '> Per cualsevol dubte us podeu posar en contacte a traves del nostre mail jajajajdjq@gmail.com o del nostre telèfon +34 613 006 060</h1>
                    </div>
                    <div>
                        <Image
                            src="/entrada.png"
                            width={500}
                            height={350}
                            alt="Sala Principal"
                            className='mt-10'
                        />
                    </div>

                </div>
            </div>  
        </div>
        
    );
};


export default Quisom;
