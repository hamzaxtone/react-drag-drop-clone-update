import React from 'react';
import DraggableItem from './DraggableItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faTable } from '@fortawesome/free-solid-svg-icons';

const LeftPanelDetail = ({ closePanel,typePanel,onDragStart }) => {

    const closePanelFunc = () => {
        closePanel(null);
      };

return (
    <>
    
<div className="css-1ix44gv">
  <div className="css-1fq5xhj">
    <div className="css-1sr1lb8">
      <span className="css-14q1onm">{typePanel}</span>
      <div className="css-hsza6h" onClick={() => closePanelFunc()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
          <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></path>
        </svg>
      </div>
    </div>
    <div className="css-1beovyh">

    
    {typePanel == 'Events' &&
        <>
           <ul className="css-1nxiby7">
      
        
      <li className="css-7toppc">
        <DraggableItem itemName="Chair" onDragStart={onDragStart} >
             <FontAwesomeIcon color='black' size='3x' icon={faChair} />
        </DraggableItem>
        </li>
        <li className="css-7toppc">
        <DraggableItem itemName="Table" onDragStart={onDragStart} >
             <FontAwesomeIcon color='black' size='3x' icon={faTable} />
        </DraggableItem>
        </li>
        </ul> 
        </>
    } 
    
    {typePanel == 'Graphic' &&
    <> 
      {/* <ul className="css-1nxiby7">
        <DraggableItem itemName="Image" src="https://template.canva.com/EAFaarkqz_0/2/0/400w-IVVQCZOr1K4.jpg"  onDragStart={onDragStart}>
            <li className="css-7toppc">
                <img loading="lazy" src="https://template.canva.com/EAFaarkqz_0/2/0/400w-IVVQCZOr1K4.jpg" className="css-iw3xil" />
            </li>
        </DraggableItem>
      </ul> */}
      <ul className="css-1nxiby7">
      
        
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/166_Houzz_logo_logos-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/166_Houzz_logo_logos-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/uiux-001-line/32/UI_UX_UIUX_Back-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/uiux-001-line/32/UI_UX_UIUX_Back-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_chrome-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_chrome-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/56-linkedin-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/56-linkedin-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_add-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_add-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/dmitry-mirolyubov/44/halloween_outline-23-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/dmitry-mirolyubov/44/halloween_outline-23-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-24-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-24-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2259/512/search-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2259/512/search-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Medium_colored_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Medium_colored_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_photoshop-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_photoshop-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/23-whatsapp-2-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/23-whatsapp-2-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/38-shazam-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/38-shazam-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-locked-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-locked-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/ethereum-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/ethereum-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/plus-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/plus-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/lgbt-illustrations/112/179-_sign-female-lesbian-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/lgbt-illustrations/112/179-_sign-female-lesbian-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-06-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-06-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/social-icons-16/512/Google_Plus-2-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/social-icons-16/512/Google_Plus-2-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-40-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-40-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-09-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-09-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2421/512/TikTok-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2421/512/TikTok-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/telegram-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/telegram-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_microsoft_store_windows-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_microsoft_store_windows-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/telegram-logo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/telegram-logo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/material-core/20/shopping-cart-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/material-core/20/shopping-cart-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/freebies-2/24/coupon-cut-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/freebies-2/24/coupon-cut-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/612/aiga_mail_bg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/612/aiga_mail_bg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_sans_up-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_sans_up-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/success-filloutline/64/paper-contract-document-files_and_folders-user-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/success-filloutline/64/paper-contract-document-files_and_folders-user-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Tote_Bag-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Tote_Bag-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/Facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/Facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_opera-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_opera-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-128.png" />
            </DraggableItem>
            </li>
        
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/printer_settings-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/printer_settings-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/uiux-001-solid/32/Next-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/uiux-001-solid/32/Next-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/b-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/b-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-11-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-11-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/sale-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/sale-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_firefox-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_firefox-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Facebook-Outline-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Facebook-Outline-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_windows_explorer-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_windows_explorer-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-22-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-22-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-2/24/comment-upload-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-2/24/comment-upload-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/swarm-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/swarm-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_itunes-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_itunes-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Youtube-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Youtube-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/linkedin-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/linkedin-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_finder-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_finder-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/group2-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/group2-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-08-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-08-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/down-bottom-arrow-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/down-bottom-arrow-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/cart-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/cart-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_dropbox-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_dropbox-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/zoom-out-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/zoom-out-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-45-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-45-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/book_text_security-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/book_text_security-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2421/512/Telegram-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2421/512/Telegram-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-round-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-round-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/essentials-73/24/040_-_Tick-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/essentials-73/24/040_-_Tick-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/371_Wechat_logo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/371_Wechat_logo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/record-round-circle-dot-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/record-round-circle-dot-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_vlc_media_player-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_vlc_media_player-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Mastercard-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Mastercard-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-47-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-47-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/100-basic-for-user-interface/32/79-users-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/100-basic-for-user-interface/32/79-users-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/financial-45/24/moneys-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/financial-45/24/moneys-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/material-core/18/check-box-outline-blank-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/material-core/18/check-box-outline-blank-128.png" />
            </DraggableItem>
            </li>
        
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Zhihu-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Zhihu-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_imo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_imo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/dell-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/dell-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/archiveofourown-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/archiveofourown-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/quantcast-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/quantcast-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-01-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-01-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/price_tag-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/price_tag-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right_2-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right_2-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/telegram_social_media_network_chat-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/telegram_social_media_network_chat-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/PayPal_alt-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/PayPal_alt-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/logo-facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/logo-facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_illustrator-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_illustrator-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/material-core/18/check-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/material-core/18/check-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_spotify-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_spotify-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/phone-outline-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/phone-outline-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/25-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/25-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_safari-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_safari-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-21-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-21-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/PINTEREST-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/PINTEREST-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-31-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-31-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-network-outline-3/100/Facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-network-outline-3/100/Facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/freeline/32/heart_like_love_vote-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/freeline/32/heart_like_love_vote-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/infographics-chart-3/512/11-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/infographics-chart-3/512/11-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-play-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-play-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/envelope-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/envelope-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/shazam-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/shazam-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/coffeescript-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/coffeescript-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_location_on_48px-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_location_on_48px-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_ubuntu-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_ubuntu-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/telegram-alt-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/telegram-alt-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Home-01-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Home-01-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence26-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence26-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google_keyboard-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google_keyboard-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/point-of-interest-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/point-of-interest-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/freeline/32/cascade_display_layout_stack_sw_view-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/freeline/32/cascade_display_layout_stack_sw_view-128.png" />
            </DraggableItem>
            </li>
        
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/freeline/32/coffee_cup_drink_hot_tea-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/freeline/32/coffee_cup_drink_hot_tea-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_local_phone_48px-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_local_phone_48px-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/36.Watch-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/36.Watch-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-square2-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-square2-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_playstore_google-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_playstore_google-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/WhatsApp-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/WhatsApp-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-04-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-04-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_web_Internet_network_www_communication_global_worldwide-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_web_Internet_network_www_communication_global_worldwide-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/dropbox-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/dropbox-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/basecamp-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/basecamp-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-18-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-18-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-06-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-06-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Youtube-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Youtube-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/source_code-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/source_code-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/clock-time-ticker-times-hour-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/clock-time-ticker-times-hour-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/232_Nintendo_Switch_logo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/232_Nintendo_Switch_logo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/74-outlook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/74-outlook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/30_Atlassian_logo_logos-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/30_Atlassian_logo_logos-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Whatsapp_glyph_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Whatsapp_glyph_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/facebook-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/facebook-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Tumblr2_colored_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Tumblr2_colored_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/26.Camera-Back-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/26.Camera-Back-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/material-core/20/language-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/material-core/20/language-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_border_style_48px-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_border_style_48px-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_left_48px-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_left_48px-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/340_Tripadvisor_logo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/340_Tripadvisor_logo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/freeline/32/home_house_real_estate-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/freeline/32/home_house_real_estate-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/for-your-interface-free-samples/128/Cart-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/for-your-interface-free-samples/128/Cart-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-13-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-13-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn1.iconfinder.com/data/icons/social-networks-15/512/gogle_network_logo-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn1.iconfinder.com/data/icons/social-networks-15/512/gogle_network_logo-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_2_glyph_svg-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_2_glyph_svg-128.png" />
            </DraggableItem>
            </li>
          <li className="css-7toppc">
            <DraggableItem itemName="Image" src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/instagram-fill-128.png" onDragStart={onDragStart} >
            <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/instagram-fill-128.png" />
            </DraggableItem>
            </li>
        
      
    </ul>
    </>
    }
    </div>
  </div>
</div>
    </>
)
};

export default LeftPanelDetail;