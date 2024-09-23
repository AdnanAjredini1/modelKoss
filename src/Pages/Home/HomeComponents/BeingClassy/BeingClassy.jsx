import './being-classy.scss';
import icon from './being-classy-assets/Subtraction 2.svg'
import Icon from '../Hero/Icon';
import bigIcon from './being-classy-assets/Group 12.svg'
function BeingClassy() {
    return (
        <div className='beingClassyWrapper'>
            <img src={icon} className='iconImg'/>
            <p className='text1'>BEING CLASSY IS BENEFICIAL</p>
            <p className='text2'>BEING PROFFESIONAL IS INVALUABLE</p>
            <img src={bigIcon} className='bigIcon' />
          
        </div>
    );
}

export default BeingClassy;