import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Colbr</title>
            </Head>

            <div className="min-h-screen bg-gray-900">
                <div className="p-5 flex justify-between items-center border-b border-gray-100 mb-32">
                    <div className="">
                        <svg
                            viewBox="0 0 156 58"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-auto text-gray-700 sm:h-20">
                            <g clip-path="url(#clip0_402_752)">
                                <path d="M28.5322 22.1168C30.1965 22.1177 31.7923 22.8013 32.9688 24.0174C34.1453 25.2335 34.8063 26.8825 34.8063 28.6018C34.8063 30.3209 34.1452 31.9696 32.9686 33.1851C31.792 34.4007 30.1962 35.0836 28.5322 35.0836" fill="#F9F9F9"/>
                                <path d="M28.2744 11.0946C23.7598 11.1007 19.4318 12.9562 16.2395 16.2541C13.0473 19.5521 11.2513 24.0234 11.2454 28.6874C11.2504 33.352 13.046 37.8241 16.2384 41.1228C19.4308 44.4215 23.7592 46.2774 28.2744 46.2835V40.6177C25.213 40.6143 22.278 39.3561 20.1135 37.1194C17.9491 34.8827 16.7321 31.8502 16.7295 28.6874C16.7329 25.5252 17.9503 22.4936 20.1146 20.2576C22.279 18.0216 25.2135 16.7638 28.2744 16.7604V11.0946Z" fill="#F9F9F9"/>
                                <path d="M5.48103 28.9868C5.48103 29.0329 5.48103 29.0756 5.48103 29.1217H3.28388e-06C3.28388e-06 29.0756 3.28388e-06 29.0329 3.28388e-06 28.9868C-0.00348032 21.5556 2.76477 14.4089 7.72947 9.03162L11.6977 12.9338C7.70545 17.2605 5.47923 23.0092 5.48103 28.9868Z" fill="#F9F9F9"/>
                                <path d="M47.9184 8.49204L44.0425 12.4962C41.9499 10.3228 39.4608 8.59965 36.7192 7.42663C33.9777 6.25361 31.0382 5.65399 28.0708 5.66245C27.8033 5.66245 27.5422 5.66245 27.2778 5.68219V0.0328853C27.5422 0.0328853 27.8033 0.0131448 28.0708 0.0131448C31.7573 0.00109237 35.4096 0.74424 38.8164 2.19961C42.2231 3.65498 45.3168 5.79369 47.9184 8.49204Z" fill="#F9F9F9"/>
                                <path d="M28.0706 52.3474C33.8451 52.3572 39.402 50.0717 43.59 45.9643L47.3576 50.0804C42.1518 55.1826 35.2463 58.0216 28.0706 58.0098C20.7403 58.013 13.7016 55.0441 8.46826 49.7415L12.427 45.8196C16.6251 50.0085 22.2341 52.349 28.0706 52.3474Z" fill="#F9F9F9"/>
                                <path d="M85.4191 40.2624C82.8863 42.415 79.7018 43.5795 76.4221 43.5527C68.2595 43.5527 62.2881 37.1367 62.2881 28.6216C62.2881 20.1066 68.4602 13.6939 76.3425 13.6939C79.4671 13.657 82.5116 14.7147 84.9796 16.6946L83.9446 19.6558C81.8157 17.866 79.1665 16.8671 76.4221 16.8196C70.25 16.8196 65.6321 21.9195 65.6321 28.6216C65.6321 35.3238 70.0526 40.427 76.5018 40.427C79.4133 40.4048 82.2218 39.3105 84.4223 37.3407L85.4191 40.2624Z" fill="#F9F9F9"/>
                                <path d="M98.9923 21.0903C105.244 21.0903 109.782 25.9006 109.782 32.3166C109.782 38.7325 105.164 43.5461 98.9541 43.5461C92.7438 43.5461 88.1641 38.8147 88.1641 32.3166C88.1641 25.8184 92.8234 21.0903 98.9923 21.0903ZM98.9541 40.5849C103.413 40.5849 106.598 37.0874 106.598 32.3166C106.598 27.5457 103.413 24.0515 98.9541 24.0515C94.4954 24.0515 91.3902 27.628 91.3902 32.3166C91.3902 37.1367 94.5336 40.5915 98.9541 40.5915V40.5849Z" fill="#F9F9F9"/>
                                <path d="M113.802 13.2827H116.948V43.0164H113.802V13.2827Z" fill="#F9F9F9"/>
                                <path d="M122.362 13.2827H125.506V25.0847C126.301 23.8349 127.39 22.8136 128.671 22.1163C129.952 21.419 131.383 21.0683 132.831 21.0969C138.684 21.0969 142.703 25.7855 142.703 32.3659C142.703 38.9464 138.484 43.5527 132.592 43.5527C131.171 43.5701 129.769 43.2219 128.511 42.5395C127.254 41.8571 126.18 40.862 125.388 39.6439V43.0164H122.362V13.2827ZM132.394 40.631C136.375 40.631 139.48 37.3835 139.48 32.4054C139.48 27.5129 136.535 24.0581 132.474 24.0581C128.573 24.0581 125.388 27.1016 125.388 32.4054C125.388 36.8834 128.095 40.631 132.394 40.631Z" fill="#F9F9F9"/>
                                <path d="M156 24.3444C151.264 24.3444 149.869 28.2104 149.869 32.7772V43.0164H146.726V21.6299H149.831V25.2097C150.548 23.0711 152.857 21.0969 156 21.0969V24.3444Z" fill="#F9F9F9"/>
                            </g>
                        </svg>
                    </div>
                    <div className="">
                        <Link href="/login">
                            <a className="text-sm text-gray-100">Se connecter</a>
                        </Link>

                        <Link href="/register">
                            <a className="ml-4 text-sm text-gray-100">S'inscrire</a>
                        </Link>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">

                    <div className="mt-8 bg-gray-800 dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a 
                                            target='blank'
                                            href="https://colbr.co/"
                                            className="underline text-gray-100 dark:text-white">
                                            Colbr
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 dark:text-gray-400 text-sm">
                                    La néobanque privée au service de votre ambition. Accédez enfin à l’univers d’investissement des grandes fortunes.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                <div className="flex items-center">

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://colbr.co/marches-financiers"
                                            className="underline text-gray-100 dark:text-white">
                                            Investir
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 dark:text-gray-400 text-sm">
                                    “The big money is not in the buying or selling, but in the waiting”
                                    Charlie Munger
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://colbr.co/equipe"
                                            className="underline text-gray-100 dark:text-white">
                                            Notre équipe
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 dark:text-gray-400 text-sm">
                                    Le projet Colbr est né de la rencontre de Gustav et Romain en 2019 après 15 ans d’expérience cumulée dans le secteur de la finance.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                                <div className="flex items-center">

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://colbr.co/carrieres"
                                            className="underline text-gray-100 dark:text-white">
                                            Nous rejoindre
                                        </a>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 dark:text-gray-400 text-sm">
                                    Des postes sont à pourvoir dans la team Colbr. Toi aussi viens faire la différence !
                                    </div>
                                </div>
                            </div>

                            {/* <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                                <div className="flex items-center">

                                    <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                        Nous rejoindre
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel's robust library of first-party
                                        tools and libraries, such as{' '}
                                        <a
                                            href="https://forge.laravel.com"
                                            className="underline">
                                            Forge
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://vapor.laravel.com"
                                            className="underline">
                                            Vapor
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://nova.laravel.com"
                                            className="underline">
                                            Nova
                                        </a>
                                        , and{' '}
                                        <a
                                            href="https://envoyer.io"
                                            className="underline">
                                            Envoyer
                                        </a>{' '}
                                        help you take your projects to the next
                                        level. Pair them with powerful open
                                        source libraries like{' '}
                                        <a
                                            href="https://laravel.com/docs/billing"
                                            className="underline">
                                            Cashier
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/dusk"
                                            className="underline">
                                            Dusk
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/broadcasting"
                                            className="underline">
                                            Echo
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/horizon"
                                            className="underline">
                                            Horizon
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/sanctum"
                                            className="underline">
                                            Sanctum
                                        </a>
                                        ,{' '}
                                        <a
                                            href="https://laravel.com/docs/telescope"
                                            className="underline">
                                            Telescope
                                        </a>
                                        , and more.
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="-mt-px w-5 h-5 text-gray-400">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                                <a
                                    href="https://laravel.bigcartel.com"
                                    className="ml-1 underline">
                                    Shop
                                </a>

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="ml-4 -mt-px w-5 h-5 text-gray-400">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>

                                <a
                                    href="https://github.com/sponsors/taylorotwell"
                                    className="ml-1 underline">
                                    Sponsor
                                </a>
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                            Laravel Breeze + Next.js template
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
