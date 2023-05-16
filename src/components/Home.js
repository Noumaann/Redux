import React from 'react'

function Home(props){
    console.warn('Home',props.data)



    return(
        <div>

            <div className='add-to-cart'>
                <span>{props.data.length}</span>

                <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-260nw-731433349.jpg" alt="" />
            </div>
            <h1>Comp</h1>

            <div className='cart-wrapper'>
                <div className='img-Wrapper item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVPX5su5xbEq8XNn_XFbLFxz8oa5xl-UiSdt0FKb5fg&s" alt="img-phn" />
                </div>

                <div className='text-Wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price:80000.00
                    </span>
                </div>

                <div className='button-wrapper item'>
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone'})}>Add TO Cart</button>
                </div>
            </div>
        </div>
    );
};
export default Home