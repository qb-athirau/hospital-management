import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { HeaderSection, Image, SignupBtnWraper } from './style';
import { useUserState, useUserDispatch, signOut } from '../../context/UserContext';
import { useMedia } from '../../utils/domUtils';
import Button from '../Button';
import SubHeader from './components/subHeader';
import { useModal } from '../Modal/useModal';
import { CustomModal } from '../Modal/customModal';
import { Login } from '../../pages/Login';
import { useNavigation } from '../../utils/useNavigateHook';
import PopperMenuItem from '../Popper';
import { headerPopperList } from '../../configs/constants';

const Header = (props) => {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const isMobile = useMedia('(max-width: 831px)');
  const [showNavbar, setShowNavbar] = useState(!isMobile);
  const { isAuthenticated } = useUserState();
  const userDispatch = useUserDispatch();
  const { navigate } = useNavigation();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setShowNavbar(!isMobile);
  }, [isMobile]);

  const toggleNavbars = () => {
    setShowNavbar(!showNavbar);
  };
  const handleButtonClick = (url) => props.history.push(url);

  const toggleSignin = () => {
    if (isAuthenticated) {
      signOut(userDispatch, props.history);
    } else {
      props.history.push('/login');
    }
  };

  return (
    <HeaderSection>
      {isMobile && (
        <HeaderSection.Menu onClick={toggleNavbars}>
          <FontAwesomeIcon icon={faBars} />
        </HeaderSection.Menu>
      )}
      <HeaderSection.MainHeader>
        <HeaderSection.HeaderWrap>
          <Image
            src={`${process.env.PUBLIC_URL}/images/header-images/heart-cross.jpg`}
            alt="wecare_logo"
            onClick={() => navigate('', props.history)}
          />
          {!isMobile && <SubHeader showNavbar={showNavbar} navigationList={props.navigationList} />}
          <HeaderSection.Contact>
            <FontAwesomeIcon icon={faPhoneAlt} />
            &nbsp;:&nbsp; 9991234567
          </HeaderSection.Contact>
          <HeaderSection.HeaderRight>
            {isAuthenticated && (
              <React.Fragment>
                <div type="button">
                  <FontAwesomeIcon icon={faUserCircle} onClick={handleTooltipOpen} />
                </div>
                <PopperMenuItem
                  open={open}
                  className="popper"
                  placement="bottom"
                  popperList={headerPopperList}
                  menuItemClick={toggleSignin}
                />
              </React.Fragment>
            )}
            {!isAuthenticated && !isMobile && (
              <React.Fragment>
                <SignupBtnWraper>
                  <Button onClick={() => navigate('register', props.history)}>Signup</Button>
                </SignupBtnWraper>
                <SignupBtnWraper>
                  <Button onClick={toggleModal}>Login</Button>
                </SignupBtnWraper>
              </React.Fragment>
            )}
            {!isAuthenticated && isMobile && (
              <React.Fragment>
                <HeaderSection.MobileLink>
                  <Link to="/register">Signup</Link>
                </HeaderSection.MobileLink>
                | &nbsp;
                <HeaderSection.MobileLink>
                  <Link to="/login">Login</Link>
                </HeaderSection.MobileLink>
              </React.Fragment>
            )}
          </HeaderSection.HeaderRight>
        </HeaderSection.HeaderWrap>
      </HeaderSection.MainHeader>
      {isMobile && (
        <HeaderSection.SubHeader>
          <SubHeader showNavbar={showNavbar} navigationList={props.navigationList} />
        </HeaderSection.SubHeader>
      )}
      <CustomModal title="Item Modal" open={itemModalOpen}>
        <Login handleClose={() => setItemModalOpen(false)} />
      </CustomModal>
    </HeaderSection>
  );
};

export default Header;
