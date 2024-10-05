import React from 'react';

// Компонент GoodsCard
const GoodsCard = ({ image, name, price }) => {
    return (
        <div className="goods-card">
            <img src={image} alt={name} className="goods-image" />
            <h2 className="goods-name">{name}</h2>
            <p className="goods-price">{price} грн</p>
        </div>
    );
};

// Галерея овочів
const VegetableGallery = () => {
    const vegetables = [
        {
            image: 'https://freshmart.com.ua/storage/web/cache/product/2246/pomidor-bakinsykiy-rozheviy.jpg?w=1024&h=768&fit=resize&q=80&fm=pjpg&t=1590673763&s=40e29d4302d7a70ed1cf3d79576a1cb6',
            name: 'Помідор',
            price: 30,
        },
        {
            image: 'https://vitok.ua/home/catalog_products/item_2976/image/d8c445f1-5ce6-11e9-b2d2-000c2974779c.jpeg',
            name: 'Огірок',
            price: 25,
        },
        {
            image: 'https://img2.zakaz.ua/upload.version_1.0.d0ff93ebc2059db3a9c6a033053d980c.1350x1350.jpeg',
            name: 'Морква',
            price: 20,
        },
        {
            image: 'https://vip.shuvar.com/media/catalog/product/cache/628b1a33a4779cd89563027f2a2c1a58/P/e/Perets-bolharskyy-chervonyy-_import_.png',
            name: 'Перець',
            price: 35,
        },
        {
            image: 'https://img3.zakaz.ua/src.1607506755.ad72436478c_2020-12-09_Aliona/src.1607506755.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
            name: 'Цибуля',
            price: 15,
        },
        {
            image: 'https://img.fozzyshop.com.ua/kremenchuk/217179-thickbox_default/kapusta-molodaya.jpg',
            name: 'Капуста',
            price: 28,
        },
        {
            image: 'https://img3.zakaz.ua/upload.version_1.0.df01394534a5cdf85615082c18396db9.1350x1350.jpeg',
            name: 'Картопля',
            price: 25,
        },
        {
            image: 'https://otvalentiny.od.ua/upload/image/store/products/product-1/2qFdtK4U-27.jpg',
            name: 'Баклажан',
            price: 30,
        },
    ];

    return (
        <div className="vegetable-gallery">
            <h1 className="gallery-title">Gallery of Vegetables</h1>
            <div className="gallery">
                {vegetables.map((vegetable, index) => (
                    <GoodsCard
                        key={index}
                        image={vegetable.image}
                        name={vegetable.name}
                        price={vegetable.price}
                    />
                ))}
            </div>
        </div>
    );
};

// Експорт компоненту
export default VegetableGallery;
