import React from "react";
import Router, { Link, RouteHandler } from "react-router";

import UILayoutFooter from "./LayoutFooter";
import UILayoutHeader from "./LayoutHeader";
import UILayoutSidebar from "./LayoutSidebar";

var HomePage = React.createClass({
    render: function() {
        return (
            <div className="page-wrapper">
                <UILayoutHeader/>
                <div className="clearfix"> </div>
                <div className="page-container">
                    <UILayoutSidebar/>
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <div className="page-bar">
                                <ul className="page-breadcrumb">
                                    <li>
                                        <a href="index.html">Home</a>
                                        <i className="fa fa-circle"></i>
                                    </li>
                                    <li>
                                        <a href="#">Blank Page</a>
                                        <i className="fa fa-circle"></i>
                                    </li>
                                    <li>
                                        <span>Page Layouts</span>
                                    </li>
                                </ul>
                            </div>
                            <div id="PageBody">
                            </div>
                        </div>
                    </div>
                </div>
                <UILayoutFooter/>
            </div>
        );
    }
});

export default HomePage;