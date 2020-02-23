import React from 'react';
import dogImg from './dog.jpg';

class Item extends React.Component {
    
    render = (props) => {

        let classImg = this.props.index === this.props.randomIndex ? 'photo show' : 'photo';
        let onClickHandler = this.props.index === this.props.randomIndex ? this.props.onClickHandler : () => {} ;

        return (
                <div className='item' onClick={onClickHandler}>
                    <img className={classImg} src={dogImg} alt="dog" />
                </div>
        );
    }
}

export default Item;