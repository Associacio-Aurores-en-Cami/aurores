import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (


        <footer class="bg-gray-800 text-white ">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div>
                        <Image
                            src="/logo def aurores COLOR traç.png"
                            width={200}
                            height={200}
                            alt="logo color"
                        />
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contacte:</h2>
                            <ul class="text-gray-200 dark:text-gray-400 ">
                                <li class="mb-4">
                                    <a >Mail: kasjdbakjsdbaskjdb@gmail.com</a>
                                </li>
                                <li>
                                    <a >Telèfon: +34 613 006 060</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Direcció:</h2>
                            <ul class="text-gray-200 dark:text-gray-400 ">
                                <li class="mb-4">
                                    <a>Carrer de Ramon Albó, 59,</a>
                                </li>
                                <li>
                                    <a > Nou Barris, 08027 Barcelona</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5983.1363599790775!2d2.174477376567592!3d41.42689159354303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd2e8ae644ad%3A0x6c64f5a23c240eab!2sAurores!5e0!3m2!1ses!2ses!4v1712929423866!5m2!1ses!2ses" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2024 Aurores . All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-white dark:hover:text-white ms-5">

                            <Image
                                src="/in.svg"
                                width={20}
                                height={20}
                                alt="logo color"
                            />

                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-white dark:hover:text-white ms-5">

                            <Image
                                src="/fac.svg"
                                width={20}
                                height={20}
                                alt="logo color"
                            />

                            <span class="sr-only">Instagram page</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-white dark:hover:text-white ms-5">

                            <Image
                                src="/X.svg"
                                width={20}
                                height={20}
                                alt="logo color"
                            />

                            <span class="sr-only">Twitter page</span>
                        </a>


                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
