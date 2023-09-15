import { toast } from 'react-toastify';

export const myToasterSuccess = ( text=  '🦄 Wow so easy!' ) => {
    toast.success( text , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

