import React, {Component} from 'react';
import {CtxConsumer} from '../index';
class Footer extends Component{
    state = {
        name: 'sameer',
        age: 25
    }
    componentDidMount(){
        this.setState({name: 'myname'})
    }
    changed = (evt) =>{
        
        this.setState({name: evt.target.value})
        console.log(this.state.name)
    }
    
    render(){
       // const animals = ['cat','dog','horse'];
        return(
            <CtxConsumer>
                {(context) =>(
                    <div>
                        { context.animals.map( animal =>{
                            return(
                                <div key={animal}>
                                    <h1>{animal}</h1>
                                    </div>
                            );
                        })}
                    </div>
                )}
            </CtxConsumer>
        )
    }
}
export default Footer