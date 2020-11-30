import React, { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselContainer from './Gallery/CarouselContainer';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductContext from '../context/product/productContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const productContext = useContext(ProductContext);
  const {
    setProductId,
    getAllProductInfo,
    productInfo,
    images,
  } = productContext;

  useEffect(() => {
    getAllProductInfo(productId);
    setProductId(productId);
  }, [productId]);

  return (
    <>
      {productInfo && (
        <Col>
          <Row className='mt-2'>
            <Col lg={8}>
              <CarouselContainer />
            </Col>
            <Col>
              <ProductPurchasePanel />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <ProductInfo />
            </Col>
          </Row>
        </Col>
      )}
    </>
  );
};

export default ProductDetails;
