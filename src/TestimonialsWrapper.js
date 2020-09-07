import React, { Component } from "react";
import Testimonial from "./Testimonial.js";
import "./TestimonialsWrapper.scss";
import './HighlightsWrapper.scss';
import $ from 'jquery';


var TestimonialsArr = [
    {
        index: 1,
        image: "./img/girl1.jpg",
        name: 'Ania',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. '
    },

    {
        index: 2,
        image: './img/man1.jpg',
        name: 'Jacek',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.'
    },

    {
        index: 3,
        image: './img/man2.jpg',
        name: 'Robert',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. '
    },
    {
        index: 4,
        image: './img/man2.jpg',
        name: 'Tomasz',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. '
    },
    {
        index: 5,
        image: './img/man1.jpg',
        name: 'Paweł',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. '
    },

    {
        index: 6,
        image: './img/man2.jpg',
        name: 'Robert',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. '
    },
    {
        index: 7,
        image: './img/man2.jpg',
        name: 'Piotr',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. '
    },
    {
        index: 8,
        image: './img/man1.jpg',
        name: 'Krzysztof',
        testimonial_text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. '
    }
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function GenerateTestimonialsArr() {
    var arr = [];
    var arr2 = [];
    while (arr.length < 7) {
        var r = getRandomInt(1, 8);
        if (arr.indexOf(r) === -1) {
            arr.push(r);
            TestimonialsArr.forEach((el) => {
                if (el.index === r) {
                    arr2.push(el)
                }
            })
        }
    }
    return arr2
}

class TestimonialsWrapper extends Component {

    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
        this.state = {
            tag: "all",
        }
    }

    scroll(direction) {
        let far = $('.testimonialsWrapper').width() / 1 * direction;
        let pos = $('.testimonialsWrapper').scrollLeft() + far;
        $('.testimonialsWrapper').animate({ scrollLeft: pos }, 1000)
    }


    handleAll = () => {
        this.setState({ tag: 'all' });
    };


    componentDidUpdate() {
        console.log(this.state.tag)
    };

    render() {
        if (this.state.tag === 'all') {
            return (
                <div id="testimonialsContainer">
                    <div class="testimonialsTitle">
                        <h1>Wyjazdy dla każdego</h1>
                        <p>Grupa Taksidi oferuje najróżniejsze wyjazdy, i na pewno znajdziesz coś dla siebie.</p>
                        <button id="button" class="btn">Znajdź wyjazd dla siebie</button>
                    </div>
                    <div className='testimonialsContent'>
                        <div className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</div>
                        <div className="testimonialsWrapper">
                            {GenerateTestimonialsArr().map((el) =>
                                <Testimonial image={el.image} name={el.name} text={el.testimonial_text} />
                            )}
                        </div>
                        <div className="next" onClick={this.scroll.bind(null, 1)}>&#10095;</div>
                    </div>
                </div>
            )
        }
    }
}

export default TestimonialsWrapper;

