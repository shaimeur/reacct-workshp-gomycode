/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './ColorBigBox.css'
import ColorBox from './ColorBox'
const ColorBigBox = ({colors}) =>{
    let myBoxs = [];
    for(let i = 0 ; i < 25; i++){
        myBoxs.push(<ColorBox colors={colors}/>)
    }
    return (
            <div className='ColorBigBox'>
                {myBoxs}
            </div>
    )
}
export default ColorBigBox