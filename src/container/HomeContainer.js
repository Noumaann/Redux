import {connect} from 'react-redux'
import Home from "../components/Home";
import {addToCart} from '../Services/Action/action'

const mapStateToprops=state=>({
    cardData:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))    
})

export default connect(mapStateToprops,mapDispatchToProps)(Home)

//export default Home;