import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import image from './monkey.jpg';


function MyList() {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const savedRecipesFromStorage = localStorage.getItem('savedRecipes');
        if (savedRecipesFromStorage) {
            setSavedRecipes(JSON.parse(savedRecipesFromStorage));
            console.log('Saved recipes loaded from local storage:', JSON.parse(savedRecipesFromStorage).length);
        }
    }, []);

    const handleRemove = (index) => {
        const updatedRecipes = [...savedRecipes];
        updatedRecipes.splice(index, 1);
        setSavedRecipes(updatedRecipes);
        localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    };

    return <Grid>

        {savedRecipes.length > 0 ? (
            <Card>
                {savedRecipes.map((recipe, index) => (
                    <Card key={index}>
                        <Link to={'/recipe/' + recipe.id}>

                            <h3>{recipe.title}</h3>

                            <img src={recipe.image} alt=""/>

                        </Link>

                        <Button onClick={() => handleRemove(index)}>Cancel</Button>

                    </Card>
                ))}
            </Card>
        ) : (
            <Griddy>
                <div>
                    <img src={image}/>
                    <p>No saved recipes</p>
                </div>

            </Griddy>
        )}

    </Grid>


}

const imageComp = styled.div`
          position: center;
          align-items: center;
    `
;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

`;

const Saved = styled.div`

    
` ;
const Card = styled.div`
  img {
    
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: white;
  background: red;
  border: none;
  font-weight: 600;
`;
const Griddy = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 3rem;
  height: 60vh;

  p {
    text-align: center;
    font-size: 80px;
  }
`;


export default MyList;
