import './style.css'
import NuKenzie from '../../assets/NuKenzie.svg'





export function Header( {setPage}) {

    return (

        <header className="Header">
            <img className ="logoNuKenzie2" src = {NuKenzie} alt="" />
            <button type='button' className='btnHeaderIniciar' onClick={ () => {setPage (true)}} >Inicio</button>
        </header>
    )
}

