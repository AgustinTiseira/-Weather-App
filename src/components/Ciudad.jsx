import React from 'react';
import style from './Ciudad.module.css'

class Ciudad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ciudad: {}
        }
    }

    componentDidMount() {
        const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
        const id = this.props.match.params.id;
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`)
            .then(r => r.json())
            .then((recurso) => {
                console.log(recurso)
                this.setState({
                    ciudad: recurso
                })
            })
    }

    render() {
        const city = this.state.ciudad;
        if(!city.main) return <h1>Cargando...</h1>
        return (
            <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div className={style.data}>Temperatura: {city.main.temp} </div>
                        <div className={style.data}>Clima: {city.weather[0].main}</div>
                        <div className={style.data}>Viento: {city.wind.speed} km/h</div>
                        <div className={style.data}>Cantidad de nubes: {city.clouds.all}</div>
                        <div className={style.data}>Latitud: {city.coord.lat}º</div>
                        <div className={style.data}>Longitud: {city.coord.lon}º</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ciudad;