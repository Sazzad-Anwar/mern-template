import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './routes/Routes';
import './assets/tailwind.css';
import './assets/main.css';
import './assets/theme.dark.css';
import './assets/theme.light.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalContextProvider from './context/GlobalContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <GlobalContextProvider>
        <BrowserRouter>
            <App />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme={'light'}
                pauseOnHover
            />
        </BrowserRouter>
    </GlobalContextProvider>,
);
