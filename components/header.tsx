import { useState, useEffect } from "react"
import { Navigation } from '../components/navigation'


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
      } else {
         document.body.classList.remove('_lock')
      }
   }

   return (
      <header id="title_list0" className="welcome-section">
         <div className={`header${isPageScrolledDown ? ' _active' : ''}`}>
            <a className="header__logo"></a>
            {/* <nav className={`menu${isMenuVisible ? ' _active' : ''}`}>
               <ul className="menu__list">
                  <li className="menu__item"><a data-goto="#title_list0" href="#" className="menu__link">Главная</a></li>
                  <li className="menu__item" ><a data-goto="#title_list1" href="#" className="menu__link">Достопримечательности</a></li>
                  <li className="menu__item"><a data-goto="#title_list2" href="#" className="menu__link">Туры</a></li>
                  <li className="menu__item"><a data-goto="#title_list3" href="#" className="menu__link">Контакты</a></li>
               </ul>
            </nav> */}
            <Navigation isMenuVisible={isMenuVisible} />
            <button className={`header__menu-button${isMenuVisible ? ' _active' : ''}`} type="button" onClick={handleMenuClick}>
               <span></span>
            </button>
         </div>
         <div className="welcome-section__text">
            <h1 className="welcome-section__title">ХАКАСИЯ</h1>
            <h5 className="welcome-section__subtitle">Туристическое Агренство Республики Хакасия</h5>
         </div>
         <div className="welcome-section__trajectory-arrow">
            <button id="arrow" className={`welcome-section__arrow${isMenuVisible ? ' _active' : ''}`}>
               <svg className="welcome-section__line1" >
                  <use xlinkHref="/img/sprite.svg#line1"></use>
               </svg>
               <svg className="welcome-section__line2">
                  <use xlinkHref="/img/sprite.svg#line2"></use>
               </svg>
            </button>
         </div>
      </header >
   )
}

