import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards(props) {

  const { type } = props;

  return (
    <>
      {
        type == "gameplay" ?
          <div className='cards'>
            <div style={{ display: 'flex', flexDirection: 'row', width: '80%', margin: 'auto' }}>
              <div>
                <img style={{ width: '80%' }}
                  alt='Travel Image'
                  src={'img/about_img.png'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'normal', width: '50%' }}>
                <h1 style={{ textAlign: 'left', padding: '8px' }}>Turn Your Gaming Passion Into NFT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dui sem, sit amet accumsan augue posuere a.
                  Quisque in faucibus metus. Sed sagittis, neque ac ultrices vehicula, neque dui aliquet nulla, vitae malesuada neque elit vitae mauris. Curabitur feugiat a urna at vestibulum. Ut vel mollis libero. Etiam ultricies odio arcu. Duis laoreet tristique convallis.
                  In egestas a sem sit amet cursus. Suspendisse sit amet lobortis augue, vel aliquam eros</p>
                <div className='hero-btns'>
                  <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                  >
                    Discover More
                  </Button>
                </div>
              </div>
            </div>
            <div className='cards__container'>
              <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <CardItem
                    src='img/pv-icon1.png'
                    text='Collect'
                    label='Adventure'
                    path='/services'
                  />
                  <CardItem
                    src='img/pv-icon3.png'
                    text='Breed'
                    label='Luxury'
                    path='/services'
                  />
                  <CardItem
                    src='img/pv-icon3.png'
                    text='Battle'
                    label='Mystery'
                    path='/services'
                  />
                </ul>
              </div>
            </div>
          </div>
          :
          <div className='cards'>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '-60px', marginTop: '-20px' }}>
              <div>
                <img
                  alt='Travel Image'
                  src={'img/divider-bg.png'}
                />
              </div>
            </div>
          </div>
      }
    </>);
}

export default Cards;
