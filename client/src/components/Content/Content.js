import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Content.css"

class Content extends Component {
    render() {
        return (
            <div className="pt-5 pb-5">
                {/* div all categories */}
                <div className="allcategory">
                    <div className="container-fluid text-center">
                        <h3>Less searching. More finding.</h3>
                        <h4>Discover royalty-free images, illustrations and videos that will make you stand out.</h4>
                    </div>
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <Link to="/view/photos">
                                        <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </Link>
                                    <h5 className="mt-3">Photos</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <Link to="/view/illustrations">
                                        <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </Link>
                                    <h5 className="mt-3">Illustrations</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <Link to="/view/vectors">
                                        <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </Link>
                                    <h5 className="mt-3">Vectors</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Most Viwers */}
                <div className="allcategory" style={{ paddingTop: "120px" }}>
                    <div className="container-fluid text-center">
                        <h3>The most viewers</h3>
                    </div>
                    <div className="container pt-5">
                        {/* <div className="row">
                            <div className="col-xs-4 col-sm-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                    <h5 className="mt-3">Photos</h5>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                    <h5 className="mt-3">Illustrations</h5>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                    <h5 className="mt-3">Vectors</h5>
                                </div>
                            </div>
                        </div> */}
                        {/* Test */}

                        <div className="row pb-4">
                            <div className="col-12">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </div>

                                    <h5 className="mt-3">Photos</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row pb-4">
                            <div className="col-6">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </div>
                                    <h5 className="mt-3">Photos</h5>
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </div>
                                    <h5 className="mt-3">Photos</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row pb-4">
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </div>
                                    <h5 className="mt-3">Photos</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </div>
                                    <h5 className="mt-3">Illustrations</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                    </div>
                                    <h5 className="mt-3">Vectors</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Free field */}
                <div className="allcategory" style={{ paddingTop: "120px" }}>
                    <div className="container-fluid text-center">
                        <h3>Join to us for getting free pictures</h3>
                    </div>
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <Link to="/view/freephotos">
                                            <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                        </Link>
                                    </div>
                                    <h5 className="mt-3">Free photo</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <Link to="/view/freeillustrations">
                                            <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                        </Link>                                    </div>
                                    <h5 className="mt-3">Free illustration</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ backgroundColor: "white", padding: "5px" }} className="text-center imagediv">
                                    <div className="text-center view zoom">
                                        <Link to="/view/freevectors">
                                            <img style={{ width: "100%", height: "300px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                        </Link>                                     </div>
                                    <h5 className="mt-3">Free vector</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;