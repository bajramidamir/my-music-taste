import React, { useState } from 'react';
import axios from 'axios';

const AlbumCard = ({ width }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [albumImg, setAlbumImg] = useState('');
    const [visible, setVisible] = useState(false);
    const [buttonBool, setButtonBool] = useState(true);
    
    const displaySearch = () => {
        setVisible(!visible);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setButtonBool(!buttonBool);
        setVisible(!visible);
        const KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchTerm}&api_key=${KEY}&format=json`;
        axios.get(URL)
        .then(response => {
            console.log(response);
            setAlbumImg(response.data.results.albummatches.album[0].image[3]["#text"]);

        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
        <div>

            <div className={`bg-slate-100 shadow-xl flex items-center justify-center h-40  md:h-56 mx-auto ${width}`}>
                <div>
                    <img src={albumImg} className={`mx-auto`}  />
                    <button onClick={displaySearch} className={`${buttonBool ? 'block' : 'hidden'} transition duration-200 ${visible ? 'rotate-45' : ''}`}>
                        <img className={`w-28 md:w-32`} src="plus.svg" />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center m-2'>
                <form onSubmit={handleSearch}>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`${visible ? 'block' : 'hidden'} md:w-full w-10/12 mx-auto p-2 rounded-lg `} type="text" />
                </form>
            </div>
            
        </div>
        
    )
}

export default AlbumCard;