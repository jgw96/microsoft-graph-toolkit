import { css } from 'lit-element';
import { sharedStyles } from '../../styles/shared-styles';
export const styles = [
  sharedStyles,
  css`
    @import 'styles/fabric-styles.css';
    .login-root {
      position: relative;
      flex: 0 0 auto;
      height: 40;
      box-sizing: border-box;
      z-index: 200;
    }

    .login-root-button {
      border: none;
      padding: 0;
      margin: 0;
      background: 0 0;
      cursor: pointer;
      display: flex;
      position: relative;
      height: 100%;
      align-items: center;
      color: #000000;
      font-family: var(--default-font-family);
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
      font-size: 14px;
    }

    .login-root-button:hover {
      color: var(--default-hover-color);
    }

    .login-root-button:focus {
      outline: 0;
    }

    .login-signed-out-root {
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 8px;
      padding-right: 8px;
    }

    .login-signed-out-content:hover {
      color: var(--default-hover-color);
    }

    .login-signed-in-root {
      display: flex;
      align-items: center;
      height: 40px;
    }

    .login-signed-in-root:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .login-signed-in-image {
      height: 24px;
      width: 24px;
      margin-left: 8px;
      margin-right: 4px;
    }

    .login-signed-in-content {
      text-align: center;
      margin-right: 8px;
    }

    .login-header-user-image-container {
      height: 35px;
      width: 35px;
      flex: 0 0 auto;
      padding-left: 11px;
      padding-right: 5px;
      box-sizing: content-box;
    }

    .login-user-image {
      height: 24px;
      width: 24px;
      border: 0;
      border-radius: 35px;
    }

    /* menu */
    .login-menu-root {
      display: none;
      position: absolute;
      right: 0px;
      animation-duration: 200ms;
      animation-name: slideout;
      color: #000000;
      font-family: var(--default-font-family);
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
      font-size: 14px;
      box-sizing: border-box;
      box-shadow: rgba(0, 0, 0, 0.133) 0px 6.4px 14.4px 0px,
        rgba(0, 0, 0, 0.11) 0px 1.2px 3.6px 0px;
      border-width: 0px;
      border-style: solid;
      border-color: #edebe9;
      outline: transparent;
      border-radius: 2px;
    }

    .login-menu-root.show-menu {
      display: block;
      top: 50px;
      animation-name: slidein;
    }

    .login-menu-beak {
      position: absolute;
      background-color: white;
      box-shadow: inherit;
      box-sizing: border-box;
      transform: rotate(45deg);
      height: 16px;
      width: 16px;
      right: 20px;
      top: -8px;
      border: inherit;
    }

    .login-menu-beak-cover {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: white;
      border-radius: 2px;
    }

    .login-menu-content {
      display: flex;
      flex-direction: column;
      background: white;
      padding: 20px 20px 8px 20px;
    }

    .login-menu-user-image {
      height: 65px;
      width: 65px;
    }

    .login-menu-user-profile {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      z-index: 2;
    }

    .login-menu-user-details {
      display: flex;
      flex-direction: column;
      margin-left: 14px;
    }

    .login-menu-user-display-name {
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;
      color: #000011;
    }

    .login-menu-user-email {
      font-size: 15px;
      line-height: 20px;
      color: #5e5e5e;
    }

    .login-menu-commands ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .login-menu-command {
      border: none;
      padding: 0;
      margin: 0px 0px 8px 0px;
      background: 0 0;
      cursor: pointer;
      display: flex;
      position: relative;
      height: 100%;
      align-items: center;
      color: #0078d7;
      font-family: var(--default-font-family);
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
      font-size: 13px;
    }

    @keyframes slidein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `
];