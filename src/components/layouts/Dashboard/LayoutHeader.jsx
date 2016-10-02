import React from "react";

var UILayoutHeader = React.createClass({
    render: function() {
        return (
            <div className="page-header navbar navbar-fixed-top">
                <div className="page-header-inner ">
                    <div className="page-logo">
                        <a href="index.html">
                            <img src="assets/layouts/layout/img/logo.png" alt="logo" className="logo-default" />
                        </a>
                        <div className="menu-toggler sidebar-toggler">
                            <span></span>
                        </div>
                    </div>
                    <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                    </a>
                </div>
            </div>
        );
    }
});

export default UILayoutHeader;