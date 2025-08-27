import {useState} from 'react';

const AnnouncementBar = () => {

    const [isClosed, setIsClosed] = useState(false);

    if(isClosed) {
        return null
    } else {
        return (
            <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
                <p>
                    Sign up and get 20% off to your first order.{" "}
                    <a href="#" className="underline font-medium">
                        Sign Up Now
                    </a>
                </p>
                <button
                    className="cursor-pointer absolute right-4 top-2 text-white"
                    onClick={() => setIsClosed(!isClosed)}
                >×</button>
            </div>
        );
    }
};

export default AnnouncementBar;