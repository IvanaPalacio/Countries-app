import React from 'react';
import FlexContainer from './Style-FlexContainer';
import Number from './Style-Number';

export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumbers = []
    
    for(let i= 1; i<= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)     
    }

    return(
        <nav>
            <section>
            <FlexContainer>
                {pageNumbers?.map(number =>{
                        return(
                            <div>
                                <Number key={number}>
                                    <a href onClick={() => paginado(number)}>{number}</a>
                                </Number>
                            </div>
                        )
                        })}
            </FlexContainer>           
            </section>
        </nav>
    )
}