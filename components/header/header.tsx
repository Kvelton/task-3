import { useState, useEffect } from "react"
import { Navigation } from './navigation'
import { HeaderText } from "./header-text"
import { HeaderArrow } from "./header-arrow"

export function Header() {
   const [isMenuVisible, setMenuVisible] = useState<boolean>(false)
   const [isPageScrolledDown, setPageScrolledDown] = useState<boolean>(false)

   const handlePageScroll = () => {
      if (window.scrollY > 100) {
         setPageScrolledDown(true)
      } else {
         setPageScrolledDown(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', handlePageScroll)

      return () => window.removeEventListener('scroll', handlePageScroll)
   })

   function handleMenuClick() {
      setMenuVisible(!isMenuVisible);
      if (!isMenuVisible) {
         document.body.classList.add('_lock')
         document.querySelector('.welcome-section__arrow')?.classList.add('_active')
      } else {
         document.body.classList.remove('_lock')
         document.querySelector('.welcome-section__arrow')?.classList.remove('_active')
      }
   }

   return (
      <header id="title_list0" className="welcome-section">
         <div className={`header${isPageScrolledDown ? ' _active' : ''}`}>
            <a className="header__logo"></a>
            <Navigation isMenuVisible={isMenuVisible} />
            <button className={`header__menu-button${isMenuVisible ? ' _active' : ''}`} type="button" onClick={handleMenuClick}>
               <span></span>
            </button>
         </div>
         <HeaderText />
         <HeaderArrow />
      </header >
   )
}

