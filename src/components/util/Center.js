
import './Center.css'

const Center = ({children}) => { // this is a special prop
  return (
    <div className='center'>
      {children}
    </div>
  );
}


export default Center;