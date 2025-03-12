


export default function BadgeGoogleReviews(){

    const cantReviews = 28;     // "Ver las __ opiniones"

    return (

        <div className="mt-6 flex flex-col items-center">
            <div className="flex flex-row items-center bg-white dark:bg-gray-900 p-2 lg:px-4 rounded-lg shadow-lg">
                {/* Google Logo */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10"
                >
                <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                ></path>
                <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                ></path>
                <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                ></path>
                <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                ></path>
                <path d="M1 1h22v22H1z" fill="none"></path>
                </svg>

                {/* Texto de Calificación */}
                <div className="text-center">
                <span className="block text-gray-700 dark:text-gray-300 text-sm font-semibold">
                    Calificación
                </span>

                {/* Calificación y estrellas */}
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        5.0
                    </span>
                    <div className="relative flex">
                    <div className="absolute top-0 left-0 w-full overflow-hidden">
                        <span className="text-yellow-500 text-lg">★★★★★</span>
                    </div>
                    <div className="text-gray-300 text-lg">
                        <span>★★★★★</span>
                    </div>
                    </div>
                </div>

                {/* Enlace a las reseñas */}
                <div className="mt-2">
                    <a
                    href="https://search.google.com/local/writereview?placeid=ChIJied4RN4NRZQROscahb5Kut0"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                    Ver las {cantReviews} opiniones
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}