import emoji from './emoji.svg';
import './Instructions.css';

const Instructions = () =>  {
    return(
        <>
            <img className="image-emoji" src={emoji} alt='emoji'/>
            <p>Click tombol emoji untuk mengetahui nama emoji.</p>
        </>
    )
}

export default Instructions;