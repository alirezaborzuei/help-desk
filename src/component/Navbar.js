import React from 'react';
import MyNav from "./MyNav";

const Navbar = () => (
    <div className="right-dir center-text">
        <MyNav address="/" isExact={true} label="داشبورد"/>
        <MyNav address="/support-team" label="تیم پشتیبانی"/>
        <MyNav address="/costumers" label="مشتریان"/>
        <MyNav address="/products" label="محصولات"/>
        <MyNav address="/add-product" label="افزودن محصول"/>
        <MyNav address="/tickets" label="تیکت ها"/>
        <MyNav address="/add-ticket" label="افزودن تیکت"/>
    </div>
);

export default Navbar;