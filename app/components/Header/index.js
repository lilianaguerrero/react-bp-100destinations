import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://www.delicious.com.au/travel/international/gallery/100-cities-deserve-place-travel-bucket-list/o4lzlr69">
        <Img src={Banner} alt="Destination Cities" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.input} />
        </HeaderLink>
        <HeaderLink to="/cities">
          <FormattedMessage {...messages.display} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
