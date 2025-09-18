import{link} from 'react-router-dom';
export default function Nav(){
    return( <nav>
       <link to ="/home">HOME</link>
       <link to ="/about">ABOUT</link>
       <link to ="/contact">CONTACT</link>
    </nav>
    
    )
}