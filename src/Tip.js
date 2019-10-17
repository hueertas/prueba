import React, {Fragment} from 'react';
import './App.css';

 class Tip extends React.Component{
    render(){
        return(
            <div className={"cuerpo"}>
                <div>Tips:
                    {this.props.question.tips.length === 0 ?
                        <p>{"No tips"}</p> : this.props.question.tips.map(function (t) {
                            return <p>{t}</p>;
                        })}
                </div>
            </div>
        );

    }

}