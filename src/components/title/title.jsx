import React from 'react';
import styled from 'styled-components';

const Titlebody = styled.h1`
    color: red;
 `
const Container = styled.section`
    float:left;
    width:100%;
    margin-left: 30px;
    margin-right:30px;
 `

class Title extends React.Component{
    render(){
        return(
            <Container>
                <Titlebody>
                   {this.props.title}
                </Titlebody>
            </Container>
        )
    }
}

export default Title;


