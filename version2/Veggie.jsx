import React, {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";

function Veggie() {

    const [veggie,setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();

    },[]);
    const getVeggie = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=99ee303e0c63493fba9f26521ba72c47&tags=vegetarian&number=9`
        );
        const data = await api.json();
        setVeggie(data.recipes);
    }

    return (
        <div>


            <Wrapper>
                <h3>Veggie picks</h3>

                <Splide
                    options={{
                        perPage: 3,
                        arrows:false,
                        pagination:false,
                        drag:'free',
                        gap: '5rem',

                    }}>
                    {veggie.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradiant/>
                                </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>



        </div>
    );
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`
const Card = styled.div`
min-height: 25rem;
  border-radius:2rem ;
  overflow: hidden;
  position: relative;
  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
 p{
   position: absolute;
   z-index:10;
   left: 50%;
   bottom: 0%;
   transform: translate(-50%, 0%);
   color: white;
   width: 100%;
   text-align: center;
   font-weight:600;
   font-size: 1rem;
   height: 40%;
   display: flex;
   justify-content: center;
   align-items: center;
   
 } 
`

const Gradiant = styled.div`
    z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0,) rgba(0,0,0,0.5));
`

export default Veggie;