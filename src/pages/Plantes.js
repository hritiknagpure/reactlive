
import React from 'react';
import Hbanner from '../components/Hbanner';
import { Link } from "react-router-dom";

const h2s={
    color: 'white',
    textShadow: '2px 2px #FF0000',
}



const Planets = () => {
    return (
        <>
            <Hbanner />
           
            
            <div className='my-5'>
                <h2 style={h2s}className='text-center'>Planets in Our Solar System</h2>
            </div>
            <div className='container-fluid mb-5 '>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-3'>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card text-white bg-dark">
                                    <img src="images/mer1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center">MERCURY</h5>
                                        
                                        <p className="card-text">Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon.</p>
                                        <Link to="MERCURY" className="btn btn-primary">Explore Mercury</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card text-white bg-dark">
                                    <img src="images/ven1.png" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Venus</h5>
                                        <p className="card-text">Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky.</p>
                                        <Link to="Venus" className="btn btn-primary">Explore Venus</Link>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card text-white bg-dark">
                                    <img src="images/er.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Earth</h5>
                                        <p className="card-text">The place we call home, Earth is the third rock from the sun and the only planet with known life on it - and lots of it too!</p>
                                        <Link to="Earth" className="btn btn-primary">Explore Earth</Link>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card  text-white bg-dark">
                                    <img src="images/mars1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center">Mars</h5>
                                        <p className="card-text"> The red planet is dusty, cold world with a thin atmosphere and is home to four NASA robots.</p>
                                        <Link to="Mars" className="btn btn-primary">Explore Mars</Link>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card text-white bg-dark">
                                    <img src="images/jupiter1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center
                                    ">
                                        <h5 className="card-title">Jupiter</h5>
                                        <p className="card-text ">Jupiter is a massive planet, twice the size of all other planets combined, and has a centuries-old storm that is bigger than Earth.</p>
                                        <Link to="Jupiter" className="btn btn-primary">Explore Jupiter</Link>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card  text-white bg-dark">
                                    <img src="images/saturn1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Saturn</h5>
                                        <p className="card-text ">The most recognizable planet with a system of icy rings, Saturn is a very unique and interesting planet.</p>
                                        <Link to="saturn1" className="btn btn-primary">Explore Saturn</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card text-white bg-dark">
                                    <img src="images/uranus1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Uranus</h5>
                                        <p className="card-text">Uranus has a very unique rotation--it spins on its side at an almost 90-degree angle, unlike other planets.</p>
                                        <Link to="uranus" className="btn btn-primary">Explore Uranus</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 colo-10 mx-auto'>
                                <div className="card text-white bg-dark">
                                    <img src="images/n1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Neptune</h5>
                                        <p className="card-text">Neptune is now the most distant planet and is a cold and dark world nearly 3 billion miles from the Sun.</p>
                                        <Link to="Neptune" className="btn btn-primary">Explore Neptune</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            


        </>
    );
}

export default Planets;
