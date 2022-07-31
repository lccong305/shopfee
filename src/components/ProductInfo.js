// import React, { useEffect, useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/actions";
// import Button from "./Button";
// import { Link, useNavigate } from "react-router-dom";

// const ProductInfo = ({ product }) => {
//   const dispatch = useDispatch();
//   const [previewImg, setPreviewImg] = useState(product.image);
//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState(undefined);
//   const [descriptionExpand, setDescriptionExpand] = useState(true);
//   useEffect(() => {
//     setPreviewImg(product.image);
//     setSize(undefined);
//   }, [product]);

//   const handleMinusQuantity = () => {
//     if (quantity <= 1) return;
//     setQuantity(quantity - 1);
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addToCart({ data: item, quantity: quantity }));
//   };

//   return (
//     <div className="product">
//       <div className="product__images">
//         <div className="product__images__list">
//           <div className="product__images__list__item">
//             <img src={product.image} alt="" />
//           </div>
//           <div className="product__images__list__item">
//             <img src={product.image} alt="" />
//           </div>
//         </div>
//         <div className="product__images__main">
//           <img src={previewImg} alt="" />
//         </div>
//         <div
//           className={`product-description ${descriptionExpand ? "expand" : ""}`}
//         >
//           <div className="product-description__title">Chi tiết sản phẩm</div>
//           <div
//             className="product-description__content"
//             dangerouslySetInnerHTML={{ __html: product.description }}
//           ></div>
//           <div className="product-description__toggle">
//             <Button
//               size="sm"
//               onClick={() => setDescriptionExpand(!descriptionExpand)}
//             >
//               {descriptionExpand ? "Xem them" : "Thu gon"}
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="product__info">
//         <h1 className="product__info__title">{product.name}</h1>
//         <div className="product__info__item">
//           <span className="product__info__item__price">$ {product.price}</span>
//         </div>
//         <div class="sharethis-inline-share-buttons">Shareing</div>
//         <div className="product__info__item">
//           <div className="product__info__item__title">Màu sắc</div>
//           {/* <div className="product__info__item__list">
//                             {
//                                 newProduct.colors.map((item, index) => (
//                                     <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
//                                         <div className={`circle bg-${item}`}></div>
//                                     </div>
//                                 ))
//                             }
//                         </div> */}
//         </div>
//         <div className="product__info__item">
//           <div className="product__info__item__title">Kích cỡ</div>
//           <div className="product__info__item__list">
//             {product.sizes
//               ? product.sizes.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`product__info__item__list__item ${
//                       size === item ? "active" : ""
//                     }`}
//                     onClick={() => setSize(item)}
//                   >
//                     <span className="product__info__item__list__item__size">
//                       {item}
//                     </span>
//                   </div>
//                 ))
//               : "isLoading"}
//           </div>
//         </div>
//         <div className="product__info__item">
//           <div className="product__info__item__title">Số lượng</div>
//           <div className="product__info__item__quantity">
//             <div
//               className="product__info__item__quantity__btn"
//               onClick={handleMinusQuantity}
//             >
//               <AiOutlineMinus />
//             </div>
//             <div className="product__info__item__quantity__input">
//               {quantity}
//             </div>
//             <div
//               className="product__info__item__quantity__btn"
//               onClick={() => setQuantity(quantity + 1)}
//             >
//               <AiOutlinePlus />
//             </div>
//           </div>
//         </div>
//         <div className="product__info__item">
//           <Button onClick={() => handleAddToCart(product)}>thêm vào giỏ</Button>
//           <Link to="/payment">
//             <Button>mua ngay</Button>
//           </Link>
//         </div>
//       </div>
//       <div className={`product-description mobile `}>
//         <div className="product-description__title">Chi tiết sản phẩm</div>
//         <div
//           className="product-description__content"
//           dangerouslySetInnerHTML={{ __html: product.description }}
//         ></div>
//         <div className="product-description__toggle">
//           <Button
//             size="sm"
//             onClick={() => setDescriptionExpand(!descriptionExpand)}
//           >
//             {descriptionExpand ? "Thu gọn" : "Xem thêm"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;
