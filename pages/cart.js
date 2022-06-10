/* eslint-disable jsx-a11y/alt-text */
import  Head from "next/head";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Image from 'next/image'
import Link from "next/link";
import {Nav } from "react-bootstrap";
export default function Cart() {
  const { product } = useSelector((state) => state.product);
  const [pri, setPri] = useState([])
  
  if (product.length > 0) {
    product.map((e) => pri.push((e.price)));  
  }
    return (
      <div>
        <Head>
          <title>
            {product.title !== "" || product.title !== null
              ? "product"
              : product.title}
          </title>
          <meta name="description" content="Pizza Products" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Container>
          {product.length === 0 ? (
            <div className="cart-empty d-flex justify-content-center align-items-center flex-column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                className="bi bi-cart-x"
                viewBox="0 0 16 16"
              >
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <span>
                <span>Your cart is empty</span>
              </span>
              <p>Add something to make happy :)</p>
              <Link href="/products">
                <Nav.Link href="/cart" className="btn btn-danger ms-2 mb-3">
                  <div>
                    <span className="btn btn-danger">continue shopping</span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-bag-check-fill  ms-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                        />
                      </svg>
                    </span>
                  </div>
                </Nav.Link>
              </Link>
            </div>
          ) : (
            product.map((prod) => (
              <div key={prod.id}>
                <div className="total-info mt-1 mb-1 mt-md-4 mb-md-4 py-4 d-flex justify-content-between fw-bolder">
                  <ul className="list-unstyled d-flex flex-column">
                    {" "}
                    <Image
                      src={`${prod.path}`}
                      width="50"
                      height="50"
                      alt="product title"
                    />
                  </ul>
                  <ul className="list-unstyled d-flex flex-column ">
                    <li>Name</li>
                    <span>{prod.title}</span>
                  </ul>
                  <ul className="list-unstyled d-flex flex-column">
                    <li>Extras</li>
                    <span>Spicy </span>
                  </ul>
                  <ul className="list-unstyled d-flex flex-column">
                    <li>Quanity</li>
                    <span>1</span>
                  </ul>
                  <ul className="list-unstyled d-flex flex-column">
                    <li>Total</li>
                    <span>{prod.price}</span>
                  </ul>
                </div>
              </div>
            ))
          )}
              {product.length >0 ?  <div className="total-price d-flex justify-content-center align-items-center flex-column py-3 fs-3 ">
            total price <span>  ${pri.reduce((e,w) => e+w,0) || ''}</span>
            <Link href={`/`}>
              <button type="button " className="btn btn-danger mt-3 mb-3">
                Pay Now
              </button>
            </Link>
          </div>:''}
        </Container>
      </div>
    );
}
