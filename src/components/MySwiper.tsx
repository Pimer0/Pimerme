import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Slider = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return (
        <div className="flex place-content-center w-6/12 h-64 m-7 flex-col">
            <h2 className='text-center m-7 text-zinc-100'>Ce site est fait avec : </h2>
            <BsArrowLeftCircleFill className="arrow arrow-left absolute left-72 fill-zinc-100 h-6 w-6" onClick={prevSlide} />
            {data.map((item, idx) => (
                <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide hidden"} />
            ))}
            <BsArrowRightCircleFill className="absolute right right-72 fill-zinc-100 h-6 w-6" onClick={nextSlide} />
{/*             <div className="flex absolute bottom-4">
                {data.map((_, idx) => (
                    <button className={slide === idx ? 'indicator' : 'indicator indicator-inactive'} key={idx} onClick={() => null}></button>
                ))}
            </div> */}
        </div>
    );
};

export default Slider;
