import { MouseEventHandler } from "react"
import {ReactNode} from 'react'


interface BraceletArticle {
    name: string,
    price: number,                      /////// number
    size: string,    //  "Only medium size available right now"
    onclickMinus: MouseEventHandler,
    onclickPlus: MouseEventHandler,
    children: ReactNode,
    quantity: number,
    totalPrice: number
}

const Article = ({name, price, size, children, onclickMinus, quantity, onclickPlus,totalPrice 
    }: BraceletArticle) => {
    return (
        <div className="w-full lg:w-3/6 p-2 bg-second rounded-xl">
            {children}
            <div className="flex p-4">
                <h3 className='flex-1 text-3xl'>{name}</h3>
                <span className="text-3xl">{price} kr</span>
            </div>
            <div>
                <h3 className='p-4'>{size}</h3>
                <div className="flex items-center p-2 text-2xl">
                    
                        <div className='flex'>
                            <button className="p-4 bg-buttons border border-orange-400 hover:bg-buttonsHover h-fit" onClick={onclickMinus}
                            >-</button>
                            <span className="p-4 bg-buttons border-t border-b border-buttonsHover h-fit">{quantity}</span>
                            <button className='p-4 bg-buttons border border-orange-400 hover:bg-buttonsHover h-fit' onClick={onclickPlus}
                            >+</button>
                        </div>
                        <div className='text-xl text-end w-full md:text-2xl'>
                            <h3>Total price: {totalPrice} Kr</h3>
                        </div>
                    
                </div>
            </div>
            <div className='flex'>
            <button className="text-xl md:text-3xl m-2 p-4 mt-4 w-full bg-buttons border border-orange-400  hover:bg-buttonsHover rounded-xl">BUY</button>
            </div>
        </div>
    )
}

export default Article

