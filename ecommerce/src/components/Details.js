import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            price,
            title,
            inCart,
            info,
          } = value.detailProduct;

          return (
            <div className='container py5'>
              {/** title */}
              <div className='row'>
                <div className='col-10 mx-auto-text-center text-slanted text-blue my5'>
                  <h1>{title}</h1>
                </div>
              </div>

              {/** Informações do produto*/}
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} className='img-fluid' alt='product' />
                </div>
                {/** Descrição */}
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <h2>Produto: {title}</h2>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    {' '}
                    Feito por: <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      Preço: <span>{price}</span>
                    </strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    informações sobre o produto:
                  </p>
                  <p className='text-muted lead'>{info}</p>

                  {/** Botões */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>voltar para produtos</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disable={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                      cart
                    >
                      {inCart ? 'No carrinho' : 'Adicionar ao carrinho'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
