import { mainDrawerWidth } from 'lib/constants';

export type ThemeMode = 'light' | 'dark' | 'system';
export type NavigationMenuType = 'sidenav' | 'topnav' | 'combo';
export type SidenavType = 'default' | 'stacked' | 'slim';
export type TopnavType = 'default' | 'stacked' | 'slim';
export type TextDirection = 'ltr' | 'rtl';
export type NavColor = 'default' | 'vibrant';
export type SupportedLocales = 'en-US' | 'fr-FR' | 'bn-BD' | 'zh-CN' | 'hi-IN' | 'ar-SA';
export type UserRole = 'subscriber' | 'creator' | null;

export interface Config {
  textDirection: TextDirection;
  navigationMenuType: NavigationMenuType;
  sidenavType: SidenavType;
  sidenavCollapsed: boolean;
  topnavType: TopnavType;
  navColor: NavColor;
  openNavbarDrawer: boolean;
  drawerWidth: number;
  locale: SupportedLocales;
  role: UserRole;
}

export const initialConfig: Config = {
  textDirection: 'ltr',
  navigationMenuType: 'sidenav',
  sidenavType: 'default',
  sidenavCollapsed: false,
  topnavType: 'default',
  navColor: 'default',
  openNavbarDrawer: false,
  drawerWidth: mainDrawerWidth.full,
  locale: 'en-US',
  role: null,
};

export const defaultJwtAuthCredentials = {
  email: 'demo@aurora.com',
  password: 'password123',
};
