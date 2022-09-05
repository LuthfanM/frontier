import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  console.log("isi pr", props);
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <img
            className='cards__item__img'
            alt='Travel Image'
            src={props.src}
          />
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.label}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
