import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            selectedDish: null
        };
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComment(comment) {
        if (comment == null) {
            return <div></div>
        }
        const cmt = comment.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author}</p>
                    <p>{comment.date}</p>
                </li>
            )
        })
        
        return (
            <div>
                <h4>Comments</h4>
                <ul>
                    {cmt}
                </ul>
            </div>
        )
    }

    render() {
        const dish = this.props.dish
        if (dish == null) {
            return <div></div>;
        }

        const dishItem = this.renderDish(dish)
        const dishComment = this.renderComment(dish.comments)
        return (
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {dishItem}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {dishComment}
                </div>
            </div>
                
        );
        
    }
}

export default DishdetailComponent