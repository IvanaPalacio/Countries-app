import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postActivity, getAllActivities, getAllCountries} from '../../actions/index'
import {useDispatch, useSelector} from 'react-redux';
import Button from '../Button/Button';
//El useHistory es un método del router y lo que hace es redirigir a la ruta que yo le diga.
export default function CharacterCreate(){
    const dispatch = useDispatch();
    const history = useHistory();
    const country = useSelector((state) => state.countries)
    const [input, setInput] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:[],
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
console.log(input)
    function handleCheck(e){
        if(e.target.checked){
            setInput({
            ...input,
            [e.target.name]: e.target.value
            })
        }
    }

    function handleSelect(e){
        if(!input.countries.includes(e.target.value))
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        await dispatch(postActivity(input))
        alert('activity created')
        setInput({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            countries:[]     
        })
        const result = await dispatch(getAllActivities())
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getAllActivities())
        dispatch(getAllCountries());
    }, []);

    // async function handleSubmit(evt){
    //     evt.preventDefault()
    //     await dispatch(postRecipes(input))
    //     setInput({
    //         name: '',
    //         summary: '',
    //         score: 0, 
    //         healthScore: 0,
    //         image: 'https://vegano.club/wp-content/uploads/2019/11/comidas-veganas.jpg',
    //         steps: '',
    //         diets: []
    //     })
    //     const result = await dispatch(getDatabase())
    //     console.log(result)
    //     history.push('/home')
    // }

    return(
        <div>
            <Link to= '/home'><Button>Volver</Button></Link>
            <h1>Creá tu actividad</h1>
            <form onSubmit={(e) => handleSubmit(e)}>     
                <div>
                    <label>Name:</label>
                    <input 
                    type="text" 
                    value={input.name}
                    name = "name"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>duration:</label>
                    <input
                    type="text" 
                    value={input.duration}
                    name = "duration"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <ul>
                        <li>
                        <h3>Difficulty level:</h3>
                        <label><input 
                        type= "radio"
                        name="difficulty"
                        value="1"
                        onChange={(e)=> handleCheck(e)}                    
                        /> Begginer</label>
                    </li>
                    <li>
                    <label><input 
                        type= "radio"
                        name="difficulty"
                        value="2"
                        onChange={(e)=> handleCheck(e)}                    
                        /> Amateur</label>
                    </li>
                    <li>
                        <label><input 
                        type= "radio"
                        name="difficulty"
                        value="3"
                        onChange={(e)=> handleCheck(e)}                    
                        /> Normal</label>
                    </li>
                    <li>
                        <label><input 
                        type= "radio"
                        name="difficulty"
                        value="4"
                        onChange={(e)=> handleCheck(e)}                    
                        />Professional</label>
                    </li>
                    <li>
                        <label><input 
                        type= "radio"
                        name="difficulty"
                        value="5"
                        onChange={(e)=> handleCheck(e)}                    
                        /> Expert</label>
                    </li>    
                </ul>
                </div>
                <div>
                    <h3>seasons:</h3>
                    <label><input 
                    type= "radio"
                    name="season"
                    value="spring"
                    onChange={(e)=> handleCheck(e)}                    
                    /> spring</label>

                    <label><input 
                    type= "radio"
                    name="season"
                    value="summer"
                    onChange={(e)=> handleCheck(e)}                    
                    /> summer</label>

                    <label><input 
                    type= "radio"
                    name="season"
                    value="fall"
                    onChange={(e)=> handleCheck(e)}                    
                    /> fall</label>

                    <label><input 
                    type= "radio"
                    name="season"
                    value="winter"
                    onChange={(e)=> handleCheck(e)}                    
                    /> winter</label>
                </div>
                <h2>Selected Countries:</h2>
                <select onChange={(e) => handleSelect(e)}>    
                    {country.map((c) => (
                        <option value={c.name} key={c.id}> {c.name}</option>
                    ))}
                </select>
                <ul>
                    <li>{input.countries.map(el => el + ", " )}</li>
                </ul>
                <Button type="submit">Create activity</Button>

            </form>
        </div>
    )
}