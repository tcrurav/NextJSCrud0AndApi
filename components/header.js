import { useState } from 'react'
import styles from '../styles/BicycleHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(showMenu ? false : true);
  }

  const changePage = (route) => {
    window.location.href = route;
  }

  return (
    <>
      <div id={styles.bicycleHeaderMenu} className={showMenu ? styles.showMenu : styles.hideMenu}>
        <FontAwesomeIcon className={showMenu ? styles.showCloseIcon : styles.hideCloseIcon}
          icon={faX} id={styles.bicycleHeaderClose} onClick={handleToggle} />
        <p onClick={() => changePage("/")}>Home</p>
        <p onClick={() => changePage("/bicycle_add")}>Add new bicycle</p>
        <p onClick={() => changePage("/bicycle_list")}>List all bicycles</p>
      </div>

      <div id={styles.bicycleHeaderContainer}>
        <FontAwesomeIcon className={showMenu ? styles.hideMenuIcon: styles.showMenuIcon }
          icon={faBars} id={styles.bicycleHeaderHamburger} onClick={handleToggle} />
        <p>Bicycles App</p>
      </div>
    </>
  );
}