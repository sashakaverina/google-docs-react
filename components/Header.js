import React from 'react';
import { Button, Icon } from '@material-tailwind/react';


function Header() {
  return <div className='flex items-center'>
      <Button 
        color="gray"
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
        className='hidden md:inline-flex h-20 w-20 border-0'
      >
       <Icon name='menu' size='3xl'/>
      </Button>
  </div>;
}

export default Header;
