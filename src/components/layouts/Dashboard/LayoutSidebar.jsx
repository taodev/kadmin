import React, {Component} from "react";
import {Link} from "react-router";

class UILayoutSidebar extends Component {
    render() {
        let items = [{id:0, name: "当天概览", link:"dashboard"}, {id:1, name: "日报输出", link:"dashboard"}];

        return (
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={{"paddingTop": "20px"}}>
                        <li className="sidebar-toggler-wrapper hide">
                            <div className="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        <li className="nav-item active open">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-home"></i>
                                <span className="title"> 概览</span>
                                <span className="selected"></span>
                                <span className="arrow open"></span>
                            </a>
                            <ul className="sub-menu">
                                {
                                    items.map(function(item){
                                        return (
                                            <li className="nav-item active open" key={item.id}>
                                                <Link to={item.link} className="nav-link ">
                                                    <i className="icon-bar-chart"></i>
                                                    <span className="title"> {item.name}</span>
                                                    <span className="selected"></span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UILayoutSidebar;