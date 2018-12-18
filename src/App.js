import React, {Component} from 'react';
// import {addGun} from "./redux/index.redux";
import { connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from "./redux/index.redux";
@connect(
    state=>({num:state.counter}),  //state属性
    {addGun,removeGun,addGunAsync}  //方法，自动dispatch
)
class App extends Component {
    render() {
        const {num,addGun,removeGun,addGunAsync} = this.props;
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={addGun}>申请武器</button>
                <button onClick={removeGun}>撤销武器</button>
                <button onClick={addGunAsync}>拖两天武器</button>
            </div>
        );
    }
}
// const mapStatetoProps = (state)=>{
//     return {num:state}
// }
// const adctionCreators = {addGun,removeGun,addGunAsync}
// App=connect(mapStatetoProps,adctionCreators)(App)
export default App;
