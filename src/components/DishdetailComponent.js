import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    
    
    constructor(props){
        super(props);
    }

    renderComments(comments){
        if(comments == null){
            return(<div></div>);
        }else{
           return  comments.map((comment) => {
                return(
                    <div>
                        <div class = 'container'>
                        <ul className="list-unstyled">
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                             </li>
                        </ul>
                        </div>
                    </div>
                );
            });
        }
    }
    
    render(){

        if(this.props.dish != null){
            return(
                <div className="row">
                    
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={this.props.dish.image} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
                    </div>

                </div>
            );
        }else{
            return (<div></div>);
        }

    }
}

export default Dishdetail;