import DarkModeToggler from "../Components/DarkModeToggler"
import reactLogo from '../logo.svg';
import tailwind from '../tailwindcss.svg'
import antLogo from '../ant_logo.svg';

const Index = () => {
    return (
        <div className="w-screen h-screen dark:bg-gray-800 bg-white flex justify-center items-center">
            <div className="text-center">
                <DarkModeToggler className="my-4" />
                <h1 className="dark:text-white text-white"> Dark Mode</h1>
                <h1 className="dark:text-gray-800 text-gray-800">Light Mode</h1>
                <div className="flex items-center justify-center">
                    <img src={tailwind} className="animate-pulse" height="100" width="100" alt="tailwind" />
                    <i class="bi bi-plus-lg text-3xl font-bold dark:text-white text-black mx-3"></i>
                    <img src={reactLogo} className="animate-spin" height="120" width="120" alt="react" />
                    <i class="bi bi-plus-lg text-3xl font-bold dark:text-white text-black mx-3"></i>
                    <img src={antLogo} className="animate-pulse" height="80" width="80" alt="ant-design" />
                </div>
            </div>
        </div>
    )
}

export default Index
