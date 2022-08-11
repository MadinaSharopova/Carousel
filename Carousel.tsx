import React, { useState } from "react"
import { CarouselType } from "./modul"

export function Carousel(){

    let arr: CarouselType[] = [
        {
            id: 1,
            img: 'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg',
            title: 'Title 1',
        },
        {
            id: 2,
            img: 'https://thumbs.dreamstime.com/b/sand-under-sea-abstract-marine-design-template-blue-deep-ocean-180905891.jpg',
            title: 'Title 2',
        },
        {
            id: 3,
            img: 'https://image.shutterstock.com/image-photo/front-view-morning-sky-bright-260nw-1727348677.jpg',
            title: 'Title 3',
        },
        {
            id: 4,
            img: 'https://media.istockphoto.com/photos/palm-tree-in-beach-in-tropical-island-caribbean-guadalupe-picture-id955765580?k=20&m=955765580&s=612x612&w=0&h=ORMyzLYhL-4EB8loHqB4wMIoNjk0HoO29aUEV60DZbo=',
            title: 'Title 4',
        },
    ]
    const [index, setIndex] = useState(0)

    function prev() {
        if (index < 1) {
            setIndex(arr.length - 1)
        }
        setIndex((p) => p - 1)
    }

    function next() {
        if (index > arr.length - 2) {
            setIndex(0)
            return
        }
        setIndex((p) => p + 1)
    }

    return (
        <div className="container">
            <div>
            <img src={`${arr[index].img}`} style={{ width: '600px', height: '400px' }} alt="img" />
            <h1>{arr[index].title}</h1>
            <br />
            <br />
            <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
            </div>
           </div> 
        </div>

    )
}