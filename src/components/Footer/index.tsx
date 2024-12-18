export function Footer(){
    return (
    <footer className="bg-bg2 shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-brand1">
                        &lt;V/&gt;
                    </span>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Victor Palha
                    </span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://victor-palha.github.io/" className="hover:underline me-4 md:me-6">Blog</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/victor-palha" className="hover:underline">Victor Palha</a>. All Rights Reserved.</span>
        </div>
    </footer>
    )
}